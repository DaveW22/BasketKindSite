import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { hasSupabaseConfig, supabase } from "./lib/supabaseClient";

type VerifyState = "loading" | "success" | "neutral" | "error";

const REDIRECT_SECONDS = 5;
const DEFAULT_SIGN_IN_PATH = "/";
const ALLOWED_SIGN_IN_PATHS = new Set([
  "/",
  "/signin",
  "/login",
  "/auth/signin",
  "/auth/login"
]);

/*
Supabase Auth redirect URL guidance:
- Production: https://YOUR-DOMAIN.com/auth/verified
- Local dev: http://localhost:PORT/auth/verified

Set this path in Supabase Auth settings so email confirmation links return here.
*/

function parseHashParams(hash: string): URLSearchParams {
  const raw = hash.startsWith("#") ? hash.slice(1) : hash;
  return new URLSearchParams(raw);
}

function getSafeInternalPath(value: string | undefined, fallback: string): string {
  if (!value) {
    return fallback;
  }

  // Internal paths only. This prevents open redirects like //evil.com or https://evil.com.
  if (!value.startsWith("/") || value.startsWith("//")) {
    return fallback;
  }

  return value;
}

function resolveSignInPath(): string {
  const configured = getSafeInternalPath(import.meta.env.VITE_SIGN_IN_PATH, DEFAULT_SIGN_IN_PATH);
  return ALLOWED_SIGN_IN_PATHS.has(configured) ? configured : DEFAULT_SIGN_IN_PATH;
}

function resolveResendPath(): string | null {
  const configured = import.meta.env.VITE_RESEND_VERIFICATION_PATH;
  if (!configured) {
    return null;
  }

  return getSafeInternalPath(configured, "");
}

function friendlyErrorMessage(): string {
  return "We couldn't verify this link. It may have expired or already been used.";
}

export default function AuthVerifiedPage() {
  const signInPath = useMemo(resolveSignInPath, []);
  const resendPath = useMemo(resolveResendPath, []);

  const [status, setStatus] = useState<VerifyState>("loading");
  const [secondsRemaining, setSecondsRemaining] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    let mounted = true;

    async function processVerification(): Promise<void> {
      if (!hasSupabaseConfig || !supabase) {
        if (mounted) {
          setStatus("error");
        }
        return;
      }

      const url = new URL(window.location.href);
      const searchParams = new URLSearchParams(url.search);
      const hashParams = parseHashParams(url.hash);

      const code = searchParams.get("code");
      const accessToken = hashParams.get("access_token") ?? searchParams.get("access_token");
      const refreshToken = hashParams.get("refresh_token") ?? searchParams.get("refresh_token");
      const error = hashParams.get("error") ?? searchParams.get("error");

      const cleanUrl = `${window.location.origin}${window.location.pathname}`;

      try {
        if (error) {
          if (mounted) {
            setStatus("error");
          }
          return;
        }

        if (code) {
          const result = await supabase.auth.exchangeCodeForSession(code);
          if (result.error) {
            if (mounted) {
              setStatus("error");
            }
            return;
          }

          if (mounted) {
            setStatus("success");
          }
          return;
        }

        if (accessToken && refreshToken) {
          const result = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken
          });

          if (result.error) {
            if (mounted) {
              setStatus("error");
            }
            return;
          }

          if (mounted) {
            setStatus("success");
          }
          return;
        }

        const { data } = await supabase.auth.getSession();
        if (mounted) {
          setStatus(data.session ? "success" : "neutral");
        }
      } catch {
        if (mounted) {
          setStatus("error");
        }
      } finally {
        window.history.replaceState({}, document.title, cleanUrl);
      }
    }

    processVerification();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (status !== "success") {
      return;
    }

    const interval = window.setInterval(() => {
      setSecondsRemaining((previous) => {
        if (previous <= 1) {
          window.clearInterval(interval);
          window.location.assign(signInPath);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [signInPath, status]);

  return (
    <main className="auth-verified-shell" aria-live="polite">
      <section className="auth-verified-card" aria-labelledby="auth-verified-title">
        <div className="auth-verified-mark" aria-hidden="true">
          {status === "success" ? "✓" : status === "error" ? "!" : "•"}
        </div>

        <p className="auth-verified-kicker">Kind Basket account</p>

        {status === "loading" && (
          <>
            <h1 id="auth-verified-title">Verifying your email...</h1>
            <p>
              We are confirming your account now so you can start building smarter
              shopping lists.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <h1 id="auth-verified-title">Email verified</h1>
            <p>
              Your Kind Basket account is ready. You can now sign in and start
              building smarter shopping lists.
            </p>
            <p className="auth-verified-countdown">
              Taking you to sign in in {secondsRemaining}s.
            </p>
            <div className="auth-verified-actions">
              <Link className="btn btn-primary" to={signInPath}>
                Continue to sign in
              </Link>
              <Link className="btn btn-secondary" to="/">
                Go to homepage
              </Link>
            </div>
          </>
        )}

        {status === "neutral" && (
          <>
            <h1 id="auth-verified-title">Verification already used</h1>
            <p>
              This verification link may have already been used. Try signing in with
              your email.
            </p>
            <div className="auth-verified-actions">
              <Link className="btn btn-primary" to={signInPath}>
                Go to sign in
              </Link>
            </div>
          </>
        )}

        {status === "error" && (
          <>
            <h1 id="auth-verified-title">We couldn't verify this link</h1>
            <p>{friendlyErrorMessage()}</p>
            <div className="auth-verified-actions">
              {resendPath ? (
                <Link className="btn btn-primary" to={resendPath}>
                  Request a new verification email
                </Link>
              ) : (
                <Link className="btn btn-primary" to={signInPath}>
                  Return to sign in
                </Link>
              )}
              <Link className="btn btn-secondary" to="/">
                Go to homepage
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

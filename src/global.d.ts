declare module "*.png" {
  const value: string;
  export default value;
}

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  readonly VITE_SIGN_IN_PATH?: string;
  readonly VITE_RESEND_VERIFICATION_PATH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

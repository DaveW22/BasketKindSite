// Kind Basket static site JS
// Handles cookie consent and shared waitlist interactions.

document.addEventListener('DOMContentLoaded', function() {
  const defaultWaitlistAction = 'https://formspree.io/f/mwvadlwy';

  // Cookie consent banner logic
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');
    if (acceptBtn) acceptBtn.onclick = function() {
      localStorage.setItem('cookieConsent', 'accepted');
      banner.style.display = 'none';
    };
    if (rejectBtn) rejectBtn.onclick = function() {
      localStorage.setItem('cookieConsent', 'rejected');
      banner.style.display = 'none';
    };
    // Show only if not already set
    if (localStorage.getItem('cookieConsent')) {
      banner.style.display = 'none';
    }
  }

  const waitlistForms = document.querySelectorAll('.waitlist-form');
  waitlistForms.forEach(function(form) {
    if (!(form instanceof HTMLFormElement)) {
      return;
    }

    const action = form.getAttribute('action');
    if (!action) {
      form.setAttribute('action', defaultWaitlistAction);
    }

    let status = form.nextElementSibling;
    if (!(status instanceof HTMLElement) || !status.classList.contains('waitlist-status')) {
      status = document.createElement('div');
      status.className = 'waitlist-status';
      status.setAttribute('aria-live', 'polite');
      form.insertAdjacentElement('afterend', status);
    }

    form.addEventListener('submit', async function(event) {
      event.preventDefault();

      const submitButton = form.querySelector('button[type="submit"]');
      const originalLabel = submitButton ? submitButton.textContent : '';

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      status.textContent = '';
      status.classList.remove('waitlist-status-success', 'waitlist-status-error');

      try {
        const response = await fetch(form.action || defaultWaitlistAction, {
          method: form.method || 'POST',
          body: new FormData(form),
          headers: {
            Accept: 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Request failed');
        }

        form.reset();
        status.textContent = 'Thanks for joining. We will be in touch soon.';
        status.classList.add('waitlist-status-success');
      } catch (error) {
        status.textContent = 'Something went wrong. Please try again in a moment.';
        status.classList.add('waitlist-status-error');
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalLabel;
        }
      }
    });
  });
});

// Kind Basket HTML5 Migration JS
// Handles cookie consent and any interactive features

document.addEventListener('DOMContentLoaded', function() {
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
});

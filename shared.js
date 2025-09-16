window.addEventListener('DOMContentLoaded', () => {
  // Load header
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header-container').innerHTML = data;

      // Highlight current nav link
      const current = window.location.pathname.split('/').pop() || 'index.html';
      document.querySelectorAll('header nav a').forEach(a => {
        if (a.getAttribute('href') === current) {
          a.classList.add('active');
        }
      });
    });

  // Load footer
  fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    });
});

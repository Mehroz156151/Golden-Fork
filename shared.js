window.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header-container').innerHTML = data;

      const current = window.location.pathname.split('/').pop() || 'index.html';
      document.querySelectorAll('header nav a').forEach(a => {
        if (a.getAttribute('href') === current) {
          a.classList.add('active');
        }
      });
    });

  fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    });
});

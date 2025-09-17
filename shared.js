window.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header-container').innerHTML = data;

      // highlight current page
      const current = window.location.pathname.split('/').pop() || 'index.html';
      document.querySelectorAll('header nav a').forEach(a => {
        if (a.getAttribute('href') === current) {
          a.classList.add('active');
        }
      });

      // drawer toggle
      const menuToggle = document.getElementById('menu-toggle');
      const navMenu = document.getElementById('nav-menu');
      const drawerClose = document.getElementById('drawer-close');

      menuToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
      });

      drawerClose.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });

  fetch('footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    });
});

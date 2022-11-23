const btn = document.querySelector('.menu-btn');
const icon = document.querySelector('.union');

// eslint-disable-next-line func-names
btn.onclick = function () {
  if (icon.classList.contains('.union')) {
    icon.classList.replace('.union', '.btn-close-nav');
  } else {
    icon.classList.replace('.btn-close-nav', '.union');
  }
};
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

const navLinks = document.querySelectorAll('.nav-item');

function linkshandler() {
  navMenu.classList.remove('show');
}
navLinks.forEach((n) => n.addEventListener('click', linkshandler)); navLinks.forEach((n) => n.addEventListener('click', linkshandler));
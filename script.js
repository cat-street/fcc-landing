const navButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__link');

navButton.addEventListener('click', function() {
  nav.classList.toggle('nav_hidden');
})

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', function() {
    nav.classList.toggle('nav_hidden');
  });
}

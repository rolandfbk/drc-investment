// Pop-up Menu Implementation
const showMenu = document.querySelector('.toogle-menu');

showMenu.addEventListener('click', () => {
  document.getElementById('wrapper').style.display = 'none';
  document.getElementById('wrapper-menu').style.display = 'block';
});

const closeMenu = document.querySelector('.close-menu');

closeMenu.addEventListener('click', () => {
  document.getElementById('wrapper-menu').style.display = 'none';
  document.getElementById('wrapper').style.display = 'block';
});

const closeMenuHome = document.querySelector('.close-menu-home');

closeMenuHome.addEventListener('click', () => {
  document.getElementById('wrapper-menu').style.display = 'none';
  document.body.style.display = 'none';
  document.getElementById('wrapper').style.display = 'flex';
});

const closeMenuAbout = document.querySelector('.close-menu-about');

closeMenuAbout.addEventListener('click', () => {
  document.getElementById('wrapper-menu').style.display = 'none';
  document.body.style.display = 'none';
  document.getElementById('wrapper').style.display = 'flex';
});
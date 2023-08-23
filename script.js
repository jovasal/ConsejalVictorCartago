const menuHamburger = document.querySelector('.burger-menu');
const navMobile = document.querySelector('.navbar');
const navMobileLinks = document.querySelectorAll('.nav-links a');
const hamburgerImage = document.querySelector('#burger-menu');

function toggleMenu() {
    if (navMobile.classList.contains('active')) {
      hamburgerImage.src = './images/cancel.svg';
    } else {
      menuHamburger = 'burger-menu';
    }
  }
  
  menuHamburger.addEventListener('click', () => {
    navMobile.classList.toggle('active');
    toggleMenu();
  });
  
  navMobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('active');
      toggleMenu();
    });
  });
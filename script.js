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

  const popupButton1 = document.getElementById('popupbutton1');
    const popupButton2 = document.getElementById('popupbutton2');
    const popup1 = document.getElementById('popup1');
    const popup2 = document.getElementById('popup2');
    const close1 = document.getElementById('close1');
    const close2 = document.getElementById('close2');

    popupButton1.addEventListener('click', () => {
        popup1.style.display = 'block';
    });

    popupButton2.addEventListener('click', () => {
        popup2.style.display = 'block';
    });

    close1.addEventListener('click', () => {
        popup1.style.display = 'none';
    });

    close2.addEventListener('click', () => {
        popup2.style.display = 'none';
    });


    // script.js
document.addEventListener("DOMContentLoaded", function() {
  const popup = document.getElementById("popuppp");
  const cerrarPopup = document.getElementById("cerrar-popup");

  // Mostrar el popup al cargar la página
  popup.style.display = "block";

  // Cerrar el popup al hacer clic en el botón de cerrar
  cerrarPopup.addEventListener("click", function() {
      popup.style.display = "none";
  });
});
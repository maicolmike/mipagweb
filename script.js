document.addEventListener('DOMContentLoaded', function () {
  // Se ejecuta cuando el DOM está completamente cargado

  // Obtener referencias a elementos del DOM
  const checkBtn = document.querySelector('.checkbtn');
  const navbar = document.querySelector('.navbar');

  // Manejar clics en el botón de menú en dispositivos móviles
  checkBtn.addEventListener('click', function () {
    navbar.classList.toggle('active');
  });

  // Manejar clics en enlaces de la barra de navegación
  document.querySelectorAll('.navli').forEach(function (link) {
    link.addEventListener('click', function (e) {
      // Prevenir el comportamiento predeterminado del enlace
      e.preventDefault();

      // Obtener el ID de la sección a la que se debe desplazar
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Desplazar suavemente hacia la sección
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });

      // Cierra la barra de navegación en dispositivos móviles
      navbar.classList.remove('active');
    });
  });

  // Manejar clic en el enlace "Inicio"
  document.querySelector('.navli[href="index.html"]').addEventListener('click', function (e) {
    // Prevenir el comportamiento predeterminado del enlace
    e.preventDefault();

    // Desplazar suavemente hacia el inicio de la página
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Cierra la barra de navegación en dispositivos móviles
    navbar.classList.remove('active');
  });
});

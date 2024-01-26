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


// validacion formulario 

//FORMULARIOS

const form = document.getElementById('form');
const usuario = document.getElementById('usuario')
const errorAviso = document.getElementById('error')

function formulariosValidacion() {
  let advertencia = '';
  let validoElFormulario = true
  errorAviso.innerHTML = ''

  if(usuario.value.length < 4){
    advertencia += 'Tu nombre de usuario deberia ser mayor a 4 digitos'
    validoElFormulario =false
  }

  if(!validoElFormulario){
    errorAviso.innerHTML = advertencia
  } else {
    errorAviso.innerHTML = 'Formulario enviado'
    errorAviso.classList.remove('error')
  }
  return validoElFormulario

}
form.addEventListener("submit", (e) => {
  if (formulariosValidacion()) {
    // Si la validación es true se enviara el formulario
    alert('el formulario se envio con exito')
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe
  }
});


form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

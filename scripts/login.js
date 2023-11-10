document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');
  
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Previene la recarga de la página
  
      // Obtén los valores de los inputs
      const emailInput = document.getElementById('email').value;
      const passwordInput = document.getElementById('password').value;
  
      // Verifica las credenciales
      if (emailInput === "gabriel.diaz@gse.com.co" && passwordInput === "firmacloud") {
        // Credenciales correctas, redirige al dashboard
        window.location.href = '/views/dashboard.html';
      } else {
        // Credenciales incorrectas, muestra un mensaje de error
        alert('Correo electrónico o contraseña incorrectos.');
      }
    });
  });
  
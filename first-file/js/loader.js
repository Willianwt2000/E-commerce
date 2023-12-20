// JavaScript para ocultar el loader cuando la página ha cargado
window.addEventListener('load', function () {
  var loader = document.getElementById('loader');
  var body = document.body;

  // Oculta el loader
  loader.style.display = 'none';

  // Muestra el contenido de la página
  body.style.display = 'block';
});
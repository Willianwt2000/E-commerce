// JavaScript para mostrar el loader mientras la página está cargando y ocultarlo cuando ha cargado completamente
document.addEventListener('DOMContentLoaded', function () {
  var loader = document.getElementById('loader');
  var body = document.body;

  // Muestra el loader
  loader.style.display = 'block';

  // Oculta el loader después de que la página ha cargado completamente
  window.addEventListener('load', function () {
    loader.style.display = 'none';
    // Muestra el contenido de la página
    body.style.display = 'block';
  });
});

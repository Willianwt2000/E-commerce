// JavaScript para mostrar el loader mientras la página está cargando y ocultarlo cuando ha cargado completamente
document.addEventListener('DOMContentLoaded', function () {
  var loader = document.getElementById('loader');
  var body = document.body;

  // Muestra el loader
  loader.style.display = 'block';


  window.addEventListener('load', function () {
    loader.style.display = 'none';
    
    body.style.display = 'block';
  });
});

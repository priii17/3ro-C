const bloques = document.querySelectorAll('.accordeon .bloque');

bloques.forEach(function (bloque) {
  const pregunta = bloque.querySelector('.h2');

  pregunta.addEventListener('click', function () {
    bloque.classList.toggle('activo');
  });
});
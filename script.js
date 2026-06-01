document.addEventListener('DOMContentLoaded', () => {
  const botonModo = document.getElementById('modoOscuro');
  const formulario = document.getElementById('formularioContacto');
  const mensajeFormulario = document.getElementById('mensajeFormulario');
  const mensaje = document.getElementById('mensaje');
  const contador = document.getElementById('contadorCaracteres');
  const anioActual = document.getElementById('anioActual');

  anioActual.textContent = new Date().getFullYear();

  botonModo.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const modoActivo = document.body.classList.contains('dark-mode');
    botonModo.textContent = modoActivo ? 'Modo claro' : 'Modo oscuro';
    botonModo.classList.toggle('btn-info', modoActivo);
    botonModo.classList.toggle('btn-outline-info', !modoActivo);
  });

  mensaje.addEventListener('input', () => {
    contador.textContent = mensaje.value.length;
  });

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formulario.checkValidity()) {
      formulario.classList.add('was-validated');
      mostrarAviso('Revisa los campos marcados antes de enviar la solicitud.', 'danger');
      return;
    }

    mostrarAviso('Solicitud ficticia registrada correctamente. Esta demo no envía datos reales.', 'success');
    formulario.reset();
    formulario.classList.remove('was-validated');
    contador.textContent = '0';
  });

  function mostrarAviso(texto, tipo) {
    mensajeFormulario.textContent = texto;
    mensajeFormulario.className = `alert alert-${tipo}`;
  }
});

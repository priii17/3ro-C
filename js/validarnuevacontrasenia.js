document.querySelector("#registro").addEventListener("submit", validar);

function validar(event) {
  event.preventDefault(); //frena el envio del formulario (no ejecuta el php hasta validar dato)

  const contrasenia = document.querySelector("#contrasenia").value.trim();
  const contrasenia2 = document.querySelector("#contrasenia2").value.trim();
  const errores = [];

  if (contrasenia === "" || contrasenia2 === "") {
    errores.push("La contraseña es obligatoria");
  } else if (contrasenia.length < 8 || !/[A-Z]/.test(contrasenia) || !/[a-z]/.test(contrasenia) || !/[0-9]/.test(contrasenia)) {
    //metodo push añade elementos al array
    errores.push("La contraseña debe tener mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número");
  }

  if (contrasenia != contrasenia2) {
    errores.push("Las contraseñas no coinciden");
  }
  if (contrasenia === "" || contrasenia2 === "") {
    errores.push("La contraseña es obligatoria");
  } else if (contrasenia.length < 8 || !/[A-Z]/.test(contrasenia) || !/[a-z]/.test(contrasenia) || !/[0-9]/.test(contrasenia)) {
    //metodo push añade elementos al array
    errores.push("La contraseña debe tener mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número");
  }

  if (contrasenia != contrasenia2) {
    errores.push("Las contraseñas no coinciden");
  }

  if (errores.length > 0) {
    //mostrar errores
    document.querySelector(".errores").innerHTML = "";
    errores.map((error) => (document.querySelector(".errores").innerHTML += `<p class="error">${error}</p>`));
  } else {
    document.querySelector("#registro").submit(); //si no hay errores, envia los datos del fotmulario al php
  }
}

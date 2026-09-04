const nombre = document.getElementById("nombre");
const archivo = document.getElementById("archivo");
const btn = document.getElementById("btn");
const mens = document.getElementById("mensaje");

btn.addEventListener("click", async (e) => {
  // cancela la acción por defecto que hace el navegador al ocurrir un evento
  e.preventDefault();

  // Crea un objeto FormData para enviar datos al servidor
  const doc = new FormData();
  doc.append("nombre", nombre.value);
  //agrega el primer archivo sleccionado (posicion 0)
  doc.append("archivo", archivo.files[0]);

  //envia los datos al archivo php
  let respuesta = await fetch("../php/cargar.php", {
    method: "POST",
    body: doc,
  });

  let mensaje = await respuesta.text();

  if (mensaje === "OK") {
    mens.textContent = "OK";
    mens.style.color = "green";
  } else {
    mens.textContent = "ERROR";
    mens.style.color = "red";
  }
});

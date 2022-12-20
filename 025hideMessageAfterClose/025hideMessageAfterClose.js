"use strict";
/*024addCloseButton.html/.js: Agregar un botón de cierre: Hay una lista de mensajes.
Usa JavaScript para agregar un botón de cierre en la esquina superior derecha de cada 
mensaje. El resultado debería verse algo así:*/

let messages = document.getElementsByTagName("div");

for (let div of messages) {
  let button = document.createElement("button");
  button.textContent = "[X]";
  //Añadimos un event listener a cada botón. La función esconderá el div actual
  button.addEventListener("click", function () {
    div.setAttribute("hidden", true);
  });
  div.append(button);
}

"use strict";
/*024addCloseButton.html/.js: Agregar un botón de cierre: Hay una lista de mensajes.
Usa JavaScript para agregar un botón de cierre en la esquina superior derecha de cada 
mensaje. El resultado debería verse algo así:*/

let messages = document.getElementsByTagName("div");

for (let div of messages) {
  //Creamos el botón y lo añadimos en el div correspondiente
  let button = document.createElement("button");
  button.textContent = "[X]";
  div.append(button);  
}

"use strict";
/*032editDiv.html/.js: Crea un <div> que se vuelva <textarea> cuando es clicado.
El textarea permite editar HTML en <div>. Cuando el usuario presiona Enter o se pierde 
el foco, el <textarea> se vuelve <div> de nuevo, y su contenido se vuelve el HTML del 
<div>.*/

let div = document.querySelector("div");
let textarea = null;

div.onclick = function () {
  //Creamos el textarea y lo sustituimos por el div
  textarea = document.createElement("textarea");
  textarea.placeholder = div.textContent;
  div.replaceWith(textarea);

  //Cuando pulsa enter
  textarea.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      send();
    }
  });

  //Cuando pierde el foco
  textarea.addEventListener("blur", function () {
    send();
  });
};

//Para ambos casos ocurre lo mismo: lo que introduzca el usuario pasa al div y este reemplaza el textarea
function send() {
  div.innerHTML = textarea.value;
  textarea.replaceWith(div);
}

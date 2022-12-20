"use strict";
/*029selectListItems.html/.js: Cree una lista donde los elementos son seleccionables, 
como en los administradores de archivos. Un clic en un elemento de la lista selecciona 
solo ese elemento (agrega la clase .selected), deselecciona todos los demás.
Si se hace un clic con Ctrl (Cmd para Mac), el estado seleccionado/deseleccionado 
cambia para ese solo elemento, los otros elementos no se modifican.
PD: Para esta tarea, podemos suponer que los elementos de la lista son solo de texto. 
No hay etiquetas anidadas.  Evita la selección nativa del navegador del texto en los 
clics.*/

let ul = document.getElementById("ul");

ul.onmousedown = function () {
  //evitamos la selección nativa del navegador
  return false;
};

ul.addEventListener("click", function (event) {
  if (event.ctrlKey || event.metaKey) {
    event.target.classList.toggle("selected");
  } else {
    select(event.target);
  }
});

function select(li) {
  let selected = ul.querySelectorAll(".selected");
  console.log(selected);

  for (let item of selected) {
    item.classList.remove("selected");
  }
  li.classList.add("selected");
}

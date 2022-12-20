"use strict";
/*013createList.html/.js: Escribir una interfaz para crear una lista de lo que ingresa un 
usuario. Para cada item de la lista:
Preguntar al usuario acerca del contenido usando prompt.
Crear el <li> con ello y agregarlo a <ul>.
Continuar hasta que el usuario cancela el ingreso (presionando Esc o con un ingreso 
vacío).
Todos los elementos deben ser creados dinámicamente.
Si el usuario ingresa etiquetas HTML, deben ser tratadas como texto.*/

let ul = document.createElement("ul");
let item;

do {
  item = prompt("Inserta un elemento en la lista");
  //Si pulsa escape o introduce un espacio blanco salimos:
  if (item == null || item == "") {
    break;
  }
  let li = document.createElement("li");
  li.innerText = item;
  ul.append(li);
} while (item ?? null);

document.body.append(ul);

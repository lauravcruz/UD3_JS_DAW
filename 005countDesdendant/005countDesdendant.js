"use strict";
/*005countDesdendant.html/.js: Hay un árbol estructurado como ul/li anidado.
Escribe el código que para cada <li> muestra:
¿Cuál es el texto dentro de él (sin el subárbol)?
El número de <li> anidados: todos los descendientes, incluidos los profundamente 
anidados.*/

let li = document.getElementsByTagName("li");

for (let item of li) {
  //Texto dentro de cada li:
  let textoLi = item.firstChild.textContent;
  //Para evitar el subárbol, eliminamos espacios con trim()
  console.log("Texto: " + textoLi.trim());

  //Número de descendientes: accedemos a las li dentro del que recorremos:
  console.log(
    "Tiene " + item.getElementsByTagName("li").length + " descendientes"
  );
}

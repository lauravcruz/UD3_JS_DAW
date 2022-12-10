"use strict";
/*018orderTable.html/.js:  Puede haber más filas en ella.
Escribe el código para ordenarla por la columna "name".
*/

//Hacemos un array con la 1º columna de cada fila (la columna name)
let tdName = Array.from(document.querySelectorAll("tr td:first-child"));

//Ordenamos el array automáticamente con el método sort. Comparamos el textContent para que ignore <li></li>
tdName.sort((a, b) => a.textContent.localeCompare(b.textContent));

//Cogemos el padre de las tr (tbody) para insertarle el nuevo orden
let tbody = document.querySelector("tbody");

//Recorremos el array ya ordenado
for (let i = 0; i < tdName.length; i++) {
  //Para que coja la fila entera necesitamos insertar el padre de cada td:
  tbody.append(tdName[i].parentNode);
}

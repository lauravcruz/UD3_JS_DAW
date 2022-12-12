"use strict";
/*026orderTable.html/.js: Haz que la tabla se pueda ordenar: los clics en elementos <th> 
deberían ordenarla por la columna correspondiente. Cada <th> tiene su tipo de datos 
en el atributo, como esto:
En el ejemplo anterior la primera columna tiene números y la segunda cadena. La 
función de ordenamiento debe manejar el orden de acuerdo con el tipo de dato.
Solamente los tipos "string" y "number" deben ser soportados.*/

let columns = document.getElementsByTagName("th");
let tbody = document.querySelector("tbody");

for (let th of columns) {
  if (th.getAttribute("data-type") == "number") {
    //Si el usuario elige número, cogemos la primera columna:
    let tdAge = Array.from(document.querySelectorAll("tr td:first-child"));
    //ordenamos de menor a mayor
    th.addEventListener("click", function () {
      tdAge.sort(function (a, b) {
        return a.textContent - b.textContent;
      });
      addTd(tdAge);
    });
  } else if (th.getAttribute("data-type") == "string") {
    //Si selecciona nombre, cogemos la segunda columna:
    let tdName = Array.from(document.querySelectorAll("tr td:nth-child(2)"));
    //Ordenamos por el abecedario
    th.addEventListener("click", function () {
      tdName.sort((a, b) => a.textContent.localeCompare(b.textContent));
      addTd(tdName);
    });
  }
}

function addTd(column) {
  for (let td of column) {
    tbody.append(td.parentNode);
  }
}

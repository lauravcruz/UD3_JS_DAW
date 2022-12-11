"use strict";
/*026orderTable.html/.js: Haz que la tabla se pueda ordenar: los clics en elementos <th> 
deberían ordenarla por la columna correspondiente. Cada <th> tiene su tipo de datos 
en el atributo, como esto:
En el ejemplo anterior la primera columna tiene números y la segunda cadena. La 
función de ordenamiento debe manejar el orden de acuerdo con el tipo de dato.
Solamente los tipos "string" y "number" deben ser soportados.*/


//TODO: optimizar esto: 
let columns = document.getElementsByTagName("th");
let tbody = document.querySelector("tbody");

for (let th of columns) {
  if (th.getAttribute("data-type") == "number") {
    let tdAge = Array.from(document.querySelectorAll("tr td:first-child"));
    th.addEventListener("click", function () {
      tdAge.sort(function (a, b) {
        return a.textContent - b.textContent;
      });

      for (let td of tdAge) {
        tbody.append(td.parentNode);
      }
    });
  } else if (th.getAttribute("data-type") == "string") {
    let tdName = Array.from(document.querySelectorAll("tr td:nth-child(2)"));
    th.addEventListener("click", function () {
      tdName.sort((a, b) => a.textContent.localeCompare(b.textContent));
      for (let td of tdName) {
        tbody.append(td.parentNode);
      }
    });
  }
}

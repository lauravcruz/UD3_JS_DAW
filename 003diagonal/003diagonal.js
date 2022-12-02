"use strict";
/*003diagonal.html/.js: Seleccionar todas las celdas diagonales Escribe el código para 
pintar todas las celdas diagonales de rojo. Necesitarás obtener todas las <td> de la 
<table> y pintarlas usando el código:
// td debe ser la referencia a la celda de la tabla
td.style.backgroundColor = 'red'; El resultado debe ser: */

let td = document.querySelectorAll("td");

for (let i = 0; i < td.length; i++) {
  //Para que salga en diagonal cogemos las td múltiples de 6
  if (i % 6 == 0) {
    td[i].style.backgroundColor = "red";
  }
}

"use strict";
/*015creatingCalendar.html/.js: Escribe una función createCalendar(elem, year, month).
Su llamado debe crear un calendario para el año y mes dados y ponerlo dentro de 
elem. El calendario debe ser una tabla, donde una semana es <tr>, y un día es<td>. Los 
encabezados de la tabla deben ser <th> con los nombres de los días de la semana: el 
primer día debe ser “lunes” y así hasta “domingo”. 

P.S. Para esta tarea es suficiente generar el calendario, no necesita aún ser pulsable. 
Por ejemplo, createCalendar(cal, 2012, 9) debe generar en el elemento cal el siguiente 
calendario: 
*/

let daysWeek = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

function createCalendar(elem, year, month) {
  let table = document.createElement("table");

  for (let i = 0; i < daysWeek.length; i++) {
    let week = document.createElement("tr");
    if (i == 0) {
      for (let j = 0; j < daysWeek.length; j++) {
        let th = document.createElement("th");
        th.innerText = daysWeek[j];
        week.append(th);
      }
    }else{
      
    }
    table.append(week);
  }
  let day = document.createElement("td");
  elem.append(table);
}

let cal = document.getElementById("elem");
createCalendar(cal, 2012, 9);

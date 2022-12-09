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
  //Averiguamos cuántos días tiene el mes
  let totalDays = new Date(year, month, 0).getDate();
  //Y en qué cae el primer día del mes
  let firstDay = new Date(year, month - 1, 1).getDay();

  //Creamos la tabla y la primera fila (de los encabezados)
  let table = document.createElement("table");
  let week = document.createElement("tr");

  for (let i = 0; i < daysWeek.length; i++) {
    //La rellenamos automáticamente recorriendo el array de días de la semana
    let th = document.createElement("th");
    th.innerText = daysWeek[i];
    week.append(th);
  }
  table.append(week);

  //Días será nuestro contador (del 1 al último día del mes)
  let days = 0;
  //Haremos un for hasta que lleguemos al total de días. Insertará una tr (semana)
  for (let i = 0; days < totalDays; i++) {
    let tr = document.createElement("tr");
    //Automatizamos la inserción de columnas (7 días):
    for (let j = 0; j < 7; j++) {
      let td = document.createElement("td");
      //Imprimiremos espacios en blanco en la primera semana (hasta que no sea el día de la semana en el que empieza el mes)
      if (i == 0 && j < firstDay - 1) {
        td.innerText = "";
      } else if (days >= totalDays) {
        //Si ha llegado el fin del mes, nos salimos del bucle
        break;
      } else {
        td.innerText = ++days;
      }
      //Añadimos la columna al tr
      tr.append(td);
    }
    //Añadimos la semana a la tabla
    table.append(tr);
  }

  elem.append(table);
}

let cal = document.getElementById("elem");
createCalendar(cal, 2012, 2);

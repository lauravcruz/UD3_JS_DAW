"use strict";
/*011cleaning.html/.js: Crea una función clear(elem) que remueva todo del elemento.*/

function clear(elem) {
  elem.remove();
}

let elem = document.getElementById("elem");
clear(elem); // borra la lista

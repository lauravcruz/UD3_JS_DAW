"use strict";
/*012aaa.html/.js: En el ejemplo de abajo, la llamada table.remove() quita la tabla del 
documento. Pero si la ejecutas, puedes ver que el texto “aaa” es aún visible. ¿Por qué 
ocurre esto?*/
let table = document.getElementById("table");
alert(table); // la tabla, tal como debería ser
table.remove();

// ¿Por qué aún está "aaa" en el documento?
//Porque está suelto dentro de la tabla. No forma parte del nodo.

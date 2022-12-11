"use strict";
/*022handlers.html/.js: Hay un botón en la variable. No hay handlers en él.
¿Qué handlers se ejecutan con el click después del siguiente código? ¿Qué alertas se 
muestran?*/

let button = document.getElementsByTagName("button");

button[0].addEventListener("click", () => alert("1"));
button[0].removeEventListener("click", () => alert("1"));
button[0].onclick = () => alert(2);

/*Se ejecuta "1" y "2". No se elimina el event listener porque no se está referenciando al anterior realmente.
Habría que meter el alert() en una función y añadirla y eliminarla con los event listeners*/

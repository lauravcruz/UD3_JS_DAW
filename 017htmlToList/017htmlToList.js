"use strict";
/*017htmlToList.html/.js: Inserta el HTML en la lista. Escribe el código para insertar 
<li>2</li><li>3</li> entre dos <li> aquí:
*/

//Creamos nuestras li
let two = document.createElement("li"); 
two.innerText = "2"; 

let three = document.createElement("li"); 
three.innerText = "3"; 

//recogemos la li previa al 2
let one = document.getElementById("one"); 

//Con node.after podemos insertar nodos después de x elemento
one.after(two); 
two.after(three);  

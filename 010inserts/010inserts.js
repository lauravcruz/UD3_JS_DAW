"use strict";
/*010inserts.html/.js: createTextNode vs innerHTML vs textContent: Tenemos un 
elemento DOM vacio elem y un string text. ¿Cuáles de estos 3 comandos harán 
exactamente lo mismo? Pon un ejemplo.
*/

let text = "string";
let elem = document.getElementById("elem");

//Append es un método de inserción que agrega el string al final del node elem en este caso.
elem.append(document.createTextNode(text));

//Con innerHTML insertamos como HTML. Podemos meter etiquetas además de texto
elem.innerHTML = text;

//Con textContent es mucho más seguro. Insertamos solo texto.
elem.textContent = text;

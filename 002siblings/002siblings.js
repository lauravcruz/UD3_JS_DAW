"use strict"; 
/*002siblings.html/.js: Si elem – es un elemento nodo arbitrario del DOM...
¿Es cierto que elem.lastChild.nextSibling siempre es null?
¿Es cierto que elem.children[0].previousSibling siempre es null ?
Demúestralo.*/

let elem = document.getElementById("elem"); 
alert(elem.lastChild.nextSibling); 
//Sí, es nulo. No es posible coger el siguiente hermano del último. No hay nada


alert(elem.children[0].previousSibling); 
/*Aquí sí muestra información porque detecta el hermano anterior
como el div padre, pero está mal. Es un error de javascript*/


"use strict";
/*010purpleExternalLinks.html/.js: Haz todos los enlaces externos de color purple 
alterando su propiedad style.
Un link es externo si:
 Su href tiene ://
 Pero no comienza con http://internal.com.*/

// Guardamos todos los enlaces
let link = document.querySelectorAll("a");

//Los recorremos y les ponemos el color purple.
for (let i = 0; i < link.length; i++) {
  link[i].style.color = "purple";
}

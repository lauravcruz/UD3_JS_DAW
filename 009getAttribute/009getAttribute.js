"use strict";

/*009getAttribute.html/.js: Escribe el código para obtener el atributo data-widget-name 
del documento y leer su valor.*/

//Primero buscamos el div:
let div = document.querySelector("div");

//Con dataset podemos acceder a los atributos personalizados, los que no son estándar.
//Los nombres con guion pasan a camel case:
alert(div.dataset.widgetName);

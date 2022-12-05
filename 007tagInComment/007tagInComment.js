"use strict";


let body = document.body;
body.innerHTML = "<!--" + body.tagName + "-->";
alert(body.firstChild.data); // ¿qué hay aquí?

//Hay el comentario de la línea anterior que hemos insertado en el body con innerHTML.
//TagName devuelve el nombre de la etiqueta que le digamos (en este caso, la del body).


"use strict";
/*Para cada una de las siguientes preguntas, da al menos una forma de cómo acceder a 
ellos:
¿El nodo <div> del DOM?*/
//como solo hay un div podemos acceder por el nombre de la etiqueta.
let div = document.getElementsByTagName("div");
//Hay que tener en cuenta que devuelve un array aunque solo haya un elemento:
alert(div[0].textContent);

//¿El nodo <ul> del DOM?
//Podemos acceder como hijo directo del div o por ul, por ejemplo:
let ul = document.getElementsByTagName("ul");
alert(ul[0].textContent);

//El segundo <li> (con Peter Parker)?
//La segunda li es el último hijo de la ul que recogimos antes:
let li = ul[0].lastElementChild;
alert(li.textContent);

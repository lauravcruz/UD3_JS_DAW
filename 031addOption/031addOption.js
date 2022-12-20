"use strict";
/*031addOption.html/.js: Añade una opción al select. Tenemos un <select>:
<select id="genres">
  <option value="rock">Rock</option>
  <option value="blues" selected>Blues</option>
</select>
Utiliza JavaScript para:
Mostrar el valor y el texto del option seleccionado.
Añadir un option: <option value="classic">Classic</option>.
Seleccionarlo.
Nota, si has hecho todo bien, tu alert debería mostrar blues.*/

let genres = document.getElementById("genres");
//Con selectedIndex detectamos el index de la opción seleccionada:
let selected = genres.options[genres.selectedIndex];
alert("Value: " + selected.value + " Text: " + selected.text);

//Creamos un elemento option con los valores y el texto:
let classic = document.createElement("option");
classic.value = "classic";
classic.text = "Classic";

//Lo añadimos al select
genres.appendChild(classic);
//Lo seleccionamos y comprobamos:
classic.selected = true;
let selected2 = genres.options[genres.selectedIndex];
alert("Value: " + selected2.value + " Text: " + selected2.text);

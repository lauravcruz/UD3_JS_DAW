"use strict";
//021hideButton.html/.js: Crea un botón que se oculte a sí mismo al darle un click.

//Mediante "this" podemos acceder al elemento que llama a la función
function hide(button) {
  button.setAttribute("hidden", true);
}

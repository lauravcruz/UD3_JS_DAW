"use strict";
/*020hideTextButton.html/.js: Agrega JavaScript al button para hacer que <div 
id="text"> desaparezca al hacerle click.
*/

function hide() {
  let text = document.getElementById("text");
  //Añadimos la propiedad hidden:
  text.setAttribute("hidden", true);
}

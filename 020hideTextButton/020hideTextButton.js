"use strict";
/*020hideTextButton.html/.js: Agrega JavaScript al button para hacer que <div 
id="text"> desaparezca al hacerle click.
*/

function hide() {
  let text = document.getElementById("text");
  text.classList.add("hidden");
}

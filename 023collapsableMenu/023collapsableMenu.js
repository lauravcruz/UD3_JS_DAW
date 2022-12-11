"use strict";
/*023collapsableMenu.html/.js: Crea un menú que se abra/colapse al hacer click. Ej:*/

let title = document.getElementById("title");
let menu = document.getElementById("menu");
let span = document.getElementsByTagName("span");

title.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    span[0].textContent = "▼"; 
  } else {
    menu.classList.add("hidden");
    span[0].textContent = "►"; 
  }
});

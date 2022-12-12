"use strict";
/*028imageGallery.html/.js:Crea una galería de imágenes donde la imagen principal 
cambia al hacer clic en una miniatura. Como en Amazon, por ejemplo.*/

//Cogemos la imagen principal y las pequeñas:
let main = document.getElementById("main");
let gallery = document.querySelectorAll(".flex img");

for (let i = 0; i < gallery.length; i++) {
  //Añadimos un listener de click a cada imagen en miniatura
  gallery[i].addEventListener("click", function () {
    //ponemos al main el alt y el src de la foto en la que clique:
    main.setAttribute("src", gallery[i].getAttribute("src"));
    main.setAttribute("alt", gallery[i].getAttribute("alt"));
  });
}

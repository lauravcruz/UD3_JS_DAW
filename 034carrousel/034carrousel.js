let carrousel = document.getElementById("carrousel");
let ul = document.createElement("ul");
let width = 0;

for (let i = 1; i <= 4; i++) {
  //Creamos una etiqueta img por cada imagen de la carpeta y la insertamos en una li:
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.setAttribute("src", "img/img" + i + ".jpg");
  if (i == 1) {
    //Al iniciar, la foto actual será la primera:
    li.setAttribute("id", "actual");
  }
  li.append(img);
  ul.append(li);
}

carrousel.append(ul);

function next() {
  //Cogemos la foto que se está mostrando
  let actual = document.getElementById("actual");

  //Si hay más fotos delante, cogemos la siguiente y le ponemos a esta la clase actual
  if (actual.nextElementSibling) {
    let nextPhoto = actual.nextElementSibling;
    actual.removeAttribute("id");
    nextPhoto.setAttribute("id", "actual");
    //Para mostrarla, calculamos el tamaño que tiene que moverse en el carrusel
    width += actual.clientWidth;
  }
  //A la lista le metemos margen hasta alcanzar la posición de la foto a mostrar
  ul.style.marginLeft = -width + "px";
}

function back() {
  let actual = document.getElementById("actual");

  //Repetimos pero con el elemento anterior
  if (actual.previousElementSibling) {
    let previousPhoto = actual.previousElementSibling;
    actual.removeAttribute("id");
    previousPhoto.setAttribute("id", "actual");
    width -= actual.clientWidth;
    ul.style.marginLeft = -width + "px";
  }
}

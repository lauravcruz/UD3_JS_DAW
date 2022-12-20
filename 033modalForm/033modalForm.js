"use strict";
/*033modalForm.html/.js: Crea una función showPrompt(html, callback) que muestre un 
formulario con el mensaje html, un campo input y botones OK/CANCELAR.
Un usuario debe escribir algo en el campo de texto y pulsar Enter o el botón OK, 
entonces callback(value) es llamado con el valor introducido.
En caso contrario, si el usuario pulsa Esc o CANCELAR, entonces callback(null) es 
llamado. En ambos casos se finaliza el proceso se y borra el formulario. Requisitos:
El formulario debe estar en el centro de la ventana.
El formulario es modal. Es decir que no habrá interacción con el resto de la página, 
siempre que sea posible, hasta que el usuario lo cierre.
Cuando se muestra el formulario, el foco debe estar en el <input> del usuario.
Las teclas Tab/Shift+Tab deben alternar el foco entre los diferentes campos del 
formulario, no se permite cambiar el foco a otros elementos de la página.
Ejemplo de uso:
showPrompt("Escribe algo<br>...inteligente :)", function(value) {
  alert(value);
});*/

function showPrompt(html, callback) {
  let overlay = document.getElementById("overlay");
  overlay.removeAttribute("hidden");
  overlay.classList.add("overlayBackground");
  overlay.firstElementChild.classList.add("modal");

  //Insertamos el html que nos viene en la función:
  let title = document.getElementById("html");
  title.innerHTML = html;

  form.firstElementChild.focus(); //Hacemos foco en el primer input

  //Si envía:
  form.onsubmit = function () {
    let form = document.getElementById("form");
    let value = form.text.value;
    if (value == "") {
      return false;
    }
    hide(value);
  };

  //Si pulsa cancelar:
  document.getElementById("cancel").onclick = () => hide(null);

  document.addEventListener("keydown", function (event) {
    if (event.key == "Escape") {
      hide(null);
    }
  });

  //Para el tab:
  document.addEventListener("keydown", function (event) {
    if (event.key == "Tab") {
      let firstInput = form.elements[0];
      let lastInput = form.elements[form.elements.length - 1];

      if (event.shiftKey) {
        //Con active element sabemos que elemento está en foco
        //Si además pulsa shift, salta del primero al último
        if (document.activeElement === firstInput) {
          lastInput.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastInput) {
          //Del último pasa al primero:
          firstInput.focus();
          event.preventDefault();
        }
      }
    }
  });

  //Esta función llama a callback y cierra la ventana. Se usa para cancelar y escape
  function hide(value) {
    overlay.setAttribute("hidden", true);
    overlay.classList.remove("overlayBackground");
    overlay.firstElementChild.classList.remove("modal");
    callback(value);
  }
}

function createModal() {
  showPrompt("<p>Escribe algo<br>...inteligente :)</p>", function (value) {
    alert(value);
  });
}

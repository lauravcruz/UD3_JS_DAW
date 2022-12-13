"use strict";
/*030shortOuts.html/.js: Crea una función runOnKeys(func, code1, code2, ... code_n) 
que ejecute func al presionar simultáneamente las teclas con códigos code1, code2, ..., 
code_n.
Por ejemplo, el siguiente código muestra un alert cuando "Q" y "W" se presionan 
juntas (en cualquier lenguaje, con o sin mayúscula)
runOnKeys(
  () => alert("¡Hola!"),
  "KeyQ",
  "KeyW"
);*/

runOnKeys(() => alert("¡Hola!"), "KeyQ", "KeyW");

//vamos a guardar en un array las teclas pulsadas
let userKey = [];
function runOnKeys(funcion, ...codes) {
  document.addEventListener("keydown", function (event) {
    userKey.push(event.code);

    //Si en el array no están TODAS las teclas que establezcamos en los args, salimos
    for (let i = 0; i < codes.length; i++) {
      if (!userKey.includes(codes[i])) {
        return false;
      }
    }
    //Si están, vaciamos el array y ejecutamos la función que nos pasa por argumento:
    funcion();
    userKey.splice(0, userKey.length);
  });

  //tenemos que controlar que no llame a la función si solo pulsa w o q.
  //Con keyup podemos detectar que el usuario ha soltado la primera tecla: sacamos esa del array
  document.addEventListener("keyup", function () {
    userKey.shift();
  });
}

"use strict";
/*027returnFalse.html/.js:¿Por qué en el código de abajo return false no funciona?
<script>
  function handler() {
    alert( "..." );
    return false;
  }
</script>
<a href="https://w3.org" onclick="handler()">el navegador irá a w3.org</a>*/

function handler() {
  alert("...");
  return false;
}

//El valor que devuelve handler no se usa en ningún momento. Onclick llama a la función y ejecuta el alert.
//No evalúa lo que retorna.

//Podemos arreglarlo cancelando la acción predefinida del evento con preventDefault:
function handler2(e) {
  alert("...");
  e.preventDefault();
}

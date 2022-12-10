"use strict";
/*016paintClock.html/.js: Reloj coloreado con setInterval
Crea un reloj coloreado como aquí: 
Usa HTML/CSS para el estilo, JavaScript solamente actualiza la hora en elements.
*/

let clock = document.getElementsByTagName("span");
let interval;
function start() {
  //Solo iniciamos un intervalo si este no existe
  if (!interval) {
    change();
    //Cada segundo que pase, actualizamos el reloj. (Al pulsar start tardaría un segundo en empezar, por eso añadí la línea anterior)
    interval = setInterval(change, 1000);
  }
}

function change() {
  //Cogemos la hora con la función Date
  let now = new Date();

  //Para coger horas, minutos y segundos javascript tiene funciones. Si es de 1 dígito, no imprime el 0 de delante
  //Para respetar el formato hh:mm:ss añadimos un 0 cuando sea menor que 10:
  if (now.getHours() < 10) {
    clock[0].innerText = "0" + now.getHours();
  } else {
    clock[0].innerText = now.getHours();
  }
  if (now.getMinutes() < 10) {
    clock[1].innerText = "0" + now.getMinutes();
  } else {
    clock[1].innerText = now.getMinutes();
  }
  if (now.getSeconds() < 10) {
    clock[2].innerText = "0" + now.getSeconds();
  } else {
    clock[2].innerText = now.getSeconds();
  }
}

function stop() {
  //Cuando el usuario pulse stop, paramos el contador y ponemos interval a null (por si quisiera volver a iniciarlo)
  clearInterval(interval);
  interval = null;
  //Reiniciamos el cronómetro:
  clock[0].innerText = "hh";
  clock[1].innerText = "mm";
  clock[2].innerText = "ss";
}

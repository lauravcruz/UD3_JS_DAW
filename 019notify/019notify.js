"use strict";
/*019notify.html/.js/.css: Escribir una función showNotification(options) que cree una 
notificación: <div class="notification"> con el contenido dado. La notificación debería 
desaparecer automáticamente después de 1.5 segundos. Las opciones son:
// muestra un elemento con el texto "Hello" cerca de la parte superior de la ventana
*/

showNotification({
  top: 10, // 10px desde la parte superior de la ventana (por defecto es 0px)
  right: 10, // 10px desde el borde derecho de la ventana (por defecto es 0px)
  html: "Hello!", // el HTML de la notificación
  className: "welcome", // una clase adicional para el "div" (opcional)
});

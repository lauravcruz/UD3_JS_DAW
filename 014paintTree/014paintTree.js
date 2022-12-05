"use strict";
/*014paintTree.html/.js: Escribe una función createTree que crea una lista ramificada 
ul/li desde un objeto ramificado.

Hay dos formas para resolver esta tarea:
Crear el HTML para el árbol y entonces asignarlo a container.innerHTML.
Crear los nodos del árbol y añadirlos con métodos DOM.
Haz ambas soluciones.
P.S. El árbol no debe tener elementos “extras” como <ul></ul> vacíos para las hojas.*/

let container = document.getElementById("container");
let data = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

createTree(container, data); // crea el árbol en el contenedor

function createTree(container, data) {
  let ul = document.createElement("ul");
  container.append(ul);
  for (let item in data) {
    let li = document.createElement("li"); 
    li.innerText = item; 
    container.append(li); 
  }
}

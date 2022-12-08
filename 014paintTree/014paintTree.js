"use strict";
/*014paintTree.html/.js: Escribe una función createTree que crea una lista ramificada 
ul/li desde un objeto ramificado.

Hay dos formas para resolver esta tarea:
Crear el HTML para el árbol y entonces asignarlo a container.innerHTML.
Crear los nodos del árbol y añadirlos con métodos DOM.
Haz ambas soluciones.
P.S. El árbol no debe tener elementos “extras” como <ul></ul> vacíos para las hojas.
*/

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

/*La sintaxis:
let container = document.getElementById('container');
createTree(container, data); // crea el árbol en el contenedor*/

//1: Crear el HTML para el árbol y entonces asignarlo a container.innerHTML.

function createTree(container, data) {
  container.innerHTML = extraerData(data);
}

function extraerData(data) {
  let ul = "";
  let li = ""; 
  for (let item in data) {
    li += "<li>" + item + extraerData(data[item]) + "</li>"; //llamamos a sí mismo para recorrer los objetos dentro de cada objeto
  }
  //Si el objeto tiene objetos dentro, los añadimos:
  if (li != null) {
    ul = "<ul>" + li + "</ul>";
  }
  return ul || "";
}

//2: Crear los nodos del árbol y añadirlos con métodos DOM.

function createTree2(container, data) {
  container.append(extraerData2(data));
}

function extraerData2(data) {
  //Caso base: cuando no tenga objetos dentro, salimos
  if (!Object.keys(data).length) return;

  let ul = document.createElement("ul");

  for (let item in data) {
    //Imprimimos en el li el texto de cada item del objeto
    let li = document.createElement("li");
    li.innerText = item;

    //Con recursividad recorrermos los objetos que contiene cada objeto
    let child = extraerData2(data[item]);
    if (child != null) {
      li.append(child);
    }
    ul.append(li);
  }
  return ul;
}

createTree(container, data);
createTree2(container2, data);

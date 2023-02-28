let val;

val = document;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// console.log(val)

const form = document.getElementById("my-form");
const form2 = document.querySelector("#my-form");
// console.log(form2)

// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'))
// console.log(document.getElementsByTagName('li'))

const ul = document.querySelector(".items");
// ul.remove()

ul.lastElementChild.remove();

ul.firstElementChild.innerText = "Hello";

ul.children[1].innerText = "The Bridge";

ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

// console.log(ul);

const btn = document.querySelector(".btn");

function onSubmit(e) {
  e.preventDefault();
  btn.style.background = "red";
  document.getElementById("my-form").style.background = "#ccc";
  ul.lastElementChild.innerHTML = "<h1>Changed</h1>";
}

btn.addEventListener("click", onSubmit);

const containerDiv = document.querySelector(".container")
let listaSinOrden = document.createElement("ul");
containerDiv.appendChild(listaSinOrden);

let elemento1Lista = document.createElement("li");
elemento1Lista.textContent = "It's funny";

let elemento2Lista = document.createElement("li");
elemento2Lista.innerHTML = "<span class='li'>It's Awesome</span>";


listaSinOrden.appendChild(elemento1Lista);
listaSinOrden.appendChild(elemento2Lista);


btn.setAttribute("name", "helloButton");
btn.setAttribute("disabled", "");
btn.setAttribute("class", "idPrueba prueba2");



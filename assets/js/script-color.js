/*
A partir de un selector de colores, cambia el color del cuadro principal al hacer click
sobre uno de los colores.
*/

// recopilacion de informacion

let box = document.getElementById("caja");
let button = document.querySelectorAll("[type = button]");

alert(
  "Presiona en la paleta, para cambiar el color de fondo\nDoble click en el cuadrado grande reseteara el color"
);
// funcion que cambia de color de fondo al hacer click en un color.
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    box.style.backgroundColor = button[i].style.backgroundColor;

    // vuelve al color blanco al hacer doble click.
    box.addEventListener("dblclick", () => {
      box.style.backgroundColor = "white";
    });
  });
}

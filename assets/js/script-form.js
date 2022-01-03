/*Desarrollar un código para validar un formulario de contacto utilizando el evento
submit y las expresiones regulares que permitan el ingreso de caracteres desde la
“A-a” hasta la “Z-z” mediante el método test() de JavaScript, mostrando un mensaje
de error y/o éxito cuando corresponda. Es decir, el usuario deberá obligatoriamente
ingresar datos en el formulario y que estos solo sean caracteres alfabéticos de la “a”
hasta la “z” para poder enviar la información. Como se muestra en las siguientes
imágenes:
*/

// captura la informacion input = nombre.

let userName = document.getElementById("nombre");
let userAsunto = document.getElementById("asunto");
let userMensaje = document.getElementById("mensaje");
let userForm = document.getElementById("formulario");
let btn = document.getElementById("botton");
let errorMsg = document.getElementsByClassName("error");

// funcion que valida la informacion ingresada en los input segun id
function validation(id, numIndex, mensage, err) {
  if (id.value.match("^[a-z, A-Z]*$")) {
    errorMsg[numIndex].innerHTML = "validacion de datos correcta";
    id.style.border = "2px solid green";
    err.style.color = "green";
    if (id.value.trim() === "") {
      errorMsg[numIndex].innerHTML = "Dato en blanco, intentalo nuevamente";
      id.style.border = "2px solid red";
      err.style.color = "red";
      return false;
    }
    return true;
  } else {
    errorMsg[numIndex].innerHTML = mensage;
    id.style.border = "2px solid red";
    return false;
  }
}

// aplicacion de funcion
userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let conteo = 0;
  if (
    validation(
      userName,
      0,
      "Error nombre: ingresa valores dentro del rango, [A-a --> Z-z]",
      errorMsg[0]
    ) == true
  ) {
    conteo += 1;
  } else {
    conteo = 0;
  }
  if (
    validation(
      userAsunto,
      1,
      "Error asunto: ingresa valores dentro del rango, [A-a --> Z-z]",
      errorMsg[1]
    )
  ) {
    conteo += 1;
  } else {
    conteo = 0;
  }
  if (
    validation(
      userMensaje,
      2,
      "Error mensaje: ingresa valores dentro del rango, [A-a --> Z-z]",
      errorMsg[2]
    )
  ) {
    conteo += 1;
  } else {
    conteo = 0;
  }

  // // si validation es true en todos los campos, entregar alerta al clickear y enviar info.

  if (conteo == 3) {
    btn.addEventListener("click", () => {
      alert("Datos enviados...nos contactaremos!!!");
      window.location.reload();
    });
  }
});

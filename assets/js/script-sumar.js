/*
Dar la funcionalidad de sumar y restar a la calculadora, mostrando el resultado en el
elemento con clase resultado. Si el resultado de la resta entrega un número negativo
debes mostrar un 0.
*/

///////////////////////////////////////////////////////////////////////////////////
// guarda datos den la variable
let valorUno = document.getElementById("valor1");
let valorDos = document.getElementById("valor2");
let btnRes = document.getElementsByTagName("button");

for (let i = 0; i < btnRes.length; i++) {
  btnRes[i].addEventListener("click", () => {
    if (btnRes[i].id == "btn-sumar") {
      sumar();
    } else {
      restar();
    }
  });
}

///////////////////////////////////////////////////////////////////////////////////
// FUNCIONES
function sumar() {
  return alert(
    `El resultado de la suma es: ${
      Number(valorUno.value) + Number(valorDos.value)
    }`
  );
}

function restar() {
  if (Number(valorUno.value) - Number(valorDos.value) < 0) {
    return alert(
      `El resultado negativo es ${
        Number(valorUno.value) - Number(valorDos.value)
      }, se mostrara un 0`
    );
  } else {
    return alert(
      `El resultado de la resta es: ${valorUno.value - Number(valorDos.value)}`
    );
  }
}
///////////////////////////////////////////////////////////////////////////////////

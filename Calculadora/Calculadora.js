function menu() {
  let opcion = 0;
  do {
    let mostrar =
      "------------MENU-------------" +
      "\n 1. Sumar" +
      "\n 2. Restar" +
      "\n 3. Multiplicar" +
      "\n 4. Salir";

    opcion = parseInt(prompt(mostrar));

    if (opcion != 4) {
      var num_1 = parseInt(prompt("Ingrese el primer numero"));
      var num_2 = parseInt(prompt("Ingrese el segundo numero"));
    }

    switch (opcion) {
      case 1:
        sumar(num_1, num_2);
        break;
      case 2:
        restar(num_1, num_2);
        break;
      case 3:
        multiplicar(num_1, num_2);
        break;
      case 4:
        alert("Gracias por utlizar el servicio");
        break;
      default:
        break;
    }
  } while (opcion != 4);
}

function sumar(parametro, parametro2) {
  let suma = parametro + parametro2;
  alert("Su suma es: " + suma);
}

function restar(parametro, parametro2) {
  let resta = parametro - parametro2;
  alert("Su resta es: " + resta);
}

function multiplicar(parametro, parametro2) {
  let multiplicacion = parametro * parametro2;
  alert("Su multiplicacion es: " + multiplicacion);
}

menu();

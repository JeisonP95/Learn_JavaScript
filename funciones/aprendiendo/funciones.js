let personas = ["estaban", "pencue", "ariana"];

//parametrica
function crearNuevasPersonas(listaDePersonas){
  let op = "si";

  while (op !== "no") {
    let nuevaPersona = prompt("ingrese la nueva persona:");
    listaDePersonas.push(nuevaPersona);
    op = prompt(
      'si desdeas ingresar una nueva persona escribe si, lo contrario di no'
    );
  }
  
  if(op==='no'){
    alert('Se han ingresado con exito');
  }
}

//sin parametros
function mostarlistaDePersonas(){
  for (let i = 0; i < personas.length; i++) {
    alert(personas[i]);
  }
}

//crear mas personas
crearNuevasPersonas(personas);

//mostrarlas
mostarlistaDePersonas();

//crear nuevamente mas personas
crearNuevasPersonas(personas);

//mostrar nuevamente la lista
mostarlistaDePersonas();

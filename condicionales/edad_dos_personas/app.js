let edad1 = parseInt(prompt('Ingresa la edad de la primera persona '))
let edad2 = parseInt(prompt('Ingresa la edad de la segunda persona'))

if(edad1 > 18 || edad2 > 18){
    alert('Ambos son mayores de edad')
}else if(edad1>18 && edad2<18){
    alert('La primera persona es mayor de edad')
}else if(edad1<18 && edad2>18){
    alert('La segunda persona es mayor de edad')
}else{
    alert('Ambos son menores de edad')
}

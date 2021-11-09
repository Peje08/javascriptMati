/* Ejercicio Nº2
Escriba una función que tome un string con una suma y devuelva su resultado como un número.
Deben sumarse dos números naturales(numeros enteros). La tarea de suma es una cadena de la forma '102 + 17'.
*/

const sumaString = (suma) =>{
    let sumaElements = 0;
    let array = suma.split('+');
    if (array != -1){
        sumaElements = 1*array[0] + 1*array[1];
    }
    return sumaElements;
}

console.log(sumaString('2+5'));
/* Ejercicio Nº1
Escribe una función que sume que calcule la suma de dígitos de un número entero es decir la suma de todos sus dígitos.
Ejemplo: suma de dígitos (192) debería devolver 12 (1+9+2)
*/


const sumaNumbers = (digits) =>{
    let array = ('0'+ digits).split('');
    let suma = 0;
    for (digits of array){
        suma += (1*digits)
    }
    return suma;
}

console.log(sumaNumbers(456));

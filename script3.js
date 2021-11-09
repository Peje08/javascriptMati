
/* Ejercicio Nº3
Escribir una función que genere un numero random y pregunte por prompt "Adivina un numero del 1 al 10"
hasta que acierte y muestre "Adivinaste el numero"*/

const adivinar = () => {
    let randomNumber = parseInt(Math.random()*(11-0));
    do{
        myNumber = parseInt(prompt('Ingresa un número del 1 al 10', 'Escribir aquí'));
    } while (randomNumber != myNumber);
    alert(`¡Enhorabuena!, el número era ${randomNumber}.`);
}

adivinar();
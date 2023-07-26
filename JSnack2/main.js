// Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.

const firstNumber = parsint(prompt("scegli un numero"));
const secondNumber = parsint(prompt("scegli un secondo numero"));
let numeroMaggiore;
let numerominore;

if (firstNumber > secondNumber) {
  numeroMaggiore = firstNumber;
  numerominore = secondNumber;
} else if (firstNumber < secondNumber) {
  numeroMaggiore = secondNumber;
  numerominore = firstNumber;
}

let randomNumber = Math.floor(Math.random() * numeroMaggiore) * numerominore;
console.log(randomNumber);

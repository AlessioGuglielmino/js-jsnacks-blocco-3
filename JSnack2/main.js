// Dare la possibilità di inserire due parole. Verificare che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const primaParola = prompt("inserisci una parola");
const secondaParola = prompt("inserisci una seconda parola");
let parolaLunga = "";

if (primaParola.length > secondaParola.length) {
  parolaLunga = primaParola;
} else if (primaParola.length < secondaParola.length) {
  parolaLunga = secondaParola;
}

// CONFRONTO LA LUNGHEZZA DELLE DUE PAROLE

if (primaParola.length == secondaParola.length) {
  console.log(primaParola);
  console.log(secondaParola);
} else if (primaParola.length !== secondaParola.length) {
  console.log(parolaLunga);
}

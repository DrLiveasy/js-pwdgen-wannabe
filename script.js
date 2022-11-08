let nome = prompt("Inserisci il nome");
let cognome = prompt("Inserisci il cognome");
let colore = prompt("Inserisci il tuo colore preferito");
let numero1 = prompt("inserisci un numero!");
let numero2 = prompt("inserisci un'alro numero!");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

let somma = numero1 / numero2;

console.log(nome+cognome+colore+somma);

document.getElementById("password").innerHTML = nome+cognome+colore+somma;


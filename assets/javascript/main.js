const nome = prompt('Inserisci il tuo nome'); 
const cognome = prompt('Inserisci il tuo cognome'); 
const colorePreferito = prompt('Inserisci il tuo colore preferito');

document.getElementById(`pwdgenerated`).innerHTML = `<p>${nome}${cognome}${colorePreferito}21</p>`;
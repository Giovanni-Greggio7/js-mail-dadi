// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota:
// Non è necessario provvedere alla validazione delle email

const email = ["test@gmail.com", "test@yahoo.it", "test@outlook.it"];

let invito = prompt( `Inserisci la tua mail per verificare la partecipazione all'evento` )

console.log(invito)

for ( i = 0; i <= email.length; i++) {
    if (invito == email[i]) {
        console.log(`Congratulazioni! Sei stato invitato!`);
    } else {
        console.log(`Mi dispiace, non sei sulla lista`)
    }
}
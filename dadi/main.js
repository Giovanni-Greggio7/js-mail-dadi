// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
let player = Math.floor(Math.random() * 7)
let cpu = Math.floor(Math.random() * 7)

console.log(player, cpu)

if (player > cpu) {
    console.log(`Vince Player 1!`)
} else if  (player < cpu) {
    console.log(`Vince il computer!`)
} else {
    console.log(`Pareggio!`)
}


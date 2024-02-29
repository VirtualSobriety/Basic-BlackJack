let player = {
    name: "Craig - ",
    chips: "Chips: $" + 45,
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
// ^^^ is another way to grab elements instead of the getelementbyid^^^//
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + player.chips

// this seems like it will be the most important function in the game
// function getRandomCard() {
//     return Math.floor (Math.random () * 13 ) + 1
// }

function getRandomCard() {
    let randomCard = Math.floor( Math.random() *13) + 1
        if (randomCard > 10 ) {
        return 10}
        if (randomCard === 1) {
        return 11}
    else {
    return randomCard
    }
}

function startGame() { 
    isAlive = true
    let cardOne = getRandomCard()
    let cardTwo = getRandomCard()
    cards = [cardOne, cardTwo]
    sum = cardOne + cardTwo
    renderGame ()
    console.log(cards)
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += " " + cards[i] + ","
    }
    
    sumEl.textContent =  "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want another card?" 
    }   else if (sum === 21) {
        message = "Congrats! You got Blacky-Jacky!"
        hasBlackJack = true
    }   else {
        message = "YOU'RE A LOSER!!! 😭😭😭"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
    console.log("Drawing a new card from the deck!")
    let nextCard = getRandomCard()
    sum += nextCard
    cards.push(nextCard)
    renderGame()}
}
// HEY DOWN HERE!!! alright so everything is working at the moment.  you still have to finish the CURRENT lesson on scrimba...youre almost there, keep it up dude, youve got this 
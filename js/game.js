const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
    this.classList.add('flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return
    }

    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();
}

cards.forEach(card => card.addEventListener('click', flipCard));

function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, firstCard, secondCard] = [false, null, null];
}

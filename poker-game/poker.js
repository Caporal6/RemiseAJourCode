function play() {
    // Simulate drawing 5 random cards from a deck
    const cards = drawCards(5);
    displayCards(cards);
    const result = evaluateHand(cards);
    displayResult(result);
}

function drawCards(num) {
    const deck = createDeck();
    shuffleDeck(deck);
    return deck.slice(0, num);
}

function createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const deck = [];
    
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ value, suit });
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function displayCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        const cardElement = document.getElementById((i + 1).toString());
        cardElement.textContent = `${cards[i].value} of ${cards[i].suit}`;
        cardElement.style.display = 'block';
    }
}

function evaluateHand(cards) {
    // Basic evaluation logic (can be expanded)
    const values = cards.map(card => card.value);
    const uniqueValues = [...new Set(values)];
    
    if (uniqueValues.length === 5) {
        return "High Card";
    } else if (uniqueValues.length === 4) {
        return "One Pair";
    } else if (uniqueValues.length === 3) {
        return "Three of a Kind or Two Pair";
    } else if (uniqueValues.length === 2) {
        return "Four of a Kind or Full House";
    }
    return "Invalid Hand";
}

function displayResult(result) {
    const resultElement = document.getElementById('resultat');
    resultElement.textContent = result;
}
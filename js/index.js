const suit = ['hearts', 'clubs', 'diamonds', 'spades'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const btnWrapper = document.querySelector('.btn-wrapper');
const selectedCardsWrapper = document.querySelector('.selected-cards');
const cards = [];

function createCards() {
  // Create an array with objects containing the value and the suit of each card
  for (let x = 0; x < suit.length; x += 1) {
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit: suit[x],
      };
      cards.push(cardObject);
    }
  }
  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 26;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
    cardElement.onclick = selectCard;
  });
}

// Function to randomly shuffle cards
function shuffleCards() {
  const shuffledCards = cards.slice().sort(() => Math.random() - 0.5);
  shuffledCards.forEach((card, i) => {
    const positionFromLeft = i * 26;
    const shuffledCard = document.createElement('div');
    shuffledCard.setAttribute('data-value', card.value);
    shuffledCard.classList.add('card', `${card.suit}-${card.value}`);
    shuffledCard.style.left = `${positionFromLeft}px`;
    cardsWrapper.replaceChild(shuffledCard, cardsWrapper.children[i]);
  });
}

// Function to flip cards face down
function flipCards() {
  cardsWrapper.classList.toggle('hidden');
}

// Function to display magic button
function showMagicBtn() {
  const magicBtn = document.getElementById('magic-btn');
  magicBtn.style.display = ((magicBtn.style.display === 'none') ? 'block' : 'none');
}

// Function to select a single card and append to it to the DOM
function selectCard() {
  cards.forEach((card) => {
    const selected = document.createElement('selected-div');
    selected.id = 'selected-cards';
    selected.setAttribute('data-value', card.value);
    selected.classList.add('card', `${card.suit}-${card.value}`);
    selectedCardsWrapper.append(selected);
    selected.onclick = showMagicBtn;
  });
}

function magic() {
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code
  // Clear start button
  document.getElementById('start-game').remove();

  // Add shuffle button
  const shuffleButton = document.createElement('button');
  shuffleButton.type = 'button';
  shuffleButton.id = 'shuffle-btn';
  shuffleButton.className = 'btn btn-lg btn-secondary ml-3';
  shuffleButton.innerHTML = 'Shuffle';
  // onclick action
  shuffleButton.onclick = shuffleCards;

  // Add show/hide button
  const showHideButton = document.createElement('button');
  showHideButton.type = 'button';
  showHideButton.id = 'show-hide-btn';
  showHideButton.className = 'btn btn-lg btn-secondary ml-3';
  showHideButton.innerHTML = 'Show/Hide';
  // onclick action
  showHideButton.onclick = flipCards;

  // Add magic button
  const magicButton = document.createElement('button');
  magicButton.type = 'button';
  magicButton.id = 'magic-btn';
  magicButton.style.display = 'block';
  magicButton.className = 'btn btn-lg btn-secondary ml-3';
  magicButton.innerHTML = 'Magic';
  // onclick action
  magicButton.onclick = magic;

  // Append buttons
  btnWrapper.append(shuffleButton, showHideButton, magicButton);
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);

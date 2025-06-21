const emojis = ['🥰', '🤗', '💗', '❤️', '🤍', '😘', '😍', '💝'];
let cards = [...emojis, ...emojis].sort(() => 0.5 - Math.random());
let flippedCards = [];
let matchedPairs = 0;

const gameGrid = document.getElementById('gameGrid');

cards.forEach((emoji, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.emoji = emoji;
  card.dataset.index = index;
  card.innerText = '';
  gameGrid.appendChild(card);
});

gameGrid.addEventListener('click', (e) => {
  const clicked = e.target;
  if (!clicked.classList.contains('card') || clicked.classList.contains('flipped') || flippedCards.length === 2) return;

  clicked.classList.add('flipped');
  clicked.innerText = clicked.dataset.emoji;
  flippedCards.push(clicked);

  if (flippedCards.length === 2) {
    setTimeout(() => {
      const [card1, card2] = flippedCards;
      if (card1.dataset.emoji === card2.dataset.emoji) {
        matchedPairs++;
        if (matchedPairs === emojis.length) {
          const resultText = document.getElementById('result');
          resultText.classList.remove('hidden');
          setTimeout(() => {
            resultText.classList.add('show');
          }, 100);
        }
      } else {
        card1.classList.remove('flipped');
        card1.innerText = '';
        card2.classList.remove('flipped');
        card2.innerText = '';
      }
      flippedCards = [];
    }, 800);
  }
});

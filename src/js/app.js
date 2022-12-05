import typeCard from './cardType.js';
import luhnValidator from './luhnAlgoritm.js';

const btn = document.querySelector('.btn');
const cardInput = document.querySelector('.input-number');
const erMess = document.querySelector('.not-valid-card');
const validMess = document.querySelector('.valid-card');
const cards = document.querySelectorAll('.img');

cardInput.addEventListener('input', () => {
  erMess.style.display = 'none';
  validMess.style.display = 'none';
  const result = typeCard(cardInput.value);
  if (result) {
    cards.forEach((card) => {
      if (card.classList.contains(result)) {
        card.classList.remove('disabled');
      }
    });
  } else {
    cards.forEach((card) => card.classList.add('disabled'));
  }
});

console.log(cardInput.value);

btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (luhnValidator(cardInput.value)) {
    validMess.style.display = 'block';
  } else {
    erMess.style.display = 'block';
  }
});

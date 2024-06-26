// FUNCION PARA BUSCADOR

function normalizeText(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filterCards() {
  const searchInput = document.getElementById('searchInput').value;
  const normalizedSearchInput = normalizeText(searchInput);
  const cardGroup = document.getElementById('cardGroup');
  const cards = cardGroup.getElementsByClassName('col');
  let firstVisibleCard = null;

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const title = card.querySelector('.card-title').textContent;
    const normalizedTitle = normalizeText(title);

    if (normalizedTitle.includes(normalizedSearchInput)) {
      card.style.display = 'block';
      if (!firstVisibleCard) {
        firstVisibleCard = card;
      }
    } else {
      card.style.display = 'none';
    }
  }

  if (firstVisibleCard) {
    firstVisibleCard.scrollIntoView({ behavior: 'smooth' });
  }
}

function resetSearch() {
  const cardGroup = document.getElementById('cardGroup');
  const cards = cardGroup.getElementsByClassName('col');

  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = 'block';
  }
}

document.getElementById('searchButton').addEventListener('click', filterCards);

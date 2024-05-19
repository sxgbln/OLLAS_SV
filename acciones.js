


//FUNCION PARA BUSCADOR

function normalizeText(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filterCards() {
  const searchInput = document.getElementById('searchInput').value;
  const normalizedSearchInput = normalizeText(searchInput);
  const cardGroup = document.getElementById('cardGroup');
  const cards = cardGroup.getElementsByClassName('col');

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const title = card.querySelector('.card-title').textContent;
    const normalizedTitle = normalizeText(title);

    if (normalizedTitle.includes(normalizedSearchInput)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.card');
  const secundarios = document.querySelectorAll('.secundario-item.clickable');

  const modal = document.getElementById('heroModal');
  const heroName = document.getElementById('heroName');
  const heroDescription = document.getElementById('heroDescription');
  const heroImage = document.getElementById('heroImage');
  const heroLink = document.getElementById('heroLink');

  const closeBtn = document.querySelector('.close-btn');
  const modalContent = document.querySelector('.modal-content');

  // 🔥 FUNÇÃO CENTRAL (evita repetição)
  function abrirModal({ name, description, image, color, link }) {

    heroName.textContent = name;
    heroDescription.textContent = description;
    heroImage.src = image;

    // link (só se existir)
    if (link) {
      heroLink.href = link;
      heroLink.style.display = 'inline-block';
    } else {
      heroLink.style.display = 'none';
    }

    // cor de fundo
    if (color) {
      modalContent.style.background = color;

      const isLightColor = color.includes('#ffffff') || color.includes('#fae100');
      modalContent.style.color = isLightColor ? '#000' : '#fff';
    }

    modal.classList.add('show');
  }

  // 👉 CARDS PRINCIPAIS
  cards.forEach(card => {
    card.addEventListener('click', (e) => {

      e.preventDefault();

      abrirModal({
        name: card.getAttribute('data-name'),
        description: card.getAttribute('data-description'),
        image: card.getAttribute('data-image'),
        color: card.getAttribute('data-color'),
        link: card.getAttribute('data-link')
      });

    });
  });

  // 👉 ITENS SECUNDÁRIOS
  secundarios.forEach(item => {
    item.addEventListener('click', () => {

      abrirModal({
        name: item.getAttribute('data-name'),
        description: item.getAttribute('data-description'),
        image: item.getAttribute('data-image'),
        color: item.getAttribute('data-color')
      });

    });
  });

  // 👉 FECHAR NO BOTÃO X
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // 👉 FECHAR CLICANDO FORA
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });

});
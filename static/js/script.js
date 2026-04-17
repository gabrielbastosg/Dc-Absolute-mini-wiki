document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.card');
  const secundarios = document.querySelectorAll('.secundario-item.clickable');

  const modal = document.getElementById('heroModal');
  const heroName = document.getElementById('heroName');
  const heroDescription = document.getElementById('heroDescription');
  const heroImage = document.getElementById('heroImage');
  const heroLink = document.getElementById('heroLink');
  const heroType = document.getElementById('heroType'); // ✅ NOVO

  const closeBtn = document.querySelector('.close-btn');
  const modalContent = document.querySelector('.modal-content');

  // 🔥 FUNÇÃO CENTRAL
  function abrirModal({ name, description, image, color, link, tipo }) {

    heroName.textContent = name;
    heroDescription.textContent = description;
    heroImage.src = image;

    // ✅ tipo (NOVO)
    if (heroType) {
      heroType.textContent = tipo || '';
    }

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
        name: card.dataset.name,
        description: card.dataset.description,
        image: card.dataset.image,
        color: card.dataset.color,
        link: card.dataset.link,
        tipo: card.dataset.tipo // opcional
      });

    });
  });

  // 👉 ITENS SECUNDÁRIOS
  secundarios.forEach(item => {
    item.addEventListener('click', () => {

      abrirModal({
        name: item.dataset.name,
        description: item.dataset.description,
        image: item.dataset.image,
        color: item.dataset.color,
        tipo: item.dataset.tipo // ✅ NOVO
      });

    });
  });

  // 👉 FECHAR NO BOTÃO X
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  }

  // 👉 FECHAR CLICANDO FORA
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  }

});
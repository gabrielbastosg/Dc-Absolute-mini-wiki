document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.card');
  const secundarios = document.querySelectorAll('.secundario-item.clickable');

  const modal = document.getElementById('heroModal');
  const heroName = document.getElementById('heroName');
  const heroDescription = document.getElementById('heroDescription');
  const heroImage = document.getElementById('heroImage');
  const heroLink = document.getElementById('heroLink');
  const heroType = document.getElementById('heroType');

  const closeBtn = document.querySelector('.close-btn');
  const modalContent = document.querySelector('.modal-content');

  // 🔥 DETECTAR SE COR É CLARA
  function isColorLight(hex) {
    if (!hex) return false;

    const c = hex.replace('#', '');
    const rgb = parseInt(c, 16);

    const r = (rgb >> 16) & 255;
    const g = (rgb >> 8) & 255;
    const b = rgb & 255;

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155;
  }

  // 🔥 ATUALIZAR TEXTO E IMAGEM
  function atualizarTexto({ name, description, image, tipo }) {
    heroName.textContent = name || '';
    heroDescription.textContent = description || '';

    heroImage.src = image || 'img/default.webp';

    // fallback se imagem quebrar
    heroImage.onerror = () => {
      heroImage.src = 'img/default.webp';
    };

    if (heroType) {
      heroType.textContent = tipo || '';
    }
  }

  // 🔥 ATUALIZAR LINK
  function atualizarLink(link) {
    if (link) {
      heroLink.href = link;
      heroLink.style.display = 'inline-block';
    } else {
      heroLink.style.display = 'none';
    }
  }

  // 🔥 ATUALIZAR COR
  function atualizarCor(color) {
    if (!color) return;

    modalContent.style.background = color;
    modalContent.style.color = isColorLight(color) ? '#000' : '#fff';
  }

  // 🔥 ABRIR MODAL
  function abrirModal(data) {
    atualizarTexto(data);
    atualizarLink(data.link);
    atualizarCor(data.color);

    modal.classList.add('show');

    // 🚀 trava scroll do fundo
    document.body.style.overflow = 'hidden';
  }

  // 🔥 FECHAR MODAL (centralizado)
  function fecharModal() {
    modal.classList.remove('show');

    // 🚀 libera scroll
    document.body.style.overflow = 'auto';
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
        tipo: card.dataset.tipo
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
        tipo: item.dataset.tipo
      });
    });
  });

  // 👉 FECHAR NO BOTÃO X
  if (closeBtn) {
    closeBtn.addEventListener('click', fecharModal);
  }

  // 👉 FECHAR CLICANDO FORA
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        fecharModal();
      }
    });
  }

  // 👉 FECHAR COM ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      fecharModal();
    }
  });

});
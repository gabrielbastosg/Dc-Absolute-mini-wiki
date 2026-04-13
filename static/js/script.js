document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('heroModal');
  const heroName = document.getElementById('heroName');
  const heroDescription = document.getElementById('heroDescription');
  const heroImage = document.getElementById('heroImage');
  const closeBtn = document.querySelector('.close-btn');
  const modalContent = document.querySelector('.modal-content');

  cards.forEach(card => {
    card.addEventListener('click', (e) => {

      // 🚨 evita conflito com o botão
      if (e.target.classList.contains('btn-link')) return;

      e.preventDefault(); 

      const name = card.getAttribute('data-name');
      const description = card.getAttribute('data-description');
      const image = card.getAttribute('data-image');
      const color = card.getAttribute('data-color');

      heroName.textContent = name;
      heroDescription.textContent = description;
      heroImage.src = image;

      modalContent.style.background = color;

      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  const links = document.querySelectorAll('.btn-link');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // 🚨 impede o clique de subir pro card
      e.stopPropagation();

      const card = link.closest('.card');
      const url = card.getAttribute('data-link');

      window.location.href = url;
    });
  });

});
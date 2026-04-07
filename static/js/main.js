// Aguarda o DOM carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

    const btn = document.getElementById('btn-herois');
    const cards = document.getElementById('cards');

    // Estado inicial: cards ocultos
    cards.classList.add('oculto');

    // Evento de clique no botão
    btn.addEventListener('click', function () {
        const estaOculto = cards.classList.contains('oculto');

        if (estaOculto) {
            // Exibe os cards e atualiza o texto do botão
            cards.classList.remove('oculto');
            btn.textContent = 'Ocultar Heróis';
        } else {
            // Oculta os cards e restaura o texto do botão
            cards.classList.add('oculto');
            btn.textContent = 'Mostrar Heróis';
        }
    });

});

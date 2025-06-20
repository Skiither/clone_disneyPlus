document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            const abaAlvo = event.currentTarget.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

            escondeTodasAbas();
            aba.classList.add('shows__list--is--active');

            removeBotaoAtivo();
            event.currentTarget.classList.add('shows__tabs__button--is--active');
        });
    }
});

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

function escondeTodasAbas() {
    const abas = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < abas.length; i++) {
        abas[i].classList.remove('shows__list--is--active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const orderItemsContainer = document.getElementById('order-items');

    // Функция для добавления цветка в заказ
    function addToOrder(flowerName, flowerPrice, flowerImage) {
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        orderItem.innerHTML = `
            <img src="${flowerImage}" alt="${flowerName}" width="50">
            <span>${flowerName}</span>
            <span>${flowerPrice} KZT</span>
        `;
        orderItemsContainer.appendChild(orderItem);
    }

    // Привязываем обработчик клика к кнопкам "Заказать"
    const orderButtons = document.querySelectorAll('.order-button');
    orderButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.bestseller-card');
            const flowerName = card.querySelector('h3').textContent;
            const flowerPrice = card.querySelector('.price').textContent.replace('Цена: ', '').trim();
            const flowerImage = card.querySelector('img').src;

            addToOrder(flowerName, flowerPrice, flowerImage);
        });
    });
});

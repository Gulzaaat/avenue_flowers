document.addEventListener('DOMContentLoaded', () => {
    let selectedColor = 'all'; // Изначально все цвета видны
    let selectedCategory = 'all'; // Изначально все категории видны

    // Функция для фильтрации товаров по цвету и категории
    function filterProducts() {
        const products = document.querySelectorAll('.bestseller-card');

        products.forEach((product) => {
            const productColor = product.dataset.color || 'all';
            const productCategory = product.dataset.category || 'all';

            // Показываем товар, если совпадают цвет и категория
            if (
                (selectedColor === 'all' || productColor === selectedColor) &&
                (selectedCategory === 'all' || productCategory === selectedCategory)
            ) {
                product.style.display = 'block'; // Показываем товар
            } else {
                product.style.display = 'none'; // Скрываем товар
            }
        });
    }

    // Обработка кликов по кнопкам цветов
    const colorButtons = document.querySelectorAll('.color-button');
    colorButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Убираем выделение с остальных кнопок
            colorButtons.forEach((btn) => btn.classList.remove('selected'));

            // Добавляем класс "selected" на выбранную кнопку
            button.classList.add('selected');

            // Сохраняем выбранный цвет
            selectedColor = button.dataset.color || 'all';

            // Применяем фильтрацию
            filterProducts();
        });
    });

    // Обработка клика по кнопке "VIP букеты"
    const vipButton = document.querySelector('.flower-button[data-category="VIP букеты"]');
    if (vipButton) {
        vipButton.addEventListener('click', () => {
            selectedCategory = 'VIP букеты';
            selectedColor = 'all'; // Сбрасываем выбранный цвет

            // Снимаем выделение с кнопок цветов
            colorButtons.forEach((btn) => btn.classList.remove('selected'));

            // Применяем фильтрацию
            filterProducts();
        });
    }

    // Кнопка для сброса фильтров
    const allButton = document.querySelector('.flower-button[data-category="all"]');
    if (allButton) {
        allButton.addEventListener('click', () => {
            selectedColor = 'all';
            selectedCategory = 'all';

            // Снимаем выделение с кнопок цветов
            colorButtons.forEach((btn) => btn.classList.remove('selected'));

            // Применяем фильтрацию
            filterProducts();
        });
    }
});


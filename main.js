let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function prevSlide() {
  slides[currentSlide].style.display = 'none';  // Скрыть текущий слайд
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;  // Переход к предыдущему слайду
  slides[currentSlide].style.display = 'block';  // Отображение нового слайда
}

function nextSlide() {
  slides[currentSlide].style.display = 'none';  // Скрыть текущий слайд
  currentSlide = (currentSlide + 1) % totalSlides;  // Переход к следующему слайду
  slides[currentSlide].style.display = 'block';  // Отображение нового слайда
}

// Инициализация первого слайда
document.addEventListener('DOMContentLoaded', () => {
  slides[0].style.display = 'block';
});

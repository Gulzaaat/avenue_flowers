let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Циклично переходит к следующему
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Циклично возвращается к предыдущему
  showSlide(currentSlide);
}

// Показать первый слайд по умолчанию
showSlide(currentSlide);

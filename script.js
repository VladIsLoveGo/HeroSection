// Бургер-меню
const menuToggle = document.querySelector('.menu-toggle');
const closeButton = document.querySelector('.close-button');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.add('open');
});

closeButton.addEventListener('click', () => {
  menu.classList.remove('open');
});

// Карусель услуг
const servicesContainer = document.querySelector('.services-container');
const services = document.querySelectorAll('.service');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let currentIndex = 0;

function updateCarousel() {
  services.forEach((service, index) => {
    service.style.transform = `translateX(-${currentIndex * (service.offsetWidth + 15)}px)`;
  });
}

arrowLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

arrowRight.addEventListener('click', () => {
  if (currentIndex < services.length - 4) { // Учитываем видимые элементы
    currentIndex++;
    updateCarousel();
  }
});

// Параллакс для фона кота (только на десктопе)
const catBackground = document.querySelector('.cat-background');
document.addEventListener('mousemove', (e) => {
  if (window.innerWidth > 768) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    catBackground.style.transform = `translate(${x}px, ${y}px)`;
  }
});
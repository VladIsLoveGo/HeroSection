// JavaScript код остается без изменений
const carouselItems = document.querySelectorAll('.service');
const indicators = document.querySelectorAll('.carousel-indicator span');

let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach(item => item.classList.remove('active'));
  indicators.forEach(indicator => indicator.classList.remove('active'));
  carouselItems[index].classList.add('active');
  indicators[index].classList.add('active');
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}, 5000);

showSlide(currentIndex);

const heroSection = document.querySelector('.hero-section');

heroSection.addEventListener('mousemove', (e) => {
    const x = e.pageX - window.innerWidth / 2;
    const y = e.pageY - window.innerHeight / 2;
    const maxOffset = 100;
    const offsetX = x / window.innerWidth * maxOffset;
    const offsetY = y / window.innerHeight * maxOffset;
    heroSection.style.backgroundPosition = `calc(50% + ${offsetX}px) calc(50% + ${offsetY}px)`;
}, { passive: true }); // Добавляем passive для улучшения производительности и избежания блокировки событий

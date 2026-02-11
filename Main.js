let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index]?.classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Синхронизация при загрузке
window.addEventListener('DOMContentLoaded', () => {
  const activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
  currentSlide = activeIndex !== -1 ? activeIndex : 0;
  showSlide(currentSlide);
})
function createFlyingEmoji(count = 8) {
  const container = document.getElementById('emoji-container');
  if (!container) return;
  
  const emojis = ['🌙', '🐶', '⭐', '☁️', '🦴', '🐕', '🌕', '✨'];
  
  for (let i = 0; i < count; i++) {
    const emoji = document.createElement('div');
    emoji.className = 'flying-emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Случайные начальные координаты (в пределах верхней трети экрана)
    const top = Math.random() * 30 + '%';   // 0–30% от верха
    const left = Math.random() * 100 + '%'; // 0–100% ширины
    
    // Случайная длительность анимации (15–30 сек)
    const duration = 15 + Math.random() * 20;
    
    // Случайные ключевые кадры через CSS-переменные или создание <style>
    // Но проще использовать готовый keyframe и менять параметры
    emoji.style.top = top;
    emoji.style.left = left;
    emoji.style.animation = `floatRandom ${duration}s infinite ease-in-out`;
    
    // Добавляем случайное смещение в keyframe через CSS-переменную
    const dx1 = 50 + Math.random() * 200;
    const dy1 = -30 + Math.random() * 100;
    const dx2 = -40 + Math.random() * 200;
    const dy2 = 20 + Math.random() * 100;
    
    emoji.style.setProperty('--dx1', dx1 + 'px');
    emoji.style.setProperty('--dy1', dy1 + 'px');
    emoji.style.setProperty('--dx2', dx2 + 'px');
    emoji.style.setProperty('--dy2', dy2 + 'px');
    
    container.appendChild(emoji);
  }
}

// Запускаем после загрузки DOM
window.addEventListener('DOMContentLoaded', () => {
  createFlyingEmoji(12);
});
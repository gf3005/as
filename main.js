let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides[currentSlide].style.display = 'none';
    currentSlide = index;
    slides[currentSlide].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    slides[currentSlide].style.display = 'block';
    createHearts();
});


function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'moving-heart';
    heart.innerHTML = '🤎';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    document.body.appendChild(heart);

    heart.style.animation = 'moveUp 10s linear forwards';
    
}

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 20; i++) {
        createHeart();
    }

    setInterval(createHeart, 1000);
});


document.addEventListener('DOMContentLoaded', () => {
    // Add gallery images
    // Replace these with your actual image paths
    addGalleryImage('images/1.jpg');
    addGalleryImage('images/2.jpg');
    addGalleryImage('images/3.jpg');
    addGalleryImage('images/4.jpg');
    addGalleryImage('images/5.jpg', 'Special Moments');
    addGalleryImage('images/6.jpg', 'Together Forever');
    addGalleryImage('images/7.jpg');
    addGalleryImage('images/8.jpg');
    addGalleryImage('images/9.jpg');

    // Music Player
    const bgMusic = document.getElementById('bgMusic');
    const playPauseBtn = document.getElementById('playPauseBtn');
    let isPlaying = false;

    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            bgMusic.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });

    // No button movement
    const noBtn = document.querySelector('.no-btn');
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    // Yes button click
    const yesBtn = document.querySelector('.yes-btn');
    yesBtn.addEventListener('click', () => {
        // Create confetti effect
        createConfetti();
        
        // Show success message
        const proposalContent = document.querySelector('.proposal-content');
        proposalContent.innerHTML = `
            <h2>I Love You! ❤️</h2>
            <p class="success-message">You've made me the happiest person alive!</p>
            <div class="floating-hearts">
                <i class="fas fa-heart"></i>
                <i class="fas fa-heart"></i>
                <i class="fas fa-heart"></i>
            </div>
        `;

        // Play celebration sound
        const celebrationSound = new Audio('celebration.mp3');
        celebrationSound.play();
    });

    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.style.animation = 'bounce 2s infinite';
    }

    // Add floating hearts animation
    createFloatingHearts();
});

// Confetti effect
function createConfetti() {
    const confettiCount = 200;
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -20 + 'px';
        confetti.style.opacity = Math.random();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiContainer.appendChild(confetti);

        const animation = confetti.animate([
            { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
            { transform: `translate(${Math.random() * 100 - 50}px, ${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)'
        });

        animation.onfinish = () => confetti.remove();
    }

    // Remove confetti container after animation
    setTimeout(() => {
        confettiContainer.remove();
    }, 5000);
}

function getRandomColor() {
    const colors = ['#ffd1dc', '#b5d8eb', '#e0bbff', '#fffacd', '#c1e1c1'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add timeline items dynamically
function addTimelineItem(date, title, description) {
    const timelineContainer = document.querySelector('.timeline-container');
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.innerHTML = `
        <div class="timeline-date">${date}</div>
        <div class="timeline-content">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;
    timelineContainer.appendChild(timelineItem);
}

// Add gallery images dynamically
function addGalleryImage(src, alt) {
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
        <img src="${src}" alt="${alt}">
        <div class="gallery-caption">${alt}</div>
    `;
    galleryContainer.appendChild(galleryItem);
}

// Create floating hearts animation
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    if (!container) return;

    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.color = getRandomColor();
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        heart.style.animation = `float ${Math.random() * 3 + 2}s infinite`;
        container.appendChild(heart);
    }
}

// Add CSS animation for floating hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-20px); }
        60% { transform: translateY(-10px); }
    }

    @keyframes float {
        0% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
        100% { transform: translateY(0) rotate(360deg); }
    }
`;
document.head.appendChild(style); 
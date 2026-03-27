const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Persistence
if (localStorage.getItem('theme-mode') === 'light') {
    body.classList.add('light');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    localStorage.setItem('theme-mode', body.classList.contains('light') ? 'light' : 'dark');
});

// Scroll Reveal Logic
const reveal = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(s => {
        const top = s.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            s.style.opacity = "1";
            s.style.transform = "translateY(0)";
        }
    });
};

document.querySelectorAll('section').forEach(s => {
    s.style.opacity = "0";
    s.style.transform = "translateY(40px)";
    s.style.transition = "all 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
});

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

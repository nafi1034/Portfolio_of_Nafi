const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved theme
if (localStorage.getItem('portfolio-theme') === 'dark') {
  body.classList.add('dark');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('portfolio-theme', currentTheme);
});

// Smooth reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(s => {
  s.style.opacity = "0";
  s.style.transform = "translateY(20px)";
  s.style.transition = "all 0.6s ease-out";
  observer.observe(s);
});

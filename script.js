// Toggle Theme Logic
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  toggleBtn.textContent = isLight ? 'Switch to Dark Mode' : 'Switch Vision Mode';
});

// Intersection Observer for Section Reveal
const revealOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, revealOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

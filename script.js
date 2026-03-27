const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Persistence: Check if dark mode was previously selected
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  
  // Save preference
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

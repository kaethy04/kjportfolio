function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const btn = document.getElementById('themeToggleBtn');
  
  if (currentTheme === 'light') {
    document.documentElement.removeAttribute('data-theme');
    btn.innerHTML = '🌙 Light Mode';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    btn.innerHTML = '🍷 Maroon Dark Mode';
  }
}

function filterProjects(category, button) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');

  document.querySelectorAll('.project-card').forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  alert('Thank you for reaching out! Your message has been received.');
  e.target.reset();
}

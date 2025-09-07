// --- Código para el cambio de tema ---
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  } else if (systemPrefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
  }
}

themeToggle.addEventListener('click', toggleTheme);
document.addEventListener('DOMContentLoaded', loadTheme);

// --- Código para el scroll suave ---
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces que tienen un hash (#) en su href
    const navLinks = document.querySelectorAll('a[href^="#"]');

    // Itera sobre cada enlace
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Previene el comportamiento de salto por defecto
            event.preventDefault();

            // Obtiene el ID del destino (ej. '#contacto')
            const targetId = link.getAttribute('href');

            // Encuentra el elemento de destino
            const targetSection = document.querySelector(targetId);

            // Si el elemento existe, desplázate a él suavemente
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  root.dataset.theme = 'dark';
}

toggle?.addEventListener('click', () => {
  const isDark = root.dataset.theme === 'dark';
  if (isDark) {
    delete root.dataset.theme;
    localStorage.setItem('theme', 'light');
  } else {
    root.dataset.theme = 'dark';
    localStorage.setItem('theme', 'dark');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

function setTheme(theme) {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
}

function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'dark') {
        root.style.setProperty('--background-color', 'var(--background-color-dark)');
        root.style.setProperty('--text-color', 'var(--text-color-dark)');
    } else {
        root.style.setProperty('--background-color', 'var(--background-color-light)');
        root.style.setProperty('--text-color', 'var(--text-color-light)');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDarkMode ? 'dark' : 'light');
    setTheme(theme);
});

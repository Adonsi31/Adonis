
// THEME MANAGEMENT
function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
}

function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(next);
}

function updateThemeIcon(theme) {
    const btn = document.querySelector('.theme-switch');
    if (btn) btn.innerText = theme === 'dark' ? '☀' : '☾';
}

// COOKIES
function checkCookies() {
    if (!localStorage.getItem('cookiesAccepted')) {
        const banner = document.getElementById('cookie-banner');
        if (banner) banner.style.display = 'block';
    }
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    const banner = document.getElementById('cookie-banner');
    if (banner) banner.style.display = 'none';
}

// ACTIVE LINK HIGHLIGHTER
function setActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html';

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });
}

// INIT
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setActiveLink();
    setTimeout(checkCookies, 2000);
});

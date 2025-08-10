// JavaScript source code
const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

function toggleMenu() {
    const isOpen = menu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
}

toggleBtn.addEventListener('click', toggleMenu);

// Accessibility: allow toggling menu with Enter or Space keys on toggle button
toggleBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});

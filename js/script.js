const menuButton = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.nav-menu');

if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('active');
        menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuButton.setAttribute('aria-expanded', 'false');
        });
    });
}

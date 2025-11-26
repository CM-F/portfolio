// hamburger menu listener
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');

    function closeMenu() {
        navMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
        navMenu.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
    }

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        if (navMenu.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!navMenu.contains(target) && !hamburger.contains(target)) {
            closeMenu();
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
});
// hamburger menu listener
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');

    function closeMenu() {
        navMenu.classList.remove('open');
    }

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation();
        navMenu.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        const target = event.target;
        // Vérifie si le clic est en dehors du menu et du bouton hamburger
        if (!navMenu.contains(target) && !hamburger.contains(target)) {
            closeMenu();
        }
    });
});
// Countdown before the pool
const updateCountdown = () => {
    // Time remaining
    const poolDate = new Date('October 6, 2025 09:00:00').getTime();
    const now = new Date().getTime();
    const intlNumberFormatter = new Intl.NumberFormat("fr-FR");
    const timeRemaining = Math.floor((poolDate - now)/1000);
    const formattedRemaining = intlNumberFormatter.format(timeRemaining);
    
    // Insert countdown in the span
    const timeContainer = document.getElementById("time-container");
    timeContainer.innerText = formattedRemaining;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


// hamburger menu listener
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');

    function closeMenu() {
        navMenu.classList.remove('open');
    }

    hamburger.addEventListener('click', function(event) {
        event.stopPropagation(); // Empêche la propagation de l'événement au document
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
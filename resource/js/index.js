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

// Toggle hamburger menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav.nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
      hamburger.setAttribute(
        'aria-expanded',
        nav.classList.contains('open') ? 'true' : 'false'
      );
    });
  }
});
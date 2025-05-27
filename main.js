// Core functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('LunarGames initialized!');
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });
    }
});

// Add your existing JavaScript below

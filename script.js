window.addEventListener('DOMContentLoaded', (event) => {
    const nav = document.getElementById('main-nav');
    // Define the point where the navbar changes (e.g., 50 pixels from the top)
    const scrollThreshold = 50;

    // Function to handle scroll changes
    const handleScroll = () => {
        // Check if the user has scrolled past the threshold
        if (window.scrollY > scrollThreshold) {
            // Add the 'scrolled' class if not already present
            if (!nav.classList.contains('scrolled')) {
                nav.classList.add('scrolled');
            }
        } else {
            // Remove the 'scrolled' class if present
            if (nav.classList.contains('scrolled')) {
                nav.classList.remove('scrolled');
            }
        }
    };

    // Listen for scroll events on the window
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the page loads already scrolled
    handleScroll();
});
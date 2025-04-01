// Hamburger menu toggle
document.getElementById('mobile-menu').addEventListener('click', function() {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('active');
});

// Toggle between light and dark mode
document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

    sections.forEach((section) => {
        observer.observe(section);
    });
});

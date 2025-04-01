document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Load Dark Mode Preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeToggle.innerText = "☀️";
    }

    // Toggle Dark Mode
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            darkModeToggle.innerText = "☀️";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            darkModeToggle.innerText = "🌙";
        }
    });

    // Mobile Menu Toggle
    mobileMenu.addEventListener("click", function () {
        navList.classList.toggle("active");
    });

    // Scroll Animation
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    sections.forEach((section) => {
        observer.observe(section);
    });
});

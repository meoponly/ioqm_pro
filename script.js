document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scroll Logic
    const nav = document.getElementById('main-nav');

    window.addEventListener('scroll', () => {
        if (nav) {
            nav.classList.toggle('scrolled', window.scrollY > 40);
        }
    }, { passive: true });

    // 2. New Looping Typewriter Title Logic
    const titles = [
        "IOQM Pro - Minimalist Library",
        "Master Math Olympiads",
        "Curated PW Resources",
        "Start Learning Now!"
    ];
    
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    function typeLoop() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            // Remove a character
            document.title = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Faster when deleting
        } else {
            // Add a character
            document.title = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150;
        }

        // Logic to switch between typing and deleting
        if (!isDeleting && charIndex === currentTitle.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at the end of the full title
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length; // Move to next title
            typeSpeed = 500; // Pause before starting next title
        }

        setTimeout(typeLoop, typeSpeed);
    }

    typeLoop();
});

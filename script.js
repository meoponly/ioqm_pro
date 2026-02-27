document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scroll Logic
    const nav = document.getElementById('main-nav');

    window.addEventListener('scroll', () => {
        if (nav) {
            nav.classList.toggle('scrolled', window.scrollY > 40);
        }
    }, { passive: true });

    // 2. Original Typewriter Title Logic
    const fullTitle = "IOQM Pro - Minimalist Library";
    let index = 0;

    function typeWriter() {
        if (index <= fullTitle.length) {
            document.title = fullTitle.slice(0, index);
            index++;
            setTimeout(typeWriter, 150);
        }
    }

    typeWriter();
});

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');

    window.addEventListener('scroll', () => {
        if (nav) {
            nav.classList.toggle('scrolled', window.scrollY > 40);
        }
    }, { passive: true });
});
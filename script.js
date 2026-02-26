document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const cursor = document.getElementById('glass-cursor');
    let mX = 0, mY = 0, cX = 0, cY = 0;

    // Smooth Throttled Cursor Logic
    document.addEventListener('mousemove', (e) => {
        mX = e.clientX; 
        mY = e.clientY;
    }, { passive: true });

    function updateCursor() {
        cX += (mX - cX) * 0.15; // Smooth interpolation
        cY += (mY - cY) * 0.15;
        // Using translate3d triggers GPU acceleration for smoother movement
        cursor.style.transform = `translate3d(${cX}px, ${cY}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);

    // Optimized Scroll Handler
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // Unified Event Delegation for hover effects
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.hover-target, .card, .btn, .cta-btn')) {
            cursor.classList.add('cursor-hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.hover-target, .card, .btn, .cta-btn')) {
            cursor.classList.remove('cursor-hover');
        }
    });

    // Clean Transition: Remove skeletons after 1 second
    setTimeout(() => {
        document.querySelectorAll('.skeleton').forEach(el => el.classList.remove('skeleton'));
        document.body.classList.add('loaded');
    }, 1000);
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-item a');
    const focusableElements = [...navLinks, menuToggle];
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    function toggleMenu() {
        nav.classList.toggle('mobile-nav');
        menuToggle.classList.toggle('is-active');
    }

    menuToggle.addEventListener('click', toggleMenu);

    menuToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            toggleMenu();
        }
    });
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            nav.classList.remove('mobile-nav');
            menuToggle.classList.remove('is-active');
        });
    }); 

    window.addEventListener('resize', function() {
        if (window.innerWidth > 950) {
            nav.classList.remove('mobile-nav');
            menuToggle.classList.remove('is-active');
        }
    });

    document.addEventListener('keydown', function(e) {
        if (!nav.classList.contains('mobile-nav')) return;

        if (e.key === 'Escape') {
            nav.classList.remove('mobile-nav');
            menuToggle.classList.remove('is-active');
            menuToggle.focus();
            return;
        }

        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
});
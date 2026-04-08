/**
 * Portfolio Interactivity
 * Md. Adib Reza Nafi
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Intersection Observer for Scroll Animations
    // This looks for elements with the .reveal class and adds .active when they enter the viewport
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once it's revealed, we don't need to track it anymore
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15 // Triggers when 15% of the element is visible
    });

    document.querySelectorAll('.reveal').forEach(element => {
        revealObserver.observe(element);
    });


    // 2. Smooth Scrolling for Navigation
    // Makes clicking "Education" or "Work" slide down smoothly instead of jumping
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for the sticky navbar
                    behavior: 'smooth'
                });
            }
        });
    });


    // 3. Navbar Background Blur on Scroll
    // Adds a solid background to the navbar only after you start scrolling
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 12, 0.8)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.borderBottom = 'none';
        }
    });
});

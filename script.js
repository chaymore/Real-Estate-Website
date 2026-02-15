// SMOOTH SCROLLING - When you click a link, it smoothly scrolls instead of jumping
// This makes the website feel more professional and polished

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FORM SUBMISSION - Handles the contact form
// Right now this just prevents the page from reloading and shows a message
// Later you can connect this to an actual email service

document.querySelector('.contact-form form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the form data
    const formData = new FormData(this);
    
    // Show a success message (you'll customize this later)
    alert('Thank you for your message! Jenny will get back to you soon.');
    
    // Reset the form
    this.reset();
    
    // In the future, you would send this data to an email service here
    // For example, you could use EmailJS, Formspree, or your own backend
});

// NAVBAR SCROLL EFFECT - Changes navbar appearance when scrolling
// This makes the navbar look different when you scroll down the page

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    }
});

// MOBILE MENU TOGGLE - For future mobile navigation
// This will be useful when we add a hamburger menu for mobile devices

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// IMAGE LAZY LOADING - Makes images load only when visible
// This helps the page load faster, especially on slow connections

document.addEventListener('DOMContentLoaded', function() {
    // Add loading="lazy" to all images for better performance
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});

// ANIMATE ON SCROLL - Makes elements fade in as you scroll
// This creates a nice effect when viewing the page

function animateOnScroll() {
    const elements = document.querySelectorAll('.listing-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.listing-card, .testimonial-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

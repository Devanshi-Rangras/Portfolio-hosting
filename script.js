// Responsive Navigation Menu
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// Basic contact form submission handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formButton = this.querySelector('button[type="submit"]');
    const originalButtonText = formButton.textContent;

    // Simulate sending data
    formButton.textContent = 'Sending...';

    // In a real application, you would use fetch() to send this to a backend service
    // like Netlify Forms, Formspree, or your own server.
    setTimeout(() => {
        console.log('Form data:');
        for (var pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
        
        // Provide user feedback
        formButton.textContent = 'Message Sent!';
        formButton.style.backgroundColor = 'var(--accent-hover-color)';
        formButton.style.borderColor = 'var(--accent-hover-color)';
        formButton.style.color = 'var(--primary-bg)';


        // Reset form and button after a delay
        setTimeout(() => {
            this.reset();
            formButton.textContent = originalButtonText;
            formButton.style.backgroundColor = 'transparent';
            formButton.style.borderColor = 'var(--accent-color)';
            formButton.style.color = 'var(--accent-color)';

        }, 3000);

    }, 2000);
});
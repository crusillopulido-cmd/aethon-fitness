// script.js

// WhatsApp Integration
function openWhatsApp() {
    let message = "Hello, I am interested in Aethon Fitness!";
    let phoneNumber = "1234567890"; // Replace with actual phone number
    let url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(this);
    // Send form data to your server
    fetch('/submit-form', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active'); // Toggle menu visibility
});

// Scroll Animations
const scrollElements = document.querySelectorAll('.scroll-animation');

function elementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top >= 0) && (rect.bottom <= window.innerHeight);
}

function animateOnScroll() {
    scrollElements.forEach(element => {
        if (elementInViewport(element)) {
            element.classList.add('visible'); // Add visible class for animation
        } else {
            element.classList.remove('visible'); // Remove class if not in view
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); // Check on page load

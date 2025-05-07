// Global JavaScript can go here
console.log("Global script loaded");

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact-form'); // Assuming you have a form with this ID

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;
            const nameInput = document.querySelector('#name');
            const emailInput = document.querySelector('#email');
            const messageInput = document.querySelector('#message');

            if (nameInput && nameInput.value.trim() === '') {
                alert('Please enter your name.');
                isValid = false;
            }

            if (emailInput && emailInput.value.trim() === '') {
                alert('Please enter your email address.');
                isValid = false;
            } else if (emailInput && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                alert('Please enter a valid email address.');
                isValid = false;
            }

            if (messageInput && messageInput.value.trim() === '') {
                alert('Please enter your message.');
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }

    document.getElementById('learnMoreButton').addEventListener('click', () => {
        window.location.href = 'projects.html'; // Navigate to the Projects page
    });
});
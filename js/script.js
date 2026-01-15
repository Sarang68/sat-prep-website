// Y2 Academy Parsippany - Main JavaScript
// ==========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    initMobileMenu();

    // Back to Top Button
    initBackToTop();

    // Smooth Scrolling
    initSmoothScrolling();

    // Form Validation
    initFormValidation();

    // Add animation on scroll
    initScrollAnimations();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const hamburger = this.querySelector('.hamburger');
            if (hamburger) {
                hamburger.classList.toggle('active');
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const hamburger = menuToggle.querySelector('.hamburger');
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                const hamburger = menuToggle.querySelector('.hamburger');
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
            }
        });
    }
}

/**
 * Back to Top Button
 */
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Scroll to top when clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScrolling() {
    // Select all links with hashes
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Don't prevent default if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const offsetTop = target.offsetTop - 80; // Account for fixed header

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Form Validation
 */
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Reset previous messages
            hideFormMessages();

            // Validate form
            if (validateForm(this)) {
                // Show success message
                showSuccessMessage();

                // Reset form
                this.reset();

                // In a real implementation, you would send the form data to a server here
                // Example: sendFormData(formData);
            } else {
                // Show error message
                showErrorMessage();
            }
        });

        // Real-time validation for email
        const emailInput = contactForm.querySelector('#email');
        if (emailInput) {
            emailInput.addEventListener('blur', function() {
                validateEmail(this);
            });
        }

        // Real-time validation for phone
        const phoneInput = contactForm.querySelector('#phone');
        if (phoneInput) {
            phoneInput.addEventListener('blur', function() {
                validatePhone(this);
            });
        }
    }
}

/**
 * Validate Form Fields
 */
function validateForm(form) {
    let isValid = true;

    // Get form fields
    const firstName = form.querySelector('#firstName');
    const lastName = form.querySelector('#lastName');
    const email = form.querySelector('#email');
    const phone = form.querySelector('#phone');
    const message = form.querySelector('#message');

    // Validate first name
    if (!firstName || firstName.value.trim() === '') {
        markFieldInvalid(firstName);
        isValid = false;
    } else {
        markFieldValid(firstName);
    }

    // Validate last name
    if (!lastName || lastName.value.trim() === '') {
        markFieldInvalid(lastName);
        isValid = false;
    } else {
        markFieldValid(lastName);
    }

    // Validate email
    if (!email || !validateEmail(email)) {
        isValid = false;
    }

    // Validate phone
    if (!phone || !validatePhone(phone)) {
        isValid = false;
    }

    // Validate message
    if (!message || message.value.trim() === '') {
        markFieldInvalid(message);
        isValid = false;
    } else {
        markFieldValid(message);
    }

    return isValid;
}

/**
 * Validate Email Field
 */
function validateEmail(emailField) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = emailField.value.trim();

    if (value === '' || !emailRegex.test(value)) {
        markFieldInvalid(emailField);
        return false;
    } else {
        markFieldValid(emailField);
        return true;
    }
}

/**
 * Validate Phone Field
 */
function validatePhone(phoneField) {
    // Basic phone validation - accepts various formats
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
    const value = phoneField.value.trim();

    if (value === '' || !phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
        markFieldInvalid(phoneField);
        return false;
    } else {
        markFieldValid(phoneField);
        return true;
    }
}

/**
 * Mark Field as Invalid
 */
function markFieldInvalid(field) {
    if (field) {
        field.style.borderColor = '#ef4444';
    }
}

/**
 * Mark Field as Valid
 */
function markFieldValid(field) {
    if (field) {
        field.style.borderColor = '#10b981';
    }
}

/**
 * Show Success Message
 */
function showSuccessMessage() {
    const successMessage = document.getElementById('formSuccess');
    if (successMessage) {
        successMessage.style.display = 'block';

        // Scroll to message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Hide after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
}

/**
 * Show Error Message
 */
function showErrorMessage() {
    const errorMessage = document.getElementById('formError');
    if (errorMessage) {
        errorMessage.style.display = 'block';

        // Scroll to message
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Hide after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
}

/**
 * Hide Form Messages
 */
function hideFormMessages() {
    const successMessage = document.getElementById('formSuccess');
    const errorMessage = document.getElementById('formError');

    if (successMessage) successMessage.style.display = 'none';
    if (errorMessage) errorMessage.style.display = 'none';
}

/**
 * Initialize Scroll Animations
 */
function initScrollAnimations() {
    // Add fade-in animation to elements as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with animation
    const animatedElements = document.querySelectorAll('.course-card, .benefit-item, .testimonial-card, .value-card, .contact-card, .faq-item');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * WhatsApp Click Handler (Optional)
 */
function initWhatsAppHandlers() {
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');

    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Track WhatsApp clicks (if using analytics)
            console.log('WhatsApp link clicked');
            // Example: gtag('event', 'click', { event_category: 'Contact', event_label: 'WhatsApp' });
        });
    });
}

/**
 * Phone Click Handler (Optional)
 */
function initPhoneHandlers() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Track phone clicks (if using analytics)
            console.log('Phone link clicked');
            // Example: gtag('event', 'click', { event_category: 'Contact', event_label: 'Phone' });
        });
    });
}

/**
 * Calendly Click Handler (Optional)
 */
function initCalendlyHandlers() {
    const calendlyLinks = document.querySelectorAll('a[href*="calendly.com"]');

    calendlyLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Track Calendly clicks (if using analytics)
            console.log('Calendly link clicked');
            // Example: gtag('event', 'click', { event_category: 'Booking', event_label: 'Calendly' });
        });
    });
}

/**
 * Add Active Class to Current Nav Item
 */
function highlightCurrentPage() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;

        if (currentLocation === linkPath ||
            (currentLocation === '/' && linkPath.includes('index.html')) ||
            (currentLocation.endsWith('/') && linkPath.includes('index.html'))) {
            link.classList.add('active');
        }
    });
}

// Call highlight function
highlightCurrentPage();

// Optional: Initialize tracking handlers
// Uncomment these if you want to track user interactions
// initWhatsAppHandlers();
// initPhoneHandlers();
// initCalendlyHandlers();

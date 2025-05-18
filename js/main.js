/**
 * Main JavaScript file for all pages
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    handleNavbarScroll();
    
    // Handle contact form if it exists
    initContactForm();
    
    // Initialize category filters if they exist
    initCategoryFilters();
});

/**
 * Handles the navbar color change on scroll
 */
function handleNavbarScroll() {
    const nav = document.querySelector('nav');
    
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            } else {
                nav.style.backgroundColor = '#000';
            }
        });
    }
}

/**
 * Initialize the contact form with validation and submission handling
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            if (!name.value.trim()) {
                highlightInvalidField(name);
                isValid = false;
            } else {
                removeInvalidHighlight(name);
            }
            
            if (!isValidEmail(email.value)) {
                highlightInvalidField(email);
                isValid = false;
            } else {
                removeInvalidHighlight(email);
            }
            
            if (!message.value.trim()) {
                highlightInvalidField(message);
                isValid = false;
            } else {
                removeInvalidHighlight(message);
            }
            
            if (isValid) {
                // For GitHub Pages, you'd typically use a third-party service like Formspree
                // This is just a placeholder for form submission
                alert('Thank you for your message! This is a demo form - in a real implementation, your message would be sent.');
                contactForm.reset();
            }
        });
    }
}

/**
 * Validates email format
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Highlights invalid form fields
 * @param {HTMLElement} field - The field to highlight
 */
function highlightInvalidField(field) {
    field.style.borderColor = 'red';
    
    // Add error message if it doesn't exist yet
    const parentElement = field.parentElement;
    if (!parentElement.querySelector('.error-message')) {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.style.color = 'red';
        errorMessage.style.fontSize = '0.8rem';
        errorMessage.style.marginTop = '0.3rem';
        errorMessage.textContent = 'This field is required';
        
        if (field.id === 'email' && field.value.trim() !== '') {
            errorMessage.textContent = 'Please enter a valid email address';
        }
        
        parentElement.appendChild(errorMessage);
    }
}

/**
 * Removes highlighting from previously invalid fields
 * @param {HTMLElement} field - The field to un-highlight
 */
function removeInvalidHighlight(field) {
    field.style.borderColor = '#000';
    
    // Remove error message if it exists
    const parentElement = field.parentElement;
    const errorMessage = parentElement.querySelector('.error-message');
    if (errorMessage) {
        parentElement.removeChild(errorMessage);
    }
}

/**
 * Initialize category filters on blog or projects pages
 */
function initCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-filter');
    
    if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Filter items based on category
                const category = button.textContent.toLowerCase();
                filterItems(category);
            });
        });
    }
}

/**
 * Filter blog posts or projects based on category
 * @param {string} category - The category to filter by
 */
function filterItems(category) {
    // Get all blog posts or projects
    const items = document.querySelectorAll('.blog-post, .project-card');
    
    if (items.length === 0) return;
    
    // Show all items if 'all' category is selected
    if (category === 'all') {
        items.forEach(item => {
            item.style.display = 'block';
            
            // Handle grid items differently
            if (item.classList.contains('project-card')) {
                item.style.display = 'flex';
            }
        });
        return;
    }
    
    // Filter items based on tags
    items.forEach(item => {
        const tags = item.querySelectorAll('.blog-tag, .project-tag');
        let hasCategory = false;
        
        tags.forEach(tag => {
            if (tag.textContent.toLowerCase().includes(category)) {
                hasCategory = true;
            }
        });
        
        // Show/hide based on whether item has category
        if (hasCategory) {
            item.style.display = 'block';
            
            // Handle grid items differently
            if (item.classList.contains('project-card')) {
                item.style.display = 'flex';
            }
        } else {
            item.style.display = 'none';
        }
    });
}

/**
 * Smooth scrolling for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});
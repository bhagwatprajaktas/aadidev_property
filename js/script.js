// Highlight active navigation link based on current page
function highlightActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        // Match the current page with the link href
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Run on page load
document.addEventListener('DOMContentLoaded', highlightActiveLink);

// Menu toggle for mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
    // Close menu when a nav link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('open');
    }));
}

// Tabs on projects page
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    if (tabButtons.length) {
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-tab');

                // Toggle active button
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Show associated panel
                tabPanels.forEach(panel => {
                    if (panel.id === target) {
                        panel.classList.add('active');
                    } else {
                        panel.classList.remove('active');
                    }
                });
            });
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Button functionality
const ctaBtn = document.querySelector('.cta-button');
if (ctaBtn) {
    ctaBtn.addEventListener('click', function() {
        document.getElementById('projects').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Inquiry Form submission
const inquiryForm = document.getElementById('inquiryForm');
if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Get form values
        const formData = new FormData();
        formData.append('name', document.getElementById('name').value);
        formData.append('email', document.getElementById('email').value);
        formData.append('phone', document.getElementById('phone').value);
        formData.append('project', document.getElementById('project').value);
        formData.append('message', document.getElementById('message').value);
        
        // Replace 'YOUR_SCRIPT_URL_HERE' with your actual Google Apps Script URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbymG2olGiqcLXUn5z8vsHgRKsHAxuoYD3CwtojHwCZt-KPp4xQT3IyCvRBmipiPaWTeZA/exec';
        
        fetch(scriptURL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        })
        .then(response => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            alert('Thank you for your inquiry! We will contact you shortly with information about our premium properties.');
            this.reset();
        })
        .catch(error => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            console.error('Error!', error.message);
            alert('There was an error sending your inquiry. Please try again or contact us directly at bhagwatprajaktas@gmail.com');
        });
    });
}

// Active navigation link highlighting on scroll
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
});


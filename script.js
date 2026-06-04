// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Search button interaction
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    alert('Search functionality coming soon!');
});

// Newsletter button interaction
const newsletterBtn = document.querySelector('.newsletter-btn');
newsletterBtn.addEventListener('click', () => {
    const form = document.querySelector('.newsletter-form');
    form.scrollIntoView({ behavior: 'smooth' });
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('.newsletter-input');
    if (input.value) {
        alert(`Thank you for subscribing with ${input.value}! Check your inbox for exclusive content.`);
        input.value = '';
    }
});

// Event button interactions
const eventBtns = document.querySelectorAll('.event-btn');
eventBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Event details page coming soon!');
    });
});

// Story card interactions
const storyCards = document.querySelectorAll('.story-card');
storyCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.story-title').textContent;
        alert(`Opening: ${title}`);
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in effect
const sections = document.querySelectorAll('.section-container, .newsletter-container, .footer');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Video card play button interactions
const videoCards = document.querySelectorAll('.video-card');
videoCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.video-title').textContent;
        alert(`Playing: ${title}`);
    });
});

// Floating animation for category tags
const tags = document.querySelectorAll('.tag');
tags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.5}s`;
});

// Scroll reveal for cards
const revealCards = document.querySelectorAll('.story-card, .event-card, .original-card, .secondary-news, .video-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(card);
});

// Interactive newsletter preview
const newsletterInput = document.querySelector('.newsletter-input');
if (newsletterInput) {
    newsletterInput.addEventListener('focus', () => {
        newsletterInput.style.transform = 'scale(1.02)';
    });
    
    newsletterInput.addEventListener('blur', () => {
        newsletterInput.style.transform = 'scale(1)';
    });
}

// Mobile menu handling
const navMenu = document.querySelector('.nav-menu');
if (navMenu) {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.nav-menu a')) {
            // Close menu on mobile if needed
            if (window.innerWidth < 768) {
                navMenu.style.maxHeight = '0';
            }
        }
    });
}

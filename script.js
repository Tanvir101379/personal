// ==========================================
// MODERN PORTFOLIO - INTERACTIVE FEATURES
// ==========================================

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking nav links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Scroll indicator click
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.stat, .skill-group, .project-card, .contact-box, .experience-card').forEach(el => {
    el.style.opacity = '0';
    el.style.animation = 'fadeIn 0.6s ease-out forwards';
    observer.observe(el);
});

// Stagger animation delays
document.querySelectorAll('.stat').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.skill-group').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.project-card').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.contact-box').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
});

// Dynamic navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(99, 102, 241, 0.3)';
        navbar.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.1)';
    } else {
        navbar.style.borderBottomColor = 'var(--border)';
        navbar.style.boxShadow = 'none';
    }
});

// Add active state to nav links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'var(--text-secondary)';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary)';
        }
    });
});

// Random blob animation speeds
document.querySelectorAll('.blob').forEach(blob => {
    const duration = Math.random() * 4 + 8;
    const delay = Math.random() * 2;
    blob.style.animationDuration = `${duration}s`;
    blob.style.animationDelay = `${delay}s`;
});

console.log('🚀 Portfolio loaded successfully!');

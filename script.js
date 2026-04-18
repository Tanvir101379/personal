// ========================================
// DARK MODE TOGGLE
// ========================================

class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        // Set initial theme
        this.setTheme(this.theme);
        
        // Add event listener
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    setTheme(theme) {
        this.theme = theme;
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        this.animateToggle();
    }

    animateToggle() {
        if (this.themeToggle) {
            this.themeToggle.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.themeToggle.style.transform = '';
            }, 300);
        }
    }
}

// ========================================
// MOBILE MENU
// ========================================

class MobileMenu {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.navLinks = document.querySelector('.nav-links');
        this.navItems = document.querySelectorAll('.nav-links a');
        this.init();
    }

    init() {
        if (this.menuToggle) {
            this.menuToggle.addEventListener('click', () => this.toggleMenu());
        }

        // Close menu when a link is clicked
        this.navItems.forEach(item => {
            item.addEventListener('click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-actions') && !e.target.closest('.nav-links')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.navLinks.classList.toggle('active');
        this.menuToggle.classList.toggle('active');
    }

    closeMenu() {
        this.navLinks.classList.remove('active');
        this.menuToggle.classList.remove('active');
    }
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Add scroll-animate class to elements
        const elements = document.querySelectorAll(
            '.stat-card, .skill-category, .project-card, .contact-card, .timeline-item'
        );
        
        elements.forEach(el => {
            el.classList.add('scroll-animate');
        });

        // Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => observer.observe(el));
    }
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

class NavbarScroll {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            this.navbar.style.boxShadow = 'none';
        }
    }
}

// ========================================
// SMOOTH SCROLL TO SECTIONS
// ========================================

class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ========================================
// COUNTERS (for stats)
// ========================================

class CounterAnimation {
    constructor() {
        this.init();
    }

    init() {
        const statNumbers = document.querySelectorAll('.stat-number');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    this.animateCounter(entry.target);
                    entry.target.dataset.animated = 'true';
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(num => observer.observe(num));
    }

    animateCounter(element) {
        const target = parseInt(element.textContent.match(/\d+/)[0]);
        const duration = 1500;
        const increment = target / (duration / 50);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = element.textContent.replace(/\d+/, target);
                clearInterval(timer);
            } else {
                const displayValue = Math.floor(current);
                element.textContent = element.textContent.replace(/\d+/, displayValue);
            }
        }, 50);
    }
}

// ========================================
// FORM VALIDATION
// ========================================

class FormValidation {
    constructor() {
        this.init();
    }

    init() {
        // Add event listeners to contact forms if they exist
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleSubmit(e));
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted');
        // Add your form handling logic here
    }
}

// ========================================
// PARALLAX EFFECT (subtle)
// ========================================

class ParallaxEffect {
    constructor() {
        this.hero = document.querySelector('.hero');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        if (this.hero) {
            const scrolled = window.scrollY;
            const speed = 0.5;
            this.hero.style.backgroundPosition = `center ${scrolled * speed}px`;
        }
    }
}

// ========================================
// KEYBOARD NAVIGATION
// ========================================

class KeyboardNav {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('keydown', (e) => {
            // ESC to close mobile menu
            if (e.key === 'Escape') {
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu?.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }

            // Number keys for quick navigation (e.g., 1=Home, 2=About, etc.)
            if (e.altKey) {
                switch (e.key) {
                    case '1':
                        window.location.hash = 'hero';
                        break;
                    case '2':
                        window.location.hash = 'about';
                        break;
                    case '3':
                        window.location.hash = 'skills';
                        break;
                    case '4':
                        window.location.hash = 'experience';
                        break;
                    case '5':
                        window.location.hash = 'projects';
                        break;
                    case '6':
                        window.location.hash = 'contact';
                        break;
                }
            }
        });
    }
}

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

class LazyLoading {
    constructor() {
        this.init();
    }

    init() {
        // Lazy load images
        const images = document.querySelectorAll('img');
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }
}

// ========================================
// ANALYTICS & TRACKING (commented for GDPR)
// ========================================

class Analytics {
    constructor() {
        // Uncomment and configure your analytics here
        // this.trackPageView();
        // this.trackEvents();
    }

    trackPageView() {
        // Add your analytics code here
    }

    trackEvents() {
        // Track button clicks, form submissions, etc.
    }
}

// ========================================
// UTILITIES
// ========================================

class Utils {
    // Debounce function
    static debounce(func, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // Throttle function
    static throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Check if element is in viewport
    static isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully');

    // Initialize all components
    new ThemeManager();
    new MobileMenu();
    new ScrollAnimations();
    new NavbarScroll();
    new SmoothScroll();
    new CounterAnimation();
    new FormValidation();
    new ParallexEffect();
    new KeyboardNav();
    new LazyLoading();
    new Analytics();

    // Log keyboard shortcuts
    console.log('🎹 Keyboard Shortcuts:');
    console.log('Alt+1: Home');
    console.log('Alt+2: About');
    console.log('Alt+3: Skills');
    console.log('Alt+4: Experience');
    console.log('Alt+5: Projects');
    console.log('Alt+6: Contact');
});

// Performance monitoring
window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page load time: ${pageLoadTime}ms`);
});

// Service Worker (optional PWA support)
if ('serviceWorker' in navigator) {
    // window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/sw.js');
    // });
}

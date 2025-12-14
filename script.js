// ============================================
// PORTFOLIO WEBSITE - JAVASCRIPT
// ============================================

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// Smooth Scrolling Enhancement
// ============================================

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

// ============================================
// Navbar Background on Scroll
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    }
});

// ============================================
// Intersection Observer for Animation
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.6s ease forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and skill categories
document.querySelectorAll('.project-card, .skill-category, .contact-item').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
});

// ============================================
// Counting Animation for Statistics
// ============================================

function animateNumbers() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const targetValue = parseInt(stat.textContent);
        let currentValue = 0;
        const increment = Math.ceil(targetValue / 50);
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                stat.textContent = targetValue + (stat.textContent.includes('+') ? '+' : '');
                clearInterval(counter);
            } else {
                stat.textContent = currentValue;
            }
        }, 30);
    });
}

// Trigger counting animation when stats section is visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.quick-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes float-slow {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(-15px) rotate(2deg);
        }
    }

    @keyframes pulse-glow {
        0%, 100% {
            box-shadow: 0 0 10px rgba(37, 99, 235, 0.3);
        }
        50% {
            box-shadow: 0 0 25px rgba(37, 99, 235, 0.6);
        }
    }

    @keyframes bounce-in-out {
        0%, 100% {
            transform: translateX(0px);
        }
        50% {
            transform: translateX(8px);
        }
    }

    @keyframes slide-left {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    .stat-number {
        animation: pulse-glow 2s ease-in-out infinite;
        display: inline-block;
    }

    .project-card:hover {
        animation: bounce-in-out 0.6s ease-in-out;
    }

    .floating-box {
        animation: float-slow 4s ease-in-out infinite !important;
    }

    .tech-tag, .exp-tech-tag {
        transition: all 0.3s ease;
    }

    .tech-tag:hover, .exp-tech-tag:hover {
        animation: bounce-in-out 0.4s ease-in-out;
    }
`;
document.head.appendChild(style);

// ============================================
// Animated Background Particles
// ============================================

function createFloatingObjects() {
    const container = document.querySelector('.hero');
    if (!container) return;

    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 30 + 10}px;
            height: ${Math.random() * 30 + 10}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float-particle ${Math.random() * 10 + 15}s infinite ease-in-out;
            pointer-events: none;
            z-index: ${i};
        `;
        container.appendChild(particle);
    }
}

// Add particle animation keyframes
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float-particle {
        0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.05;
        }
        25% {
            transform: translateY(-50px) translateX(50px) scale(1.2);
            opacity: 0.1;
        }
        50% {
            transform: translateY(-100px) translateX(-30px) scale(0.8);
            opacity: 0.05;
        }
        75% {
            transform: translateY(-50px) translateX(-60px) scale(1.1);
            opacity: 0.08;
        }
    }
`;
document.head.appendChild(particleStyle);

createFloatingObjects();

// ============================================
// Active Navigation Link Highlight
// ============================================

function highlightNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.style.color = '';
            });
            // Add active style to current link
            if (navLink) {
                navLink.style.color = 'var(--primary-color)';
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ============================================
// Parallax Effect on Hero Section
// ============================================

const heroSection = document.querySelector('.hero');

if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
}

// ============================================
// Contact Form (if added in future)
// ============================================

// Function to send email via mailto
function sendEmail(event) {
    event.preventDefault();
    const email = 'ravikrishna170586@gmail.com';
    const subject = 'Portfolio Contact - Opportunity Discussion';
    const body = 'Hello Ravi,\n\nI am interested in discussing an opportunity with you.\n\nBest regards';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// ============================================
// Scroll to Top Button (Optional Enhancement)
// ============================================

function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.classList.add('scroll-to-top');
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        z-index: 999;
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
}

// Create scroll to top button on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createScrollToTopButton);
} else {
    createScrollToTopButton();
}

// ============================================
// Page Load Animation
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================================
// Prevent flash of unstyled content
// ============================================

if (document.readyState !== 'loading') {
    document.body.style.opacity = '1';
}

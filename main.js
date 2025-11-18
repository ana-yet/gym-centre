// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navBtn = document.querySelector('.nav-btn');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Create a mobile menu overlay if needed, or just toggle visibility
  // For simplicity in this setup, we'll toggle a class that we need to add styles for in CSS

  // Let's inject the mobile styles dynamically or assume they are handled.
  // Actually, I missed the mobile menu styles in CSS. I'll add them via JS or update CSS.
  // Let's add a simple mobile menu style injection for now to ensure it works without editing CSS again immediately.

  if (navLinks.classList.contains('active')) {
    Object.assign(navLinks.style, {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '80px',
      left: '0',
      width: '100%',
      background: '#050505',
      padding: '2rem',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    });
  } else {
    navLinks.style.display = '';
  }
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(5, 5, 5, 0.95)';
    navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
  } else {
    navbar.style.background = 'rgba(5, 5, 5, 0.8)';
    navbar.style.boxShadow = 'none';
  }
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu if open
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navLinks.style.display = '';
      }
    }
  });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply animations to sections
document.querySelectorAll('.section-title, .section-desc, .glass-card, .hero-content').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.8s ease-out';
  observer.observe(el);
});

// Schedule Tab Functionality
const scheduleTabs = document.querySelectorAll('.schedule-tab');
const scheduleDays = document.querySelectorAll('.schedule-day');

scheduleTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and days
    scheduleTabs.forEach(t => t.classList.remove('active'));
    scheduleDays.forEach(d => d.classList.remove('active'));

    // Add active class to clicked tab
    tab.classList.add('active');

    // Show corresponding day
    const dayId = tab.getAttribute('data-day');
    const dayElement = document.getElementById(dayId);
    if (dayElement) {
      dayElement.classList.add('active');
    }
  });
});


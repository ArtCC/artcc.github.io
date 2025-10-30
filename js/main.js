const typed = new Typed('.typing', {
  strings: [
    'Arturo. Hello, World!',
    'a freelance developer for Apple devices',
    'part-time indie game dev at home',
    'occasionally post development videos on Udemy and YouTube',
    'a scuba diver'
  ],
  loop: true,
  typeSpeed: 75,
  backSpeed: 75
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    if (this.classList.contains('skip-link')) {
      return;
    }

    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburgerButton && navMenu) {
  const navLinks = [...document.querySelectorAll('.nav-link')];

  hamburgerButton.addEventListener('click', () => {
    const isExpanded = hamburgerButton.classList.toggle('active');
    navMenu.classList.toggle('active');
    hamburgerButton.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerButton.classList.remove('active');
      navMenu.classList.remove('active');
      hamburgerButton.setAttribute('aria-expanded', 'false');
    });
  });
}

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) {
    return;
  }

  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

const currentYearEl = document.getElementById('current-year');
if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}
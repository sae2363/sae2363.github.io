/* ── Sticky nav shadow on scroll ── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* ── Hamburger mobile menu ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
}
function closeMobile() {
  if (hamburger) hamburger.classList.remove('open');
  if (mobileMenu) mobileMenu.classList.remove('open');
}

/* ── Scroll reveal ── */
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => entry.target.classList.add('visible'), idx * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
}

/* ── Active nav link highlight ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` || a.getAttribute('href') === `/#${current}`
      ? 'var(--accent)' : '';
  });
});

/* ── Contact form submit feedback ── */
const sendBtn = document.querySelector('.btn-send');
if (sendBtn) {
  sendBtn.addEventListener('click', function () {
    this.textContent = '✓ Sent!';
    this.style.background = '#16a34a';
    setTimeout(() => {
      this.textContent = 'Send Message →';
      this.style.background = '';
    }, 3000);
  });
}

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

// Reveal sections on scroll for a smooth modern effect
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((element) => observer.observe(element));

// Lightbox for medals gallery
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox?.querySelector('img');
const closeLightboxBtn = lightbox?.querySelector('.lightbox-close');

for (const trigger of document.querySelectorAll('[data-lightbox]')) {
  trigger.addEventListener('click', () => {
    const source = trigger.getAttribute('data-lightbox');
    if (!source || !lightbox || !lightboxImage) return;

    lightboxImage.src = source;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
  });
}

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
};

closeLightboxBtn?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

// Demo behavior for contact form submission
const contactForm = document.querySelector('.contact-form');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('تم إرسال رسالتك بنجاح! سيتم التواصل معك قريبًا.');
  contactForm.reset();
});
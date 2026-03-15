const cover = document.getElementById('cover');
const imageWrap = document.querySelector('.cover__image-wrap');
const overlay = document.querySelector('.cover__overlay');
const content = document.querySelector('.cover__content');

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const updateScrollEffect = () => {
  const maxDistance = window.innerHeight * 1.4;
  const progress = clamp(window.scrollY / maxDistance, 0, 1);

  // Stronger zoom range: noticeably zoomed in at start, then zooms out far beyond normal size.
  const startScale = 1.42;
  const endScale = 0.72;
  const scale = startScale - progress * (startScale - endScale);

  imageWrap.style.transform = `scale(${scale})`;
  imageWrap.style.filter = `brightness(${0.88 + progress * 0.12})`;
  overlay.style.opacity = String(0.62 - progress * 0.34);
  content.style.transform = `translateY(${progress * -34}px)`;
  content.style.opacity = String(1 - progress * 0.82);

  cover.style.marginBottom = `${progress * -26}vh`;
};

window.addEventListener('scroll', updateScrollEffect, { passive: true });
window.addEventListener('resize', updateScrollEffect);
updateScrollEffect();

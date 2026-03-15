const cover = document.getElementById('cover');
const imageWrap = document.querySelector('.cover__image-wrap');
const overlay = document.querySelector('.cover__overlay');
const content = document.querySelector('.cover__content');

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const updateScrollEffect = () => {
  const maxDistance = window.innerHeight * 1.05;
  const progress = clamp(window.scrollY / maxDistance, 0, 1);

  // Starts zoomed in and smoothly zooms out while user scrolls.
  const scale = 1.22 - progress * 0.22;
  const brightness = 0.9 + progress * 0.1;

  imageWrap.style.transform = `scale(${scale})`;
  imageWrap.style.filter = `brightness(${brightness})`;
  overlay.style.opacity = String(0.56 - progress * 0.26);
  content.style.transform = `translateY(${progress * -26}px)`;
  content.style.opacity = String(1 - progress * 0.75);

  cover.style.marginBottom = `${progress * -18}vh`;
};

window.addEventListener('scroll', updateScrollEffect, { passive: true });
window.addEventListener('resize', updateScrollEffect);
updateScrollEffect();

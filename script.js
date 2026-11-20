const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('is-open', !open);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  });
});

const controls = [...document.querySelectorAll('[data-video-toggle]')];

function videoFor(control) {
  return control.querySelector('video') || control.closest('.showreel')?.querySelector('video');
}

function start(control) {
  const video = videoFor(control);
  if (!video) return;
  if (!video.src) video.src = video.dataset.src;
  video.play().then(() => {
    video.classList.add('is-playing');
    control.classList.add('is-playing');
  }).catch(() => {});
}

function pause(control) {
  const video = videoFor(control);
  if (!video) return;
  video.pause();
  video.classList.remove('is-playing');
  control.classList.remove('is-playing');
}

controls.forEach((control) => {
  let pinned = false;
  const video = videoFor(control);
  const hoverArea = control.closest('.showreel') || control;

  hoverArea.addEventListener('pointerenter', (event) => {
    if (event.pointerType !== 'touch' && !reducedMotion.matches && !pinned) start(control);
  });

  hoverArea.addEventListener('pointerleave', () => {
    if (!pinned) pause(control);
  });

  control.addEventListener('click', () => {
    if (pinned) {
      pinned = false;
      control.setAttribute('aria-pressed', 'false');
      pause(control);
      return;
    }
    pinned = true;
    control.setAttribute('aria-pressed', 'true');
    start(control);
  });

  video.addEventListener('error', () => {
    video.classList.remove('is-playing');
    control.classList.remove('is-playing');
    pinned = false;
    control.setAttribute('aria-pressed', 'false');
  });
});

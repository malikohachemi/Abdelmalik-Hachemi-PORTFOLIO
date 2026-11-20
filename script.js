const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const videoDialog = document.querySelector('.video-dialog');
const videoPlayer = videoDialog.querySelector('video');
const videoError = videoDialog.querySelector('.video-error');

document.querySelector('#year').textContent = new Date().getFullYear();

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  });
});

document.querySelectorAll('[data-video]').forEach((button) => {
  button.addEventListener('click', () => {
    videoError.hidden = true;
    videoPlayer.src = button.dataset.video;
    videoDialog.showModal();
    videoPlayer.play().catch(() => {});
  });
});

videoPlayer.addEventListener('error', () => {
  videoError.hidden = false;
});

function closeVideo() {
  videoDialog.close();
  videoPlayer.pause();
  videoPlayer.removeAttribute('src');
  videoPlayer.load();
}

videoDialog.querySelector('.modal-close').addEventListener('click', closeVideo);
videoDialog.addEventListener('click', (event) => {
  if (event.target === videoDialog) closeVideo();
});
videoDialog.addEventListener('close', () => {
  videoPlayer.pause();
  videoPlayer.removeAttribute('src');
  videoPlayer.load();
});

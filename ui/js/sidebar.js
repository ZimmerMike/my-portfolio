const openButton = document.getElementById('open-nav');
const closeButton = document.getElementById('close-nav');
const navContainer = document.querySelector('.nav-container');
const overlay = document.getElementById('overlay');

openButton.addEventListener('click', () => {
    navContainer.classList.toggle('nav-visible');
    overlay.classList.toggle('overlay-visible');
});

closeButton.addEventListener('click', () => {
    navContainer.classList.remove('nav-visible');
    overlay.classList.remove('overlay-visible');
});

overlay.addEventListener('click', () => {
    navContainer.classList.remove('nav-visible');
    overlay.classList.remove('overlay-visible');
});
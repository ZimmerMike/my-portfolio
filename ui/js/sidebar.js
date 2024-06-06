const openButton = document.getElementById('open-nav');
const closeButton = document.getElementById('close-nav');
const navContainer = document.querySelector('.nav-container');

openButton.addEventListener('click', () => {
    navContainer.classList.toggle('nav-visible');
});

closeButton.addEventListener('click', () => {
    navContainer.classList.toggle('nav-visible');
});
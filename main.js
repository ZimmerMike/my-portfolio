document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeToggle = document.getElementById('theme-toggle');

    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme)) {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }
    const links = document.querySelectorAll('.navbar-item a');
    const sections = document.querySelectorAll('section');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            navContainer.classList.remove('nav-visible');
            overlay.classList.remove('overlay-visible');
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Intersection Observer to highlight active link
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const link = document.querySelector(`.navbar-item a[href='#${id}']`);
            if (entry.isIntersecting) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
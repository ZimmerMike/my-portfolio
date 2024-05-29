document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    for (const link of links) {
        link.addEventListener('click', function(event) {
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
        rootMargin: '0px',
        threshold: 0.3
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const link = document.querySelector(`.navbar a[href="#${id}"]`);
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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add('show1');
    } else {
        entry.target.classList.remove('show1');
    }
    });
    });
        
    const hiddenElements = document.querySelectorAll('.div');
    hiddenElements.forEach((el) => observer.observe(el));
        document.addEventListener("DOMContentLoaded", (event) => {
         gsap.registerPlugin(ScrollTrigger)
    });

    gsap.to('.div', {
        y: 50, 
        scrollTrigger: {
            trigger: '.Scroll1',
            scrub: true,
    }
    })
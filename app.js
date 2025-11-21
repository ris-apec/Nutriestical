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
        y: -50, 
        scrollTrigger: {
            trigger: '.Scroll1',
            scrub: true,
    }
    })

    /* 2 */

    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
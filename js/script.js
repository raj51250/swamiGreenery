document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('animate__fadeInDown');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('animate__fadeInDown');
        }
    });
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('[data-animate]');
    
    const animateOnScroll = function() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = (windowTopPosition + windowHeight);
        
        animateElements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = (elementTopPosition + elementHeight);
            
            // Check if element is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                const delay = element.getAttribute('data-delay') || 0;
                
                setTimeout(() => {
                    element.classList.add('animate');
                }, delay);
            }
        });
    };
    
    // Initialize animation on load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Add hover effect to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-lg');
            nav.classList.add('py-3');
            nav.classList.remove('py-4');
        } else {
            nav.classList.remove('shadow-lg');
            nav.classList.remove('py-3');
            nav.classList.add('py-4');
        }
    });
});



//Images Slider JS :

  document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? "1" : "0";
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("bg-white", i === index);
        dot.classList.toggle("bg-white/50", i !== index);
      });
      currentIndex = index;
    }

    function autoSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
    let slideInterval = setInterval(autoSlide, 3000);

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        clearInterval(slideInterval);
        showSlide(i);
        slideInterval = setInterval(autoSlide, 3000);
      });
    });

    showSlide(currentIndex);
  });


  // Simple menu toggle functionality
  document.getElementById('menuBtn').addEventListener('click', function() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
  });



//Qoute Slider :
document.addEventListener('DOMContentLoaded', () => {
        const slides = document.querySelectorAll('.quote-slide');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                    slide.classList.remove('exiting');
                } else if (slide.classList.contains('active')) {
                    slide.classList.add('exiting');
                    slide.classList.remove('active');
                    setTimeout(() => {
                        slide.classList.remove('exiting');
                    }, 500); // Match transition duration
                } else {
                    slide.classList.remove('active', 'exiting');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        showSlide(currentSlide);
        setInterval(nextSlide, 4000); // Change slide every 3 seconds
    });


    ///new :
    document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('[data-animate]');
    
    const animateOnScroll = function() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = (windowTopPosition + windowHeight);
        
        animateElements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = (elementTopPosition + elementHeight);
            
            // Check if element is within viewport
            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)) {
                const delay = element.getAttribute('data-delay') || 0;
                
                setTimeout(() => {
                    element.classList.add('animate');
                }, delay);
            }
        });
    };
    
    // Initialize animation on load
    if (animateElements.length > 0) {
        animateOnScroll();
        window.addEventListener('scroll', animateOnScroll);
    }
    
    // FAQ Accordion functionality
    const faqButtons = document.querySelectorAll('.faq-button');
    
    if (faqButtons.length > 0) {
        faqButtons.forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const isActive = content.classList.contains('active');
                
                // Close all FAQ items
                document.querySelectorAll('.faq-content').forEach(item => {
                    item.classList.remove('active');
                });
                
                document.querySelectorAll('.faq-button i').forEach(icon => {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    content.classList.add('active');
                    button.querySelector('i').classList.remove('fa-chevron-down');
                    button.querySelector('i').classList.add('fa-chevron-up');
                }
            });
        });
    }
    
    // Add scroll effect to navbar
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg', 'py-3');
                nav.classList.remove('py-4');
            } else {
                nav.classList.remove('shadow-lg', 'py-3');
                nav.classList.add('py-4');
            }
        });
    }
});
// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // CTA button click handlers
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add your signup/registration logic here
            console.log('CTA button clicked - Start Winning!');
        });
    });

    // Feature card interactions
    const featureCards = document.querySelectorAll('.feature-card');
    const howItWorksTitle = document.querySelector('.how-it-works-title');
    const howItWorksDesc = document.querySelector('.how-it-works-description');
    const howItWorksImages = document.querySelectorAll('.how-it-works-visual img');
    featureCards.forEach((card) => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            featureCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            this.classList.add('active');
            // Update text
            howItWorksTitle.textContent = this.getAttribute('data-title');
            howItWorksDesc.textContent = this.getAttribute('data-description');
            // Update image
            const feature = this.getAttribute('data-image');
            howItWorksImages.forEach(img => {
                if (img.getAttribute('data-feature') === feature) {
                    img.style.display = '';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });

    // Swipe indicator animation
    const swipeLines = document.querySelectorAll('.features .swipe-line');
    let currentActive = 0;

    function updateSwipeIndicator() {
        swipeLines.forEach((line, index) => {
            line.classList.toggle('active', index === currentActive);
        });
        currentActive = (currentActive + 1) % swipeLines.length;
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.hero-content, .features-card, .feature-card, .review-card, .community-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Review card hover effects
    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(188, 251, 2, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Star rating animation
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', function() {
            // Highlight stars up to this one
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.style.transform = 'scale(1.2)';
                    s.style.color = '#bcfb02';
                }
            });
        });

        star.addEventListener('mouseleave', function() {
            // Reset all stars
            stars.forEach(s => {
                s.style.transform = 'scale(1)';
                s.style.color = '#bcfb02';
            });
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(18, 18, 18, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#121212';
            header.style.backdropFilter = 'none';
        }

        lastScrollTop = scrollTop;
    });

    // Loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.innerHTML = '☰';
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.style.display = 'none';
    
    const nav = document.querySelector('.nav');
    const headerContent = document.querySelector('.header-content');
    
    // Add mobile menu toggle for small screens
    if (window.innerWidth <= 768) {
        mobileMenuToggle.style.display = 'block';
        headerContent.insertBefore(mobileMenuToggle, nav);
        
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('mobile-open');
        });
    }

    // Add CSS for mobile menu
    const mobileMenuCSS = `
        .mobile-menu-toggle {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 10px;
        }
        
        @media (max-width: 768px) {
            .nav {
                display: none;
            }
            
            .nav.mobile-open {
                display: flex;
                flex-direction: column;
                gap: 15px;
                margin-top: 20px;
            }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = mobileMenuCSS;
    document.head.appendChild(style);

    // Features carousel card data
    const featuresCardData = [
        {
            class: 'features-card features-card-green',
            title: 'FIND HIGH VALUE PROPS INSTANTLY',
            desc: 'Our AI scans 1000s of bets daily to surface the smartest picks - ranked by matchup data, performance trends, and statistical edge.',
            gif: "images/discover.gif"
        },
        {
            class: 'features-card features-card-purple',
            title: 'BUILD + TRACK WINNINGS',
            desc: 'Stack AI-vetted props into high-upside parlays and monitor your potential multipliers - all in one clean, organized dashboard.',
            gif: "images/parlay.gif"
        },
        {
            class: 'features-card features-card-red',
            title: 'KNOW THE WHY BEFORE YOU BET',
            desc: 'Every pick comes with a confidence score and quick rationale. Injury status, trends, and matchup context - broken down in seconds.',
            gif: "images/beteval.gif"
        }
    ];
    const featuresCarousel = document.querySelector('.features-carousel');

    let currentFeature = 0;

    function renderFeatureCard(idx) {
        const card = featuresCardData[idx];
        featuresCarousel.innerHTML = `
            <div class="${card.class} active" data-card-index="${idx}">
                <div class="features-content">
                    <h2 class="features-title">${card.title}</h2>
                    <p class="features-description">${card.desc}</p>
                </div>
                <div class="features-visual">
                    <img src="${card.gif}" alt="${card.title}" class="features-animation-gif" />
                </div>
            </div>
        `;
    }

    // Initial render
    renderFeatureCard(currentFeature);

    function showFeatureCard(idx) {
        currentFeature = idx;
        renderFeatureCard(idx);
        swipeLines.forEach((line, i) => {
            line.classList.toggle('active', i === idx);
        });
        // Arrow visibility logic
        if (leftArrow && rightArrow) {
            if (idx === 0) {
                leftArrow.style.display = 'none';
                rightArrow.style.display = '';
            } else if (idx === featuresCardData.length - 1) {
                leftArrow.style.display = '';
                rightArrow.style.display = 'none';
            } else {
                leftArrow.style.display = '';
                rightArrow.style.display = '';
            }
        }
    }

    // Touch events for mobile
    let startX = 0;
    let isDragging = false;

    const carousel = document.querySelector('.features-carousel');
    if (carousel) {
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        carousel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const diff = e.touches[0].clientX - startX;
            if (Math.abs(diff) > 50) {
                if (diff < 0 && currentFeature < featuresCardData.length - 1) {
                    showFeatureCard(currentFeature + 1);
                } else if (diff > 0 && currentFeature > 0) {
                    showFeatureCard(currentFeature - 1);
                }
                isDragging = false;
            }
        });
        carousel.addEventListener('touchend', () => {
            isDragging = false;
        });

        // Mouse drag for desktop
        let mouseDown = false;
        let mouseStartX = 0;
        carousel.addEventListener('mousedown', (e) => {
            mouseDown = true;
            mouseStartX = e.clientX;
        });
        carousel.addEventListener('mousemove', (e) => {
            if (!mouseDown) return;
            const diff = e.clientX - mouseStartX;
            if (Math.abs(diff) > 50) {
                if (diff < 0 && currentFeature < featuresCardData.length - 1) {
                    showFeatureCard(currentFeature + 1);
                } else if (diff > 0 && currentFeature > 0) {
                    showFeatureCard(currentFeature - 1);
                }
                mouseDown = false;
            }
        });
        carousel.addEventListener('mouseup', () => {
            mouseDown = false;
        });
        carousel.addEventListener('mouseleave', () => {
            mouseDown = false;
        });
    }

    // Arrow navigation for features carousel
    const leftArrow = document.querySelector('.features-arrow.left');
    const rightArrow = document.querySelector('.features-arrow.right');
    if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => {
            if (currentFeature > 0) {
                showFeatureCard(currentFeature - 1);
            } else {
                showFeatureCard(featuresCardData.length - 1);
            }
        });
        rightArrow.addEventListener('click', () => {
            if (currentFeature < featuresCardData.length - 1) {
                showFeatureCard(currentFeature + 1);
            } else {
                showFeatureCard(0);
            }
        });
    }
});
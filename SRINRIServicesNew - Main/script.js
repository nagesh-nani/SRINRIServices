// Service data for modals
const serviceData = {
    1: {
        title: "Meet & Greet at Aircraft Door",
        icon: "fas fa-plane-arrival",
        content: `
            <p>Our Meet & Greet service ensures that you are personally welcomed right at the aircraft door after a long flight. Our representative will be waiting with a personalized name board, making your arrival smooth and hassle-free.</p>
            <h4>What's Included:</h4>
            <ul>
                <li>Personalized welcome at the aircraft door</li>
                <li>Assistance with immigration formalities</li>
                <li>Help with baggage collection</li>
                <li>Customs clearance assistance</li>
                <li>Escort to your transportation</li>
            </ul>
            <p>This service is especially valuable for elderly passengers, families with children, or first-time visitors to India who may find airport procedures confusing.</p>
        `
    },
    2: {
        title: "Porter Assistance",
        icon: "fas fa-luggage-cart",
        content: `
            <p>Let us handle all your luggage worries with our dedicated porter service. Our trained staff will take care of your baggage from the aircraft to your vehicle, ensuring a seamless experience.</p>
            <h4>What's Included:</h4>
            <ul>
                <li>Luggage collection from baggage claim</li>
                <li>Assistance with heavy or multiple bags</li>
                <li>Loading into your vehicle</li>
                <li>Coordination with airport staff</li>
                <li>Special handling for fragile items</li>
            </ul>
            <p>Our porters are trained to handle all types of luggage with care and efficiency, making your arrival experience completely stress-free.</p>
        `
    },
    3: {
        title: "Seamless Travel to Your Hometown",
        icon: "fas fa-car",
        content: `
            <p>Enjoy a hassle-free journey from the airport all the way to your native place or town with our reliable transportation services. We ensure comfortable and safe travel to your destination.</p>
            <h4>What's Included:</h4>
            <ul>
                <li>Comfortable, air-conditioned vehicles</li>
                <li>Experienced, verified drivers</li>
                <li>Real-time journey updates</li>
                <li>Flexible scheduling</li>
                <li>Multiple vehicle options</li>
            </ul>
            <p>Whether you're traveling to a metropolitan city or a remote village, we have the network and experience to get you there safely and comfortably.</p>
        `
    },
    4: {
        title: "Property Management",
        icon: "fas fa-home",
        content: `
            <p>We provide comprehensive property care services to ensure your assets are well-maintained even when you're abroad. Our end-to-end solutions give you complete peace of mind.</p>
            <h4>What's Included:</h4>
            <ul>
                <li>Regular property inspections</li>
                <li>Maintenance and repair coordination</li>
                <li>Tenant management and rent collection</li>
                <li>Utility bill payments</li>
                <li>Legal and documentation support</li>
                <li>Emergency response services</li>
            </ul>
            <p>With regular updates and photographs, you'll always know the status of your property, no matter where you are in the world.</p>
        `
    },
    5: {
        title: "Interior Design & Renovation",
        icon: "fas fa-couch",
        content: `
            <p>Transform your space with our professional interior design and renovation services. We work with trusted partners to deliver results that match your taste, budget, and lifestyle requirements.</p>
            <h4>What's Included:</h4>
            <ul>
                <li>Concept development and space planning</li>
                <li>Material selection and procurement</li>
                <li>Project management</li>
                <li>Quality assurance</li>
                <li>Regular progress updates</li>
                <li>Final walkthrough and handover</li>
            </ul>
            <p>From minor updates to complete home makeovers, we manage the entire process remotely, keeping you involved at every step through virtual consultations.</p>
        `
    },
    6: {
        title: "Medical Assistance",
        icon: "fas fa-first-aid",
        content: `
            <p>From doctor appointments to elder care support, we ensure timely and reliable medical assistance for your loved ones in India. Our network of healthcare professionals provides quality care when you can't be there.</p>
            <h4>What's Included:</h4>
            <ul>
                <li>Doctor appointment scheduling</li>
                <li>Hospital admission coordination</li>
                <li>Medicine delivery</li>
                <li>Elder care and companionship</li>
                <li>Medical report collection and sharing</li>
                <li>Emergency medical support</li>
            </ul>
            <p>We understand the worry of having loved ones needing medical care while you're away. Our compassionate team provides regular updates and ensures the best possible care.</p>
        `
    },
    7: {
        title: "Birthday Surprises & Gifting",
        icon: "fas fa-gift",
        content: `
            <p>Make your loved ones feel special with thoughtfully planned birthday surprises, curated and delivered on your behalf. We help you celebrate important moments despite the distance.</p>
            <h4>What's Included:</h4>
            <ul>
                <li>Customized gift selection</li>
                <li>Personalized cake delivery</li>
                <li>Flower arrangements</li>
                <li>Event planning for special occasions</li>
                <li>Photo and video documentation</li>
                <li>Surprise party coordination</li>
            </ul>
            <p>From intimate family celebrations to larger gatherings, we help you create memorable moments for your loved ones, ensuring they feel cherished even when you're miles away.</p>
        `
    }
};

// Main JavaScript for SRI NRI Services Website
document.addEventListener('DOMContentLoaded', function() {
    // ===== MOBILE NAVIGATION =====
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile nav when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // ===== STICKY HEADER ON SCROLL =====
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // ===== ACTIVE NAV LINK BASED ON SCROLL POSITION =====
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // ===== ENHANCED TESTIMONIAL SLIDER =====
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialControls = document.querySelectorAll('.testimonial-control');
    let currentTestimonial = 0;
    let testimonialInterval;
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        testimonialControls.forEach(control => {
            control.classList.remove('active');
        });
        
        testimonials[index].classList.add('active');
        testimonialControls[index].classList.add('active');
        currentTestimonial = index;
    }
    
    function nextTestimonial() {
        let nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }
    
    // Start automatic testimonial rotation
    function startTestimonialInterval() {
        testimonialInterval = setInterval(nextTestimonial, 5000);
    }
    
    // Add click events to testimonial controls
    testimonialControls.forEach(control => {
        control.addEventListener('click', function() {
            clearInterval(testimonialInterval);
            showTestimonial(parseInt(this.dataset.index));
            startTestimonialInterval();
        });
    });
    
    // Start the rotation
    startTestimonialInterval();

    // ===== SERVICE CARDS INTERACTION =====
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        // Add hover effect with delay
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            card.style.boxShadow = '0 12px 20px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        });
    });

    // ===== SERVICE FILTERING =====
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCardsAll = document.querySelectorAll('.service-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.dataset.filter;
            
            // Filter service cards
            serviceCardsAll.forEach(card => {
                if (filterValue === 'all' || card.dataset.category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ===== SERVICE MODAL FUNCTIONALITY =====
    const readMoreButtons = document.querySelectorAll('.read-more');
    const modalOverlay = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalIcon = document.getElementById('modalIcon');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.querySelector('.close-modal');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceId = button.dataset.service;
            const service = serviceData[serviceId];
            
            if (service) {
                modalTitle.textContent = service.title;
                modalIcon.className = service.icon;
                modalContent.innerHTML = service.content;
                
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            }
        });
    });
    
    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });

    // ===== ENHANCED FORM VALIDATION =====
    const contactForm = document.getElementById('serviceInquiryForm');
    const formGroups = document.querySelectorAll('.form-group');
    const formSuccess = document.getElementById('formSuccess');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Validate each required field
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea, select');
            if (input.hasAttribute('required') && !input.value.trim()) {
                group.classList.add('error');
                isValid = false;
            } else {
                group.classList.remove('error');
            }
            
            // Email validation
            if (input.type === 'email' && input.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    group.classList.add('error');
                    isValid = false;
                }
            }
        });
        
        if (isValid) {
            // Show success message
            formSuccess.style.display = 'block';
            
            // In a real application, you would send the form data to a server
            console.log('Form submitted with:', {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            });
            
            // Reset form
            contactForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                formSuccess.style.display = 'none';
            }, 5000);
        }
    });

    // ===== ANIMATIONS ON SCROLL =====
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .about-img, .about-text');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });

        // Animate stats counter when in view
        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            const statsPosition = statsSection.getBoundingClientRect().top;
            if (statsPosition < window.innerHeight && !statsSection.classList.contains('animated')) {
                animateCounters();
                statsSection.classList.add('animated');
            }
        }
    }
    
    // Initialize elements for animation
    document.querySelectorAll('.service-card, .about-img, .about-text').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load
    setTimeout(animateOnScroll, 100);

    // ===== COUNTER ANIMATION FOR STATS =====
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200; // The lower the slower
        
        counters.forEach(counter => {
            const target = +counter.dataset.count;
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(() => animateCounters(), 1);
            } else {
                counter.innerText = target;
            }
        });
    }

    // ===== BACK TO TOP BUTTON =====
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== HERO CONTENT ANIMATION =====
    const heroContent = document.querySelector('.hero-content');
    window.addEventListener('load', () => {
        heroContent.classList.add('visible');
    });
});
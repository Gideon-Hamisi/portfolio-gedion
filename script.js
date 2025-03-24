// Tab Navigation
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove active class from all tabs and sections
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));

        // Add active class to clicked tab and corresponding section
        this.classList.add('active');
        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).classList.add('active');
    });
});

// Testimonial Slider
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonial-dots .dot');
let currentSlide = 0;
let slideInterval;

// Function to show a specific slide
function showSlide(index) {
    // Remove active class from current slide and dot
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    // Update current slide index
    currentSlide = index;

    // Add active class to the new slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// Function to show the next slide
function showNextSlide() {
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
}

// Initialize the first slide
showSlide(currentSlide);

// Set interval to change slide every 7 seconds
function startSlideShow() {
    slideInterval = setInterval(showNextSlide, 7000);
}

// Stop the slideshow (e.g., when a dot is clicked)
function stopSlideShow() {
    clearInterval(slideInterval);
}

// Start the slideshow
startSlideShow();

// Add click event to dots
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        stopSlideShow(); // Stop the automatic slideshow
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        showSlide(slideIndex);
        startSlideShow(); // Restart the slideshow
    });
});

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
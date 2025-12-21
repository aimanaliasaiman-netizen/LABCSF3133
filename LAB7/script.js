// Smooth scrolling for navigation
document.querySelectorAll('.side-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Progress Bar Simulation - STARTS AT 0%
let progress = 0;
const progressBar = document.querySelector('.progress-bar');
const progressValue = document.querySelector('.progress-value');

// Initialize progress bar at 0%
if (progressBar && progressValue) {
    progressBar.style.width = '0%';
    progressValue.textContent = '0%';
}

// Add event listener to simulate progress
document.getElementById('simulate-progress').addEventListener('click', function() {
    if (progress < 100) {
        progress += 20; // Increase by 20% each click
        if (progress > 100) progress = 100;
        
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
        
        if (progressValue) {
            progressValue.textContent = progress + '%';
        }
        
        // Reset to 0% when it reaches 100%
        if (progress >= 100) {
            setTimeout(() => {
                progress = 0;
                progressBar.style.width = '0%';
                progressValue.textContent = '0%';
            }, 1000); // Wait 1 second before resetting
        }
    }
});

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Increment the slide index
    slideIndex++;
    
    // Reset to the first slide if the index exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    
    // Call this function again after 3 seconds
    setTimeout(showSlides, 3000);
}

// Show first slide immediately when page loads
window.onload = function() {
    if (slides.length > 0) {
        slides[0].style.display = "block";
        slideIndex = 1;
        showSlides();
    }
};

// Collapsible Sections
document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.classList.toggle('active');
    });
});

// Form Submission
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Done submit malam ni kucing sampai');
        this.reset();
    });
}
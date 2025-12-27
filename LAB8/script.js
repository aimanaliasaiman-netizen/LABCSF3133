// Simple JavaScript for FutureTech website

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form from refreshing page
    
    // Show success message
    document.getElementById('successMessage').classList.remove('d-none');
    
    // Clear form after 3 seconds
    setTimeout(function() {
        document.getElementById('contactForm').reset();
        document.getElementById('successMessage').classList.add('d-none');
    }, 3000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
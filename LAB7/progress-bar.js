// Create the JavaScript file to handle the progress increase
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progress-bar');
    const increaseButton = document.getElementById('increase-progress');
    let progress = 0;
    
    increaseButton.addEventListener('click', function() {
        if (progress < 100) {
            progress += 10;
            if (progress > 100) progress = 100;
            progressBar.style.width = progress + '%';
        }
    });
});
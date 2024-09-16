document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector("#desktop-video");
    const mobileVideo = document.querySelector("#mobile-video");
    
    if (window.innerWidth <= 768) {
        mobileVideo.load();
    } else {
        video.load();
    }
});

//coundown


// Set the target date (October 18)
const targetDate = new Date('October 18, 2024 00:00:00').getTime();

const fullCircle = 314;  // Circle's circumference for full animation

// Function to update countdown every second
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Time calculations
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update text content
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Update circles
    document.getElementById('days-circle').style.strokeDashoffset = fullCircle - (days / 365) * fullCircle;
    document.getElementById('hours-circle').style.strokeDashoffset = fullCircle - (hours / 24) * fullCircle;
    document.getElementById('minutes-circle').style.strokeDashoffset = fullCircle - (minutes / 60) * fullCircle;
    document.getElementById('seconds-circle').style.strokeDashoffset = fullCircle - (seconds / 60) * fullCircle;

    // End countdown
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown-container').innerHTML = 'Countdown Finished!';
    }
}

// Call updateCountdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

//change option background


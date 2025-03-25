// script.js

function updateCounter() {
    // Set a fixed start date/time (replace with your actual date/time)
    const startTime = new Date("2025-03-24T00:00:00");
    const now = new Date();
  
    const diff = now - startTime; // milliseconds difference
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }
  
  // Update every second
  setInterval(updateCounter, 1000);
  updateCounter(); // initial call
  
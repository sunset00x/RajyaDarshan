// Flip-style countdown
const electionDate = new Date("2026-03-05T00:00:00+05:45"); // Nepal time

function updateFlipCountdown() {
    const now = new Date();
    let diff = electionDate - now;

    // If countdown is finished
    if (diff <= 0) {
        // Hide countdown numbers or set to zero
        document.querySelector(".countdown-container").style.display = "none";

        // Show the message
        let message = document.createElement("div");
        message.textContent = "Today is Election Day! Every vote counts. Make yours matter";
        message.style.textAlign = "center";
        message.style.fontSize = "2rem";
        message.style.color = "var(--primary)";
        message.style.margin = "2rem 0";
        
        // Append message to body (or any container)
        document.body.appendChild(message);

        // Stop the interval
        clearInterval(timer);
        return;
    }

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    const seconds = Math.floor(diff / 1000);

    // Update countdown
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

// Run every second
const timer = setInterval(updateFlipCountdown, 1000);
updateFlipCountdown();

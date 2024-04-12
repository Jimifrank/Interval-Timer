function startTimer() {
    let input = document.getElementById('timeInput').value;
    let time = Math.min(input * 60, 999 * 60); // Convert to seconds, max 999 minutes
    const display = document.getElementById('timerDisplay');
    const app = document.getElementById('app');

    app.style.backgroundColor = "#90ee90"; // Light green for running

    const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        display.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        if(time === 0) {
            clearInterval(interval);
            app.style.backgroundColor = "#ff6347"; // Tomato color for alarm
            // Play alarm or change screen color
            alert('Time is up!'); // Placeholder for alarm
        }
        time--;
    }, 1000);
}
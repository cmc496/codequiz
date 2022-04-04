var timerEl = document.getElementById('countdown');

function countdown() {
    var timeLeft = 5;

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        }
        else {
            timerEl.textContent = "Time's up!";

            clearInterval(timeInterval);
        }
    }, 1000);
}
countdown();
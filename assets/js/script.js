var btnEl = document.querySelector("#start-quiz");
var bodyEl = document.querySelector("#description");
var h1El = document.querySelector("#quiz-title");
var timerEl = document.querySelector('#countdown');


function countdown() {
    var timeLeft = 60;

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

function startQuiz() {
    

}

btnEl.addEventListener("click", countdown);
//countdown();
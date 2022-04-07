var btnEl = document.querySelector("#start-quiz");
var bodyEl = document.querySelector("#description");
var h1El = document.querySelector("#quiz-title");
var timerEl = document.querySelector('#countdown');

var btnQ1Opt1 = document.querySelector("#q1-opt1");
var btnQ1Opt2 = document.querySelector("#q1-opt2");
var btnQ1Opt3 = document.querySelector("#q1-opt3");
var btnQ1Opt4 = document.querySelector("#q1-opt4");

var btnQ2Opt1 = document.querySelector("#q2-opt1");
var btnQ2Opt2 = document.querySelector("#q2-opt2");
var btnQ2Opt3 = document.querySelector("#q2-opt3");
var btnQ2Opt4 = document.querySelector("q2-opt4");


document.getElementById("question-one").style.display = "none";
document.getElementById("question-two").style.display = "none";


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

var questionOne = document.getElementById('question-one');

function startQuiz() {
    document.getElementById("description").style.display = "none";
    document.getElementById("question-one").style.display = "block";
    document.getElementById("start-button").style.display = "none";
};

btnEl.addEventListener("click", countdown);
btnEl.addEventListener("click", startQuiz);

var questionTwo = document.getElementById('question-two');

btnQ1Opt1.addEventListener("click", firstIncorrectAnswer);
btnQ1Opt2.addEventListener("click", firstIncorrectAnswer);
btnQ1Opt3.addEventListener("click", firstCorrectAnswer); // Correct answer
btnQ1Opt4.addEventListener("click", firstIncorrectAnswer);

function firstCorrectAnswer() {
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "block";
    // add message under question reading "correct!"
};

function firstIncorrectAnswer() {
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "block";
    // add message under question reading "incorrect!"
    // subtract 10 seconds off of timer
};
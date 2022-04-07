var timerEl = document.querySelector('#countdown');
var highScore = document.querySelector('#high-score');

var btnEl = document.querySelector("#start-quiz");

var btnQ1Opt1 = document.querySelector("#q1-opt1");
var btnQ1Opt2 = document.querySelector("#q1-opt2");
var btnQ1Opt3 = document.querySelector("#q1-opt3");
var btnQ1Opt4 = document.querySelector("#q1-opt4");

var btnQ2Opt1 = document.querySelector("#q2-opt1");
var btnQ2Opt2 = document.querySelector("#q2-opt2");
var btnQ2Opt3 = document.querySelector("#q2-opt3");
var btnQ2Opt4 = document.querySelector("#q2-opt4");

var btnQ3Opt1 = document.querySelector("#q3-opt1");
var btnQ3Opt2 = document.querySelector("#q3-opt2");
var btnQ3Opt3 = document.querySelector("#q3-opt3");
var btnQ3Opt4 = document.querySelector("#q3-opt4");

var btnQ4Opt1 = document.querySelector("#q4-opt1");
var btnQ4Opt2 = document.querySelector("#q4-opt2");
var btnQ4Opt3 = document.querySelector("#q4-opt3");
var btnQ4Opt4 = document.querySelector("#q4-opt4");

var btnQ5Opt1 = document.querySelector("#q5-opt1");
var btnQ5Opt2 = document.querySelector("#q5-opt2");
var btnQ5Opt3 = document.querySelector("#q5-opt3");
var btnQ5Opt4 = document.querySelector("#q5-opt4");

document.getElementById("question-one").style.display = "none";
document.getElementById("question-two").style.display = "none";
document.getElementById("question-three").style.display = "none";
document.getElementById("question-four").style.display = "none";
document.getElementById("question-five").style.display = "none";
document.getElementById("quiz-over").style.display = "none";

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


btnQ1Opt1.addEventListener("click", firstIncorrectAnswer);
btnQ1Opt2.addEventListener("click", firstIncorrectAnswer);
btnQ1Opt3.addEventListener("click", firstCorrectAnswer);
btnQ1Opt4.addEventListener("click", firstIncorrectAnswer);

function firstCorrectAnswer() {
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "block";
    // add message under question reading "correct!"
    // add points to score
};
function firstIncorrectAnswer() {
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "block";
    // add message under question reading "incorrect!"
    // subtract 10 seconds off of timer
};

var questionTwo = document.getElementById('question-two');

btnQ2Opt1.addEventListener("click", secondIncorrectAnswer);
btnQ2Opt2.addEventListener("click", secondIncorrectAnswer);
btnQ2Opt3.addEventListener("click", secondCorrectAnswer);
btnQ2Opt4.addEventListener("click", secondIncorrectAnswer);

function secondCorrectAnswer() {
    document.getElementById("question-two").style.display = "none";
    document.getElementById("question-three").style.display = "block";
    // add message under question reading "correct!"
    // add points to score
};
function secondIncorrectAnswer() {
    document.getElementById("question-two").style.display = "none";
    document.getElementById("question-three").style.display = "block";
    // add message reading "incorrect!"
    // subtract 10 seconds off of timer
};

var questionThree = document.getElementById('question-three');

btnQ3Opt1.addEventListener("click", thirdIncorrectAnswer);
btnQ3Opt2.addEventListener("click", thirdIncorrectAnswer);
btnQ3Opt3.addEventListener("click", thirdIncorrectAnswer);
btnQ3Opt4.addEventListener("click", thirdCorrectAnswer);

function thirdCorrectAnswer() {
    document.getElementById("question-three").style.display = "none";
    document.getElementById("question-four").style.display = "block";
    // add message reading "correct!"
    // add points to score
};
function thirdIncorrectAnswer() {
    document.getElementById("question-three").style.display = "none";
    document.getElementById("question-four").style.display = "block";
    // add message reading "incorrect!"
    // subtract 10 seconds off of timer
};

var questionFour = document.getElementById('question-four');

btnQ4Opt1.addEventListener("click", fourthIncorrectAnswer);
btnQ4Opt2.addEventListener("click", fourthIncorrectAnswer);
btnQ4Opt3.addEventListener("click", fourthCorrectAnswer);
btnQ4Opt4.addEventListener("click", fourthIncorrectAnswer);

function fourthCorrectAnswer() {
    document.getElementById("question-four").style.display = "none";
    document.getElementById("question-five").style.display = "block";
    // add message reading "correct!"
    // add points to score
};
function fourthIncorrectAnswer() {
    document.getElementById("question-four").style.display = "none";
    document.getElementById("question-five").style.display = "block";
    // add message reading "incorrect!"
    // subtract 10 seconds off of score
};

var questionFive = document.getElementById('question-five');

btnQ5Opt1.addEventListener("click", fifthIncorrectAnswer);
btnQ5Opt2.addEventListener("click", fifthIncorrectAnswer);
btnQ5Opt3.addEventListener("click", fifthCorrectAnswer);
btnQ5Opt4.addEventListener("click", fifthIncorrectAnswer);

function fifthCorrectAnswer() {
    document.getElementById("question-five").style.display = "none";
    document.getElementById("question-six").style.display = "block";
    // add message reading "correct!"
    // add points to score
};
function fifthIncorrectAnswer() {
    document.getElementById("question-five").style.display = "none";
    document.getElementById("quiz-over").style.display = "block";
    // add message reading "incorrect!"
    // subtract 10 seconds off of score
};



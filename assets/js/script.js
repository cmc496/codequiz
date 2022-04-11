var timerEl = document.querySelector('#countdown');
var finalTime = document.querySelector('#final-time');
var displayScore = document.querySelector('#display-score');

var timeLeft = 60;
var score = 0;
var initials = "";

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

var btnSubmit = document.querySelector("#submit");

var btnHighScores = document.querySelector('#high-score-menu');

var statsDisplayed = document.getElementById('stats');

var correctAnswer = document.querySelector("#correct-answer");
var incorrectAnswer = document.querySelector("#incorrect-answer");

document.getElementById("question-one").style.display = "none";
document.getElementById("question-two").style.display = "none";
document.getElementById("question-three").style.display = "none";
document.getElementById("question-four").style.display = "none";
document.getElementById("question-five").style.display = "none";
document.getElementById("quiz-over").style.display = "none";
document.getElementById("correct-answer").style.display = "none";
document.getElementById("incorrect-answer").style.display = "none";
document.getElementById("final-time").style.display = "none";
document.getElementById("enter-initials").style.display = "none";
document.getElementById("high-score-page").style.display = "none";

function countdown() {

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        }
        else {
            timerEl.textContent = "Time's up!";
            clearInterval(timeInterval);
            document.getElementById("question-one").style.display = "none";
            document.getElementById("question-two").style.display = "none";
            document.getElementById("question-three").style.display = "none";
            document.getElementById("question-four").style.display = "none";
            document.getElementById("question-five").style.display = "none";
            document.getElementById("quiz-over").style.display = "block";   
        }
    }, 1000);
};

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
    document.getElementById("correct-answer").style.display = "block";
    document.getElementById("incorrect-answer").style.display = "none";
    score = score + 20;
};
function firstIncorrectAnswer() {
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "block";
    document.getElementById("incorrect-answer").style.display = "block";
    document.getElementById("correct-answer").style.display = "none";
    timeLeft = timeLeft - 10;
};

btnQ2Opt1.addEventListener("click", secondIncorrectAnswer);
btnQ2Opt2.addEventListener("click", secondIncorrectAnswer);
btnQ2Opt3.addEventListener("click", secondCorrectAnswer);
btnQ2Opt4.addEventListener("click", secondIncorrectAnswer);

function secondCorrectAnswer() {
    document.getElementById("question-two").style.display = "none";
    document.getElementById("question-three").style.display = "block";
    document.getElementById("correct-answer").style.display = "block";
    document.getElementById("incorrect-answer").style.display = "none";
    score = score + 20;
};
function secondIncorrectAnswer() {
    document.getElementById("question-two").style.display = "none";
    document.getElementById("question-three").style.display = "block";
    document.getElementById("incorrect-answer").style.display = "block";
    document.getElementById("correct-answer").style.display = "none";
    timeLeft = timeLeft - 10;
};

btnQ3Opt1.addEventListener("click", thirdIncorrectAnswer);
btnQ3Opt2.addEventListener("click", thirdIncorrectAnswer);
btnQ3Opt3.addEventListener("click", thirdIncorrectAnswer);
btnQ3Opt4.addEventListener("click", thirdCorrectAnswer);

function thirdCorrectAnswer() {
    document.getElementById("question-three").style.display = "none";
    document.getElementById("question-four").style.display = "block";
    document.getElementById("correct-answer").style.display = "block";
    document.getElementById("incorrect-answer").style.display = "none";
    score = score + 20;
};
function thirdIncorrectAnswer() {
    document.getElementById("question-three").style.display = "none";
    document.getElementById("question-four").style.display = "block";
    document.getElementById("incorrect-answer").style.display = "block";
    document.getElementById("correct-answer").style.display = "none";
    timeLeft = timeLeft - 10;
};

btnQ4Opt1.addEventListener("click", fourthIncorrectAnswer);
btnQ4Opt2.addEventListener("click", fourthIncorrectAnswer);
btnQ4Opt3.addEventListener("click", fourthCorrectAnswer);
btnQ4Opt4.addEventListener("click", fourthIncorrectAnswer);

function fourthCorrectAnswer() {
    document.getElementById("question-four").style.display = "none";
    document.getElementById("question-five").style.display = "block";
    document.getElementById("correct-answer").style.display = "block";
    document.getElementById("incorrect-answer").style.display = "none";
    score = score + 20;
};
function fourthIncorrectAnswer() {
    document.getElementById("question-four").style.display = "none";
    document.getElementById("question-five").style.display = "block";
    document.getElementById("incorrect-answer").style.display = "block";
    document.getElementById("correct-answer").style.display = "none";
    timeLeft = timeLeft - 10;
};

btnQ5Opt1.addEventListener("click", fifthIncorrectAnswer);
btnQ5Opt2.addEventListener("click", fifthIncorrectAnswer);
btnQ5Opt3.addEventListener("click", fifthIncorrectAnswer);
btnQ5Opt4.addEventListener("click", fifthCorrectAnswer);

function fifthCorrectAnswer() {
    document.getElementById("question-five").style.display = "none";
    document.getElementById("quiz-over").style.display = "block";
    document.getElementById("correct-answer").style.display = "block";
    document.getElementById("incorrect-answer").style.display = "none";
    score = score + 20;
    console.log(score);
    document.getElementById('countdown').style.display = "none";
    if (document.getElementById('countdown').style.display = "none") {
        document.getElementById('final-time').style.display = "block";
        finalTime.textContent = 'Time: ' + timeLeft;
    }
    displayScore.textContent = score;
    document.getElementById('enter-initials').style.display = "block";
    localStorage.setItem("score", JSON.stringify(score));
    function getSavedInitials() {
        var savedInitials = document.getElementById('initials-submit');
        localStorage.setItem('initials', savedInitials.value);

        function showHighScores() {
            document.getElementById("quiz-over").style.display = "none";
            document.getElementById("incorrect-answer").style.display = "none";
            document.getElementById("correct-answer").style.display = "none";
            document.getElementById("high-score-page").style.display = "block";
        
            var createLi = document.createElement("li");
            createLi.textContent = savedInitials.value + " " + score;
            statsDisplayed.appendChild(createLi);
        };
        btnHighScores.addEventListener("click", showHighScores);
    }
    btnSubmit.addEventListener("click", getSavedInitials);

    
};
function fifthIncorrectAnswer() {
    document.getElementById("question-five").style.display = "none";
    document.getElementById("quiz-over").style.display = "block";
    document.getElementById("incorrect-answer").style.display = "block";
    document.getElementById("correct-answer").style.display = "none";
    timeLeft = timeLeft - 10;
    console.log(score);
    document.getElementById('countdown').style.display = "none";
    if (document.getElementById('countdown').style.display = "none") {
        document.getElementById('final-time').style.display = "block";
        finalTime.textContent = 'Time: ' + timeLeft;
    }
    displayScore.textContent = score;
    document.getElementById('enter-initials').style.display = "block";

    localStorage.setItem("score", JSON.stringify(score));
    function getSavedInitials() {
        var savedInitials = document.getElementById('initials-submit');
        localStorage.setItem('initials', savedInitials.value);

        function showHighScores() {
            document.getElementById("quiz-over").style.display = "none";
            document.getElementById("incorrect-answer").style.display = "none";
            document.getElementById("correct-answer").style.display = "none";
            document.getElementById("high-score-page").style.display = "block";
        
            var createLi = document.createElement("li");
            createLi.textContent = savedInitials.value + " " + score;
            statsDisplayed.appendChild(createLi);
        };
        btnHighScores.addEventListener("click", showHighScores);
    }
    btnSubmit.addEventListener("click", getSavedInitials);

};

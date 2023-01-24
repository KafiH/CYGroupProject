//Variable
//Starting Section Variables
var introEl = document.querySelector("#intro");
var startBtn = document.querySelector("#start");

//questions and answer section
var questionsEl = document.querySelector("#questions");
var questionEl = document.querySelector("#question");
var ans1Btn = document.querySelector("#answer1");
var ans2Btn = document.querySelector("#answer2");
var ans3Btn = document.querySelector("#answer3");
var ans4Btn = document.querySelector("#answer4");
var ansBtn = document.querySelectorAll("button.ansBtn")
var resultEl = document.querySelector("#result");
var timeEl = document.querySelector("p.time");
var secondsLeft = 75;
let point = 0;

//Final score section
var finalEl = document.querySelector("#final");
var scoreEl = document.querySelector("#score");
var submitScrBtn = document.querySelector("#submit-score");
var viewScrBtn = document.querySelector("#view-scores");


//High Scores section
var highscoresEl = document.querySelector("#highscores");
var scoreListEl = document.querySelector("#score-list");
var playagainBtn = document.querySelector("#playagain");
var clearScrBtn = document.querySelector("#clearscores");
var introPoint = document.querySelector("#introPoint");

var questionCount = 0;

let scoreList = [];
let oldScoreList = JSON.parse(localStorage.getItem("scoreList"))
for(let i in oldScoreList){
    scoreList.push(oldScoreList[i])
}

//Questions
var questions = [
    {//Q-0-
    question: "What does HTML stand for?",
    answers:["HyperTyped Machine Language", "HyperText Markup Language", "Hello To My Llama", "Harry Took My Lunch"],
    correctAnswer: "1"
    },
    {//Q-1-
        question: "Choose the correct HTML element for the largest heading:",
        answers:["<head>","<heading>","<h6>","<h1>"],
        correctAnswer: "3"
    },
    {//Q-2-
    question: "What is always the first line of an HTML web page?",
    answers:["<html>","<!DOCTYPE html>","<title>","</html>"],
    correctAnswer: "1"
    },
    {//Q-3-
        question: "What is the correct HTML element for inserting a line break?",
        answers:["<lb>","<break>","<brk>","<br>"],
        correctAnswer: "3"
    } 
];

// EventListeners - Jquery
$(startBtn).click(startQuiz);

ansBtn.forEach(item => {
    $(item).click(checkAnswer)});

$(submitScrBtn).click(addScore);

$(playagainBtn).click(function(){
    highscoresEl.style.display = "none";
    introEl.style.display = "block";
    secondsLeft = 75;
    point = 0;
    timeEl.textContent = `Time:${secondsLeft}s`;
});

$(clearScrBtn).click(clearScores);

$(viewScrBtn).click(function(){
    if (highscoresEl.style.display === "none") {
        highscoresEl.style.display = "block";
    } else if (highscoresEl.style.display === "block") {
        highscoresEl.style.display = "none";
    } else {
        return alert("No Score Yet");
    }
});

// Functions
//first function is 'START' button/click start,show first question and start timer.

function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}

// setting timer
function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `${secondsLeft}s left`;
        
        if (secondsLeft === 0 || secondsLeft <0 || questionCount === questions.length) {
            clearInterval(timerInterval);            
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = point;
        }
    }, 1000);
}

// display the next question
function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}

//checkanswer event function
function checkAnswer(event) {
    event.preventDefault();    
    resultEl.style.display = "block";
    let p = document.createElement("p");
    resultEl.appendChild(p);
    
    setTimeout(function () {
        p.style.display = 'none';
    }, 5000);
    
    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "True! +25";
        point = point + 25;

    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        point = point - 5;
        p.textContent = "False! -5";}
    
    if (questionCount < questions.length) {
        questionCount++;
    }
    setQuestion(questionCount);
}

//score
function addScore(event) {
    event.preventDefault();

    finalEl.style.display = "none";
    highscoresEl.style.display = "block";

    scoreList.push({score: point});

    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });
    
     scoreListEl.innerHTML="";
     for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].score}`;     
        scoreListEl.append(li);
    }
 
    storeScores();
    displayScores();
}

function storeScores() {
    console.log(oldScoreList)
   
    console.log(scoreList)
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
    }

//display scores page
function displayScores() {
    console.log("displayScores")

    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));
    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}

// clearing of scores
function clearScores() {
    console.log("clearScores")

    localStorage.clear();
    scoreListEl.innerHTML="";
    scoreList.length = 0
}


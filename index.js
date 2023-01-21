"use strict";

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const questionCont = document.getElementById("question-container");
const resultCont = document.getElementById("result-container");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answer-buttons");
const btn_a = document.querySelector(".btn-a");
const btn_b = document.querySelector(".btn-b");
const btn_c = document.querySelector(".btn-c");
const btn_d = document.querySelector(".btn-d");
const tryAgain = document.getElementById("try-again");

const buttons = {
  a: document.querySelector(".btn-a"),
  b: document.querySelector(".btn-b"),
  c: document.querySelector(".btn-c"),
  d: document.querySelector(".btn-d"),
};

let correctAnswers = 0;
let hasUserAnswered = false;
let currentAnswer = "";
let shuffledQuestions = [];
let currentQuestionIndex = 0;

const questions = [
  {
    question: "What year was the very first model of the iPhone released?",

    a: "2006",
    b: "2010",
    c: "2007",
    d: "2012",
    correct: "c",
  },

  {
    question: "What’s the shortcut for the “copy” function on most computers?",

    a: "Ctrl + C",
    b: "Ctrl + V",
    c: "Ctrl + A",
    d: "Ctrl + U",
    correct: "a",
  },
  {
    question: "'OS' computer abbreviation usually means ?",
    a: " Order of Significance",
    b: "Open Software",
    c: "Operating System",
    d: "Optical Sensor",
    correct: "c",
  },
  {
    question: "'.MOV' extension refers usually to what kind of file?",
    a: "Image file",
    b: "Animation/movie file",
    c: "Audio file",
    d: "MS Office document",
    correct: "b",
  },
  {
    question: "Who developed Yahoo?",
    a: "Dennis Ritchie & Ken Thompson",
    b: "David Filo & Jerry Yang",
    c: "Vint Cerf & Robert Kahn",
    d: "Steve Case & Jeff Bezos",
    correct: "b",
  },
  {
    question: "'DB' computer abbreviation usually means ?",
    a: "Database",
    b: "Double Byte",
    c: "Data Block",
    d: "Driver Boot",
    correct: "a",
  },
  {
    question: "What is the only thing that computers understand?",
    a: "Machine Code",
    b: "Low Level Languages",
    c: "High Level Languages",
    d: "Algorithms",
    correct: "a",
  },
  {
    question: "Resolving errors in a program is known as...",
    a: "Refixing",
    b: "Error Checking",
    c: "Problem Solving",
    d: "Debugging",
    correct: "d",
  },
  {
    question:
      "Which of the following is not a high level programming language?",
    a: "Java",
    b: "Javascript",
    c: "Assembly",
    d: "Python",
    correct: "c",
  },
  {
    question:
      "An error in a program that prevents the program from running as expected.",
    a: "Error report",
    b: "Bug",
    c: "Mistake",
    d: "Algorithm",
    correct: "b",
  },
];

const startGame = function () {
  startBtn.classList.add("hide");
  nextBtn.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.trunc(Math.random()));
  currentQuestionIndex = 0;
  questionCont.classList.remove("hide");

  showQuestion(true);
};

function setNextQuestion() {
  showQuestion(false);
}
function showQuestion(firstTime) {
  hasUserAnswered = false;
  console.log({ firstTime });

  if (currentAnswer.length > 0) {
    buttons[currentAnswer].classList.remove("btn-correct");
    buttons[currentAnswer].classList.remove("btn-wrong");
  }
  console.log({ currentQuestionIndex, shuffledQuestions });
  if (currentQuestionIndex === shuffledQuestions.length - 1) {
    hasUserAnswered = true;
    nextBtn.innerText = "See result";
    questionCont.classList.add("hide");
   
    resultCont.classList.remove("hide");
    resultCont.innerText = `RESULT:
      You scored ${correctAnswers}/ ${shuffledQuestions.length}
      Congratulations!`;
    nextBtn.classList.add("hide");
    tryAgain.classList.remove("hide");
    
  }
  if (currentQuestionIndex < shuffledQuestions.length - 1 && !firstTime) {
    currentQuestionIndex++;
  } 

  const currentQuizData = shuffledQuestions[currentQuestionIndex];
  questionEl.innerText = currentQuizData.question;
  btn_a.innerText = currentQuizData.a;
  btn_b.innerText = currentQuizData.b;
  btn_c.innerText = currentQuizData.c;
  btn_d.innerText = currentQuizData.d;
}

const submitAnswer = (answer) => {
  if (hasUserAnswered) return;

  if (answer === questions[currentQuestionIndex].correct) {
    correctAnswers++;
    buttons[answer].classList.add("btn-correct");
  } else {
    buttons[answer].classList.add("btn-wrong");
  }
  currentAnswer = answer;
  hasUserAnswered = true;
};

function tryAgainGame() {
  startBtn.classList.remove("hide");
  nextBtn.innerText = "Next";
  nextBtn.classList.add("hide");
  tryAgain.classList.add("hide");
  resultCont.classList.add("hide");
}
tryAgain.addEventListener("click", tryAgainGame);
startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", setNextQuestion);

const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextButton = document.getElementById("next");
const scoreContainer = document.getElementById("score-container");
const finalScoreEl = document.getElementById("final-score");

document.querySelector(".theme-toggler").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const quiz = [
  {
    question: 'What is the output of the following code: console.log(5 + "3")?',
    choices: ["53", "8", "35", "NaN"],
    answer: 1,
  },
  {
    question: "Which of the following is not a reserved keyword in JavaScript?",
    choices: ["abstract", "arguments", "boolean", "break"],
    answer: 2,
  },
  {
    question:
      "What is the output of the following code: console.log(null == undefined)?",
    choices: ["true", "false"],
    answer: 0,
  },
  {
    question:
      "What is the output of the following code: console.log(typeof NaN)?",
    choices: ["number", "string", "boolean", "object"],
    answer: 0,
  },
  {
    question: "What is the output of the following code: console.log(2 ** 3)?",
    choices: ["6", "8", "10", "9"],
    answer: 3,
  },
  {
    question:
      "What is the output of the following code: console.log(5 > 3 && 3 < 1)?",
    choices: ["true", "false"],
    answer: 1,
  },
  {
    question:
      "What is the output of the following code: console.log(5 > 3 || 3 < 1)?",
    choices: ["true", "false"],
    answer: 0,
  },
  {
    question:
      'What is the output of the following code: console.log(5 !== "5")?',
    choices: ["true", "false"],
    answer: 0,
  },
  {
    question:
      "What is the output of the following code: console.log(typeof [1, 2, 3])?",
    choices: ["object", "array", "number"],
    answer: 1,
  },
  {
    question:
      "What is the output of the following code: console.log(typeof function() {})?",
    choices: ["function", "object", "undefined"],
    answer: 0,
  },
];

function showQuestion() {
  const question = quiz[currentQuestionIndex];
  questionEl.innerText = question.question;
  choicesEl.innerHTML = "";
  question.choices.forEach((choice, index) => {
    const choiceEl = document.createElement("button");
    choiceEl.innerText = choice;
    choiceEl.value = index;
    choiceEl.onclick = () => {
      if (selectedAnswer === null) {
        selectedAnswer = index;
        checkAnswer(selectedAnswer);
      }
    };
    choicesEl.appendChild(choiceEl);
  });
}

function checkAnswer(answer) {
  if (parseInt(answer) === quiz[currentQuestionIndex].answer) {
    feedbackEl.innerText = "Correct!";
    score++;
  } else {
    feedbackEl.innerText = `Incorrect! The correct answer is ${
      quiz[currentQuestionIndex].choices[quiz[currentQuestionIndex].answer]
    }`;
  }
  nextButton.disabled = false;
}

function showScore() {
  quizContainer.style.display = "none";
  scoreContainer.style.display = "block";
  finalScoreEl.innerText = `Your final score is ${score}/${quiz.length}`;
}

nextButton.onclick = () => {
  currentQuestionIndex++;
  selectedAnswer = null;
  if (currentQuestionIndex === quiz.length) {
    showScore();
  } else {
    showQuestion();
  }
  nextButton.disabled = true;
  feedbackEl.innerText = "";
};

showQuestion();

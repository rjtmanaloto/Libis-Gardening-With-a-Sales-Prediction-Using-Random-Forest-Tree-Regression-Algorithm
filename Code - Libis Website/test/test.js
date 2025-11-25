const questions = [
    {
        question: "Water is transported to the leaves where it combines with ________________ to form sugar.",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Glucose", correct: false },
            { text: "Carbon monoxide", correct: false },
            { text: "Carbon dioxide", correct: true },
        ]
    },
    {
        question: "Which is not a function of the roots?",
        answers: [
            { text: "Absorb water", correct: false },
            { text: "Anchor the plant", correct: false },
            { text: "Photosynthesize", correct: true },
            { text: "Stores food", correct: false },
        ]
    },
    {
        question: "Phloem is used to transport:",
        answers: [
            { text: "Water up", correct: false },
            { text: "Water down", correct: false },
            { text: "Sugar down", correct: true },
            { text: "Sugar up", correct: false },
        ]
    },
    {
        question: "Why do flowers have such colorful petals?",
        answers: [
            { text: "To attract animals for pollination", correct: true },
            { text: "Trap insects", correct: false },
            { text: "To scare away predators.", correct: false },
            { text: "To hide pollen", correct: false },
        ]
    },
    {
        question: "Which of the following is not a way seeds are dispersed?",
        answers: [
            { text: "Wind", correct: false },
            { text: "Sun", correct: true },
            { text: "Water", correct: false },
            { text: "Animals", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question1");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
        question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})
startQuiz();
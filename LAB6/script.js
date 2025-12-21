let questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        answer: "4"
    },
    {
        question: "What is the capital of Malaysia?",
        options: ["Kuala Lumpur", "Penang", "Johor Bahru"],
        answer: "Kuala Lumpur"
    }
];

let currentQuestion = 0;
let score = 0;
let time = 10;
let timer;

function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

function startTimer() {
    clearInterval(timer);
    time = 10;
    document.getElementById("timer").textContent = "Time: " + time;

    timer = setInterval(() => {
        time--;
        document.getElementById("timer").textContent = "Time: " + time;

        if (time === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function displayQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;

    let optionsHTML = "";
    q.options.forEach(option => {
        optionsHTML += `
            <label>
                <input type="radio" name="option" value="${option}">
                ${option}
            </label>
        `;
    });

    document.getElementById("options").innerHTML = optionsHTML;
    document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
    let selected = document.querySelector('input[name="option"]:checked');
    if (!selected) return;

    if (selected.value === questions[currentQuestion].answer) {
        score++;
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = "Incorrect!";
    }

    document.getElementById("score").textContent = "Score: " + score;
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
        startTimer();
    } else {
        document.getElementById("question").textContent = "Quiz Finished!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("feedback").textContent = "";
        clearInterval(timer);
    }
}

function startQuiz() {
    shuffleQuestions();
    displayQuestion();
    startTimer();
}

startQuiz();

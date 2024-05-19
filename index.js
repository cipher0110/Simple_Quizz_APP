const quizData = [
    {
        question: "Who is the current President of India",
        a: "Ramnath Kovind",
        b: "Dr. Rajendra Prasad",
        c: "Dr. Prtibha Patil",
        d: "Draupadi Murmu",
        correct: "d",
    },
    {
        question: "Who is the Prime Minister of India",
        a: "Pandit Jawahar Lal Nehru",
        b: "SMT. Indira Gandi",
        c: "Narendra Modi",
        d: "Dr. Manmohan Singh",
        correct: "c",
    },
    {
        question: "Who is the Chief Minister of Uttar Pradesh ",
        a: "Su. Shri. Mayavati",
        b: "Yogi Aditya Nath",
        c: "Mulayam singh",
        d: "Akhilesh yadav",
        correct: "b",
    },
    {
        question: "What is the Nation Anthem of India",
        a: "Jan Gan Man",
        b: "Satya mev jayte",
        c: "Ai mere watan ke logo",
        d: "Hind ke sher",
        correct: "a",
    },
    {
        question: "What is the Nation Bird of India",
        a: "Pigeon",
        b: "Parrot",
        c: "Crow",
        d: "Peacock",
        correct: "d",
    },
];

const questionEl = document.getElementById("question");

const a_textEl = document.getElementById("a_text");

const b_textEl = document.getElementById("b_text");

const c_textEl = document.getElementById("c_text");

const d_textEl = document.getElementById("d_text");

const btnEl = document.getElementById("btn");

const answerEl = document.querySelectorAll(".answer");

const quizEL = document.getElementById('quiz');

let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
    deSelectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_textEl.innerText = currentQuizData.a;
    b_textEl.innerText = currentQuizData.b;
    c_textEl.innerText = currentQuizData.c;
    d_textEl.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deSelectAnswer() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false
    });
}
btnEl.addEventListener("click", () => {
    const answer = getSelected();
    console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizEL.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions.</h2>
            <button onClick='location.reload()'>Reload</button>`
            // alert("Are you Sure You want to Submit");
        }
    }
});

let question = document.querySelector("#question")
let title = document.getElementById("title")
let questionNumber = document.getElementById("number")
let firstQuestion = document.getElementById("first")
let secondQuestion = document.getElementById("second")
let thirdQuestion = document.getElementById("third")
let fourthQuestion = document.getElementById("fourth")
let questionNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// create table for questions
const quizGame = function() {
    let wrongArea = document.querySelector("h4")
    wrongArea.appendChild("")
    for (a = 1; a < questionNumbersArray.length; a++) {
        createQuestionsTable(a)
        checkAnswer()
    }

}
const createQuestionsTable = function(a) {
    a = 0;
    title.innerHTML = `<h3>${questions[a].question}</h3>`
    questionNumber.innerText = questionNumbersArray[a]
    firstQuestion.innerText = `1 - ` + questions[a].correct_answer
    secondQuestion.innerText = `2 -` + questions[a].incorrect_answers[0]
    thirdQuestion.innerText = `3 - ` + questions[a].incorrect_answers[1]
    fourthQuestion.innerText = `4 - ` + questions[a].incorrect_answers[2]
}

// create grab checked answer

const testAnswer = function() {
        const radioButtons = document.querySelectorAll('input[name="question"]')
        let selected;
        for (let radio of radioButtons) {
            if (radio.checked) {
                selected = radio.value;
                break;
            }
        }
    }
    /* 
           - verifica se la risposta è corretta
           
                1 seleziona tutti gli input OK
                2 controlla quale è in stato check  OK
                3 associalo alla risposta corretta OK
           - se è corretta aggiunge i punti al contatore OK
           - se è sbagliata mostra un esclamativo rosso OK
           - passa alla domanda successiva to fix
         */
    // check the answer

const checkAnswer = function() {
    if (testAnswer == true) {
        let counter = 0;
        counter += 1;
        quizGame()
        alert("CORRECT ANSWER!");
    } else {
        alert("WRONG ANSWER!")
        error()
        quizGame()
    }

}

let error = function() {
        let wrong = document.createElement("p");
        wrong.innerText = "!";
        wrong.classList.add("red");
        let wrongArea = document.querySelector("h4")
        wrongArea.appendChild(wrong)
    }
    // create onclick event

let button = document.getElementById("send").addEventListener("click", checkAnswer);
// create a random number between 1 and 4
const choiceanswer = function() {
    return Math.floor(Math.random() * 4 + 1)
}




window.onload = function() {
    createQuestionsTable()


    const questions = [{
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    }, {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    }, {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    }, {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    }, {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    }, {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    }, {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    }, {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    }, {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    }, {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    }, ];
};
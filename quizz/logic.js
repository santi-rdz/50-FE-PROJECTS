const formulario = document.querySelector(".quiz-container");
const question = document.querySelector(".question");
const aLabel = document.querySelector("#a-text");
const bLabel = document.querySelector("#b-text");
const cLabel = document.querySelector("#c-text");
const dLabel = document.querySelector("#d-text");

const quizData = [
  {
    question: "What is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

class Question {
  constructor(currentQ) {
    this.currentQ = currentQ;
  }

  loadQuestion() {
    question.textContent = quizData[this.currentQ].question;
    aLabel.textContent = quizData[this.currentQ].a;
    bLabel.textContent = quizData[this.currentQ].b;
    cLabel.textContent = quizData[this.currentQ].c;
    dLabel.textContent = quizData[this.currentQ].d;
  }
  handleSubmit(e) {
    e.preventDefault();

    console.log(this.getSelected());

    this.currentQ++;
    this.loadQuestion();
  }
  getSelected() {
    const selected = document.querySelector(
      'input[name="answer"]:cheked'
    ).value;

    return selected;
  }
}
let question1;
const startApp = () => {
  //console.log("hola");
  question1 = new Question(0);
  question1.loadQuestion();
  formulario.addEventListener("submit", (e) => question1.handleSubmit(e));
};

const cargarEventListeners = () => {
  document.addEventListener("DOMContentLoaded", startApp);
};

cargarEventListeners();

const container = document.querySelector(".container");
const text = document.querySelector(".container h2");

const carers = ["Youtuber", "Software Engineer", "Informatic", "Web Developer"];
let careerI = 0;
let characterI = 0;
const vocal = ["A", "E", "I", "O", "U"];

const update = () => {
  const firstLetter = carers[careerI].slice(0, 1).toUpperCase();
  const hasVowel = vocal.includes(firstLetter) ? "an" : "a";

  container.innerHTML = ` <h1>I am ${hasVowel} ${carers[careerI].slice(
    0,
    ++characterI
  )}</h1>`;

  if (characterI === carers[careerI].length) {
    careerI++;
    characterI = 0;
  }
  if (careerI === carers.length) careerI = 0;
  setTimeout(update, 200);
};

update();

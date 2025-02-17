const body = document.querySelector("body");
const container = document.querySelector(".container");

const careers = [
  "Youtuber",
  "Informatic",
  "Software engineer",
  "Web developer",
];
let careerIndex = 0;
let characterIndex = 1;
const vowels = ["A", "E", "I", "O", "U"];
const update = () => {
  container.innerHTML = `<h1>I am ${
    vowels.includes(careers[careerIndex].slice(0, 1)) ? "an" : "a"
  } ${careers[careerIndex].slice(0, ++characterIndex)} </h1>
   
   `;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(() => {
    update();
  }, 200);
};
update();

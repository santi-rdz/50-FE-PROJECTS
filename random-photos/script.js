const btnLoad = document.querySelector(".btn");
const imgContainer = document.querySelector(".image-container");

let iCont = 4;

const addPhoto = () => {
  const newI = document.createElement("img");
  newI.src = `https://picsum.photos/300?random=${Math.random()*2000}`;
  imgContainer.appendChild(newI);
};

const startApp = () => {
  btnLoad.addEventListener("click", addPhoto);
};

window.addEventListener("DOMContentLoaded", startApp);

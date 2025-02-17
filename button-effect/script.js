const btn = document.querySelector("#btn");

const startApp = () => {
  btn.addEventListener("mouseover", (e) => {
    const posX = e.pageX - btn.offsetLeft;
    const posY = e.pageY - btn.offsetTop;
    btn.style.setProperty("--xPos", posX + "px");
    btn.style.setProperty("--yPos", posY + "px");
  });
};

const eventListeners = () => {
  window.addEventListener("DOMContentLoaded", startApp);
};

eventListeners();

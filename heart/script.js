const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
  const xPos = e.offsetX;
  const yPos = e.offsetY;

  const spanEl = document.createElement("SPAN");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  body.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
// const heart = (params) => {
//   const size = Math.random() * 80 + 20;
//   const xPos = Math.random() * (window.innerWidth - size); // Random X position within the viewport
//   const yPos = Math.random() * (window.innerHeight - size);

//   const spanEl = document.createElement("SPAN");
//   spanEl.style.left = xPos + "px";
//   spanEl.style.top = yPos + "px";

//   spanEl.style.width = size + "px";
//   spanEl.style.height = size + "px";

//   body.appendChild(spanEl);

//   setTimeout(() => {
//     spanEl.remove();
//   }, 3000);
// };
// setInterval(heart, 200); // Create a new heart every 500ms

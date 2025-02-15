const month = document.querySelector(".month");
const day = document.querySelector(".day");
const number = document.querySelector(".number");
const year = document.querySelector(".year");

const startApp = () => {
  const date = new Date();
  month.textContent = date.toLocaleString("en", { month: "long" });
  day.textContent = date.toLocaleString("en", { weekday: "long" });
  number.textContent = date.getDate();
  year.textContent = date.getFullYear();
};

const loadEvent = () => {
  window.addEventListener("DOMContentLoaded", startApp);
};

loadEvent();

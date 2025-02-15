const month = document.querySelector(".month");
const weekDay = document.querySelector(".day-name");
const dayNumber = document.querySelector(".day-number");
const yaer = document.querySelector(".year");

const startApp = () => {
  const date = new Date();
  month.textContent = date.toLocaleString("en", { month: "long" });
  weekDay.textContent = date.toLocaleString("en", { weekday: "long" });
  dayNumber.textContent = date.getDate();
  yaer.textContent = date.getFullYear();
};

const eventListeners = () => {
  window.addEventListener("DOMContentLoaded", startApp);
};

eventListeners();

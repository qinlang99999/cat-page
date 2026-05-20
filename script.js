const messages = [
  "喵：今天也要被认真夸奖。",
  "摸到了，蓬松指数临时上升 3%。",
  "它看起来决定原谅这个世界两分钟。",
  "小猫已收到，并回赠一个严肃眼神。"
];

const button = document.querySelector("#boopButton");
const toast = document.querySelector("#toast");
let hideTimer;

button.addEventListener("click", () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  toast.textContent = message;
  toast.classList.add("is-visible");

  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2400);
});

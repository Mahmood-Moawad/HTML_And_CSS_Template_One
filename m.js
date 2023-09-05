let nums = document.querySelectorAll(".stats .box  .number");
let section = document.querySelector(".stats");
let skills = document.querySelector(".our-skills");
let skillSpan = document.querySelectorAll(".the-progress span");
let spanUp = document.querySelector(".scroll-top");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }

    started = true;
  }
  if (window.scrollY >= skills.offsetTop - 300) {
    skillSpan.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  if (this.scrollY >= 1000) {
    spanUp.classList.add("show");
  } else {
    spanUp.classList.remove("show");
  }
};
spanUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

let countDown = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDown - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".second").innerHTML =
    second < 10 ? `0${second}` : second;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

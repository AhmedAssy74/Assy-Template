/////////////// Events Section ///////////////
// Event Data
let countDownDate = new Date("jan 31, 2022 23:59:59").getTime();
let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Ten Evebt Date
  let dateDiff = countDownDate - dateNow;
  //Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);

/////////////// Scroll To Top ///////////////
let toTop = document.querySelector(".to-up");

toTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
/////////////// Skills Section ///////////////
let skillsSection = document.querySelector("#our-skills");
let percentage = document.querySelectorAll(".skill h3 span");
let spans = document.querySelectorAll(".the-progress span");

/////////////// Stats Section ///////////////
let nums = document.querySelectorAll(".stats .num");
let stateSection = document.querySelector(".events");
let started = false; // Function Started ? No

function StartCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 10000 / goal);
}

// * Window Scrolling * //

window.onscroll = function () {
  // FOR scrol to top
  console.log(window.scrollY);
  this.scrollY > 1000
    ? toTop.classList.add("show")
    : toTop.classList.remove("show");
  // FOR skills Section
  if (window.scrollY >= skillsSection.offsetTop) {
    spans.forEach((e) => {
      e.style.width = e.dataset.width;
    });
  }
  // For State Section
  if (window.scrollY >= stateSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => StartCount(num));
    }
    started = true;
  }
};

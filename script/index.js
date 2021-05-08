let choosen = 0;

const homePage = document.querySelector("#home");
const blogPage = document.querySelector("#blog");
const prevBtn = document.querySelector("#left-btn");
const nextBtn = document.querySelector("#right-btn");
const allDots = document.querySelectorAll(".fa-circle");

const allPages = [homePage, blogPage];

prevBtn.addEventListener("click", () => {
  if (choosen > 0) {
    allDots[choosen].style.color = "white";
    allPages[choosen].classList.add("slide-to-left");
    allPages[choosen].classList.remove("fade-in");
    choosen--;
    window.setTimeout(function () {
      allPages[choosen].classList.remove("slide-to-right");
      allPages[choosen].classList.add("fade-in");
      allDots[choosen].style.color = "#d63a5f";
      allDots[1].style.color = "black";
    }, 50);
  } else {
  }
});

nextBtn.addEventListener("click", () => {
  if (choosen < 1) {
    allDots[choosen].style.color = "white";
    allPages[choosen].classList.add("slide-to-right");
    allPages[choosen].classList.remove("fade-in");
    choosen++;
    window.setTimeout(function () {
      allPages[choosen].classList.remove("slide-to-left");
      allPages[choosen].classList.add("fade-in");
      allDots[choosen].style.color = "#d63a5f";
      allDots[0].style.color = "black";
    }, 50);
  } else {
  }
});

allPages[0].classList.add("fade-in");

allDots[0].style.color = "#d63a5f";

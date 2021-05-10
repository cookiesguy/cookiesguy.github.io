let choosen = 0;
let isAnimated = false;
let documentheight = document.body.clientHeight;

const homePage = document.querySelector("#home");
const blogPage = document.querySelector("#blog");
const prevBtn = document.querySelector("#left-btn");
const nextBtn = document.querySelector("#right-btn");
const allDots = document.querySelectorAll(".fa-circle");
const projectComponents = document.querySelectorAll(".project-block");
const svgText = document.querySelector(".svg-text");
projectComponents[0].style.transform = "translateY(400px)";
projectComponents[0].style.opacity = "0";

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

      svgText.classList.add("svg-text");
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
      svgText.classList.remove("svg-text");
    }, 50);
  } else {
  }
});
let yAxis;
window.addEventListener("scroll", () => {
  yAxis = documentheight - window.pageYOffset;

  if (yAxis < 600 && yAxis > 200) {
    projectComponents[0].style.transition = "all ease 1.5s";
    projectComponents[0].style.transform = "translateY(0px)";
    projectComponents[0].style.opacity = "1";
  } else if (yAxis < -250) {
    // projectComponents[1].style.transition = "all ease 1.5s";
    // projectComponents[1].style.transform = "translateY(0px)";
    // projectComponents[1].style.opacity = "1";
  } else if (yAxis > 600) {
    projectComponents[0].style.transform = "translateY(400px)";
    projectComponents[0].style.opacity = "0";
    // projectComponents[1].style.transform = "translateY(400px)";
    // projectComponents[1].style.opacity = "0";
  }
});

allPages[0].classList.add("fade-in");
allPages[0].classList.remove("slide-to-left");
allDots[0].style.color = "#d63a5f";

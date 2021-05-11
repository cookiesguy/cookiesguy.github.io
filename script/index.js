let isAnimated = false;
let documentheight = document.body.clientHeight;

const projectComponents = document.querySelectorAll(".project-block");
const svgText = document.querySelector(".svg-text");
const navLink = document.querySelector(".list");
const menuButton = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".side-bar");
const container = document.querySelector(".container");
projectComponents[0].style.transform = "translateY(1000px)";
projectComponents[0].style.opacity = "0";

navLink.style.transform = "translateY(-80px)";

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
  if (window.pageYOffset < 100) {
    navLink.style.transition = "all ease 0.8s";
    navLink.style.transform = "translateY(0px)";
  } else if (window.pageYOffset > 100) {
    navLink.style.transform = "translateY(-80px)";
  }
});

window.setTimeout(() => {
  navLink.style.transition = "all ease 0.8s";
  navLink.style.transform = "translateY(0px)";
}, 50);

menuButton.addEventListener("click", () => {
  console.log("fired");
  sideBar.style.transform = "translateX(0px)";
  container.style.filter = "brightness(50%)";
});

function closeSideBar() {
  sideBar.style.transform = "translateX(-140px)";
  container.style.filter = "brightness(100%)";
}

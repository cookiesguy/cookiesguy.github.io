const menuButton = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".side-bar");
const container = document.querySelector(".container");
menuButton.addEventListener("click", () => {
  console.log("fired");
  sideBar.style.transform = "translateX(0px)";
  container.style.filter = "brightness(50%)";
});

function closeSideBar() {
  sideBar.style.transform = "translateX(-140px)";
  container.style.filter = "brightness(100%)";
}

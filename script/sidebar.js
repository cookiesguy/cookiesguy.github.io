const menuButton = document.querySelector('.menu-btn');
const sideBar = document.querySelector('.side-bar');

const disableDiv = document.getElementById('disable');

menuButton.addEventListener('click', () => {
   sideBar.style.transform = 'translateX(0px)';
   disableDiv.style.display = 'block';
});

function closeSideBar() {
   sideBar.style.transform = 'translateX(-140px)';
   disableDiv.style.display = 'none';
}

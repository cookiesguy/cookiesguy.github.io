let isAnimated = false;

const svgText = document.querySelector('.svg-text');
const navLink = document.querySelector('.list');
const container = document.querySelector('.container');

window.setTimeout(() => {
   navLink.style.transition = 'all ease 0.8s';
   navLink.style.transform = 'translateY(0px)';
}, 50);

function showHand() {
   const hand = document.getElementById('hand-pointer');
   hand.style.display = 'block';
   setTimeout(() => hideHand(hand), 6000);
}

function hideHand(hand) {
   hand.style.display = 'none';
}

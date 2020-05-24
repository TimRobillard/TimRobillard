const emailIcon = document.getElementById('email-icon');
let firstScroll = true;
const headerLogo = document.querySelector('#logo-bird');
const headerLogoLeft = document.querySelector('#logo-left');
const headerLogoRight = document.querySelector('#logo-right');
const flashyThing = document.querySelector('.flashy-div');

emailIcon.addEventListener('click', emailClick);

function emailClick(e) {
  e.preventDefault();
  window.open(
    'mailto:robillardtim@gmail.com?subject=' + escape('**ATTENTION** Sent from timrobillard.com'),
    '_blank'
  );
}

window.onscroll = function () {
  if (window.scrollY <= 0) {
    headerLogo.className = 'logo-on-load';
    headerLogoLeft.classList.add('logo-bracket-on-load');
    headerLogoRight.classList.add('logo-bracket-on-load');
    firstScroll = true;
  } else if (firstScroll) {
    headerLogo.className = 'logo-scroll-out';
    headerLogoLeft.classList.remove('logo-bracket-on-load');
    headerLogoRight.classList.remove('logo-bracket-on-load');
    setTimeout(() => {
      headerLogo.className = 'header-logo-hidden';
    }, 500);
    firstScroll = false;
  }
};

setTimeout(function () {
  headerLogo.className = 'logo-on-load';
  headerLogoLeft.classList.add('logo-bracket-on-load');
  headerLogoRight.classList.add('logo-bracket-on-load');
}, 0);

setInterval(function () {
  flashyThing.classList.toggle('flashy-move');
}, 1500);

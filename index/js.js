let emailIcon = document.getElementById('email-icon');
let firstScroll = true;
let headerLogo = document.querySelector('#logo-bird');
let headerLogoLeft = document.querySelector('#logo-left');
let headerLogoRight = document.querySelector('#logo-right');

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

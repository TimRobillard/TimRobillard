const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile');

burger.addEventListener('click', burgerClick);

function burgerClick(e) {
  e.preventDefault();
  if (e.target.parentNode.className.split(' ').includes('flipped')) {
    e.target.parentNode.classList.remove('flipped')
    mobileMenu.className = '';
  } else {
    e.target.parentNode.classList.add('flipped')
    mobileMenu.className = 'showing';
  }
}






// const emailIcon = document.getElementById('email-icon');
// const headerLogo = document.querySelector('#logo-bird');
// const headerLogoLeft = document.querySelector('#logo-left');
// const headerLogoRight = document.querySelector('#logo-right');

// let firstScroll = true;

// emailIcon.addEventListener('click', emailClick);

// function emailClick(e) {
//   e.preventDefault();
//   window.open(
//     'mailto:robillardtim@gmail.com?subject=' + escape('**ATTENTION** Sent from timrobillard.com'),
//     '_blank'
//   );
// }

// window.onload = function () {
//   setTimeout(() => pageScroll(), 1500)
//   console.log('loaded')
// }

// window.onscroll = function () {
//   if (window.scrollY <= 0) {
//     headerLogo.className = 'logo-on-load';
//     headerLogoLeft.classList.add('logo-bracket-on-load');
//     headerLogoRight.classList.add('logo-bracket-on-load');
//     firstScroll = true;
//   } else if (firstScroll) {
//     headerLogo.className = 'logo-scroll-out';
//     headerLogoLeft.classList.remove('logo-bracket-on-load');
//     headerLogoRight.classList.remove('logo-bracket-on-load');
//     setTimeout(() => {
//       headerLogo.className = 'header-logo-hidden';
//     }, 500);
//     firstScroll = false;
//   }
// };

// setTimeout(function () {
//   headerLogo.className = 'logo-on-load';
//   headerLogoLeft.classList.add('logo-bracket-on-load');
//   headerLogoRight.classList.add('logo-bracket-on-load');
// }, 0);


// function pageScroll() {
//   window.scrollBy(0, 5);
//   if (window.scrollY <= window.innerHeight) {
//     scrolldelay = setTimeout(pageScroll, 1);
//   }
// }

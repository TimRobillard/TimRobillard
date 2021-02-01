// ================================================================================
//          CONSTANTS
// ================================================================================

const logoImgs = [
  '/images/icons-new_gry_blue/react.svg',
  '/images/icons-new_gry_blue/node.svg',
  '/images/icons-new_gry_blue/javascript.svg',
  '/images/icons-new_gry_blue/html.svg',
  '/images/icons-new_gry_blue/css.svg',
  '/images/icons-new_gry_blue/python.svg',
  '/images/icons-new_gry_blue/django.svg',
  '/images/icons-new_gry_blue/jQuery.svg',
  '/images/icons-new_gry_blue/illustrator.svg',
  '/images/icons-new_gry_blue/photoshop.svg',
  '/images/icons-new_gry_blue/mongoDB.svg',
  '/images/icons-new_gry_blue/postgresql.svg',
  '/images/icons-new_gry_blue/blender.svg',
  '/images/icons-new_gry_blue/unity.svg',
  '/images/icons-new_gry_blue/csharp.svg',
]

// ================================================================================
//          DOM ELEMETNS
// ================================================================================

// HEADER
const navUL = document.querySelector('.header__list');
const navItems = document.querySelectorAll('.header__item');
const burger = document.querySelector('.menu__burger');
const burgerCheck = document.getElementById('burger');

// ABOUT LOGOS
const homeLogos = document.querySelector('.home__logos');
const homeLogoFront = document.querySelector('.home__logos__front');
const homeLogoBack = document.querySelector('.home__logos__back');

//PORTFOLIO
const portfolioNavList = document.querySelector('.portfolio__nav__list');
const portfolioNavItems = document.querySelectorAll('.portfolio__nav__item');
const portfolioWrapper = document.querySelector('.portfolio__wrapper');
const portfolioLeft = document.getElementById('portfolio__arrow--left');
const portfolioRight = document.getElementById('portfolio__arrow--right');
// ================================================================================
//          EVENT LISTENERES
// ================================================================================

navUL.addEventListener('click', clickNav);
document.addEventListener('scroll', listenToScroll);
portfolioNavList.addEventListener('click', changePortfolio);

portfolioLeft.addEventListener('click', e => horizontalPortfolio())
portfolioRight.addEventListener('click', e => horizontalPortfolio(-1))

// ================================================================================
//          STATE
// ================================================================================

let logoIntervalId = setInterval(logoSwap, 1500);

//NAV
// let selectedLink =

let front = true;
let vert = true;

//PORTFOLIO
let portfolioIdx = 0;
let portfolioIdxMax = 4;

// ================================================================================
//          FUNCTIONS
// ================================================================================

//UTILITY
function listenToScroll(e) {
  if (window.scrollY > 620) {
    burger.classList.add('menu__burger--purple')
  } else {
    burger.classList.remove('menu__burger--purple')
  }
}

// NAV
function clickNav(e) {
  if (e.target.nodeName === 'UL') return;
  navItems.forEach(item => {
    if (item.className.split(' ').includes('header__item--active')) {
      item.classList.remove('header__item--active');
      return;
    }
  })
  e.target.classList.add('header__item--active');
  burgerCheck.checked = false;
  location.href = e.target.children[0].href;
}

//ABOUT
function logoSwap() {
  if (front) {
    if (vert) {
      homeLogoBack.classList.remove('hor');
      homeLogos.classList.add('flip-vert');
    } else {
      homeLogoBack.classList.add('hor');
      homeLogos.classList.add('flip-hor')
    }
    front = false;
  } else {
    if (vert) {
      homeLogos.classList.remove('flip-vert');
    } else {
      homeLogos.classList.remove('flip-hor');
    }
    logoImgs.push(logoImgs.splice(0, 1)[0]);
    homeLogoFront.style.backgroundImage = `url(${logoImgs[0]})`;
    homeLogoBack.style.backgroundImage = `url(${logoImgs[1]})`;
    front = true;
    vert = !vert;
  }
}

//PORTFOLIO

function changePortfolio(e) {
  let index = parseInt(e.target.dataset.index)
  for (let item of portfolioNavItems) {
    if (item.classList.length > 1) {
      item.classList.remove('portfolio__nav__item--active');
      break;
    }
  }
  portfolioNavItems[index].classList.add('portfolio__nav__item--active');
  portfolioWrapper.style.top = `-${index * 100}vh`;
}

function horizontalPortfolio(dir=1) {
  if (dir === 1 && portfolioIdx === 0) return;
  if (dir === -1 && portfolioIdx === portfolioIdxMax) return;
  portfolioIdx += -dir;
  portfolioWrapper.style.left = `-${100*portfolioIdx}%`;
}
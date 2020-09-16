// ================================================================================================
//            DOM ELEMENTS
// ================================================================================================

const navSections = document.querySelectorAll('header nav li');
const navBar = document.querySelector('header');

const burger = document.getElementById('burger');
const burgerHRs = document.querySelectorAll('#burger > hr');

const menu = document.getElementById('menu');
const menuSections = document.querySelectorAll('#menu ul li a');


// ================================================================================================
//            EVENT LISTENERS
// ================================================================================================

navSections.forEach((section, i) => (section.addEventListener('click', e => highlightNavSection(i))));
document.addEventListener('scroll', checkScroll);

burger.addEventListener('click', toggleMenu);
burgerHRs.forEach(el => el.addEventListener('click', toggleMenu))

menuSections.forEach(section => section.addEventListener('click', toggleMenu));

// ================================================================================================
//            FUNCTIONS
// ================================================================================================


document.getScroll = function () {
  if (window.pageYOffset != undefined) {
    return [pageXOffset, pageYOffset];
  } else {
    var sx, sy, d = document,
      r = d.documentElement,
      b = d.body;
    sy = r.scrollTop || b.scrollTop || 0;
    return sy
  }
}

function highlightNavSection(i) {
  navSections.forEach(section => section.classList.remove('current'));
  navSections[i].classList.add('current');
}

function checkScroll() {
  let scroll = document.getScroll()[1];
  if (scroll < 10) {
    navBar.classList.remove('not-top');
    burger.classList.remove('not-top');
  } else {
    navBar.classList.add('not-top');
    burger.classList.add('not-top');
    if (scroll > 1300) {
      highlightNavSection(2);
    } else if (scroll > 600) {
      highlightNavSection(1)
    } else {
      highlightNavSection(0);
    }
  }
}

let double = false;

function toggleMenu(e) {
  if (double) {
    double = false;
    return;
  }
  double = true;
  burger.className = burger.className === 'menu-showing' ? '' : 'menu-showing';
  menu.classList.toggle('hidden');
}

highlightNavSection(0);
console.log(menuSections)

// ================================================================================================
//            DOM ELEMENTS
// ================================================================================================

const navSections = document.querySelectorAll('header nav li');
const navBar = document.querySelector('header');

const burger = document.getElementById('burger');
const burgerHRs = document.querySelectorAll('#burger > hr');


// ================================================================================================
//            EVENT LISTENERS
// ================================================================================================

navSections.forEach((section, i) => (section.addEventListener('click', e => highlightNavSection(i))));
document.addEventListener('scroll', checkScroll);

burger.addEventListener('click', toggleMenu);
burgerHRs.forEach(el => el.addEventListener('click', toggleMenu))

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
  console.log(scroll);
  if (scroll < 10) {
    navBar.classList.remove('not-top')
  } else {
    navBar.classList.add('not-top');
  }
}

let double = false;

function toggleMenu(e) {
  e.preventDefault();
  if (double) {
    double = false;
    return;
  }
  double = true;
  burger.className = burger.className === 'menu-showing' ? '' : 'menu-showing';
}

highlightNavSection(0);

console.log(burgerHRs);
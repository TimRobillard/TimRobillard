const logoImgs = [
  '/images/icons-new_gry_blue/react.svg',
  '/images/icons-new_gry_blue/node.svg',
  '/images/icons-new_gry_blue/javascript.svg',
  '/images/icons-new_gry_blue/html.svg',
  '/images/icons-new_gry_blue/css.svg',
  '/images/icons-new_gry_blue/python.svg',
  '/images/icons-new_gry_blue/django.svg',
  '/images/icons-new_gry_blue/illustrator.svg',
  '/images/icons-new_gry_blue/photoshop.svg',
  '/images/icons-new_gry_blue/mongoDB.svg',
  '/images/icons-new_gry_blue/postgresql.svg',
]

const homeLogos = document.querySelector('.logos');
const homeLogoFront = document.querySelector('.logo-front');
const homeLogoBack = document.querySelector('.logo-back');

let logoIntervalId = setInterval(logoSwap, 1500);

let front = true;
let vert = true;

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
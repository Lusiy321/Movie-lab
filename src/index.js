import onSwitch from './js/theme-switch';
import { onSearch } from './js/API/search-movie';
import { mainPage } from './js/render-main';
mainPage();

const closeBtn = document.querySelector('.modal-btn');
const aboutWindow = document.querySelector('.backdrop');
const itemElem = document.querySelector('.gallery');

closeBtn.addEventListener('click', closeAbout);
itemElem.addEventListener('click', openAbout);

function closeAbout() {
  aboutWindow.classList.add('is-hidden');
}

function openAbout(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    console.log('none');
    return;
  }
  aboutWindow.classList.remove('is-hidden');
}

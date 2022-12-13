import { oneMovie } from './API/search-modal';
import { renderModal } from './render-modal';

const closeBtn = document.querySelector('.modal-btn');
const aboutWindow = document.querySelector('.backdrop');
const itemElem = document.querySelector('.gallery');
export const containerModal = document.querySelector('.modal-form');

closeBtn.addEventListener('click', closeAbout);
itemElem.addEventListener('click', openAbout);

export function closeAbout() {
  aboutWindow.classList.add('is-hidden');
}

export function openAbout(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  aboutWindow.classList.remove('is-hidden');
  const id = e.target.dataset.source;
  console.log(id);
  try {
    oneMovie(id).then(res => {
      renderModal(res);
    });
  } catch (e) {
    return Error;
  }
}

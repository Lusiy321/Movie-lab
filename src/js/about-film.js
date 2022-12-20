import { oneMovie } from './API/search-modal';
import { renderModal } from './render-modal';

const closeBtn = document.querySelector('.modal-btn');
const aboutWindow = document.querySelector('.backdrop');
const itemElem = document.querySelector('.gallery');
export const genres = document.querySelector('.modal__genres');
export const containerModal = document.querySelector('.modal-form');

closeBtn.addEventListener('click', closeAbout);
itemElem.addEventListener('click', openAbout);
window.addEventListener('keydown', closeEscape);
aboutWindow.addEventListener('click', closeClick);

export function closeAbout(e) {
  e.preventDefault();
  aboutWindow.classList.add('is-hidden');
  containerModal.innerHTML = null;
}

export function openAbout(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  aboutWindow.classList.remove('is-hidden');
  const id = e.target.dataset.source;
  oneMovie(id).then(res => {
    renderModal(res.data);
  });

  return;
}
export function closeEscape(e) {
  if (e.key === 'Escape') {
    closeAbout(e);
    return;
  }
}
export function closeClick(e) {
  if (e.target === aboutWindow) {
    closeAbout(e);
    return;
  }
}

import { containerModal } from './about-film';

export function renderModal(res) {
  //   console.log(res);
  const markup = res
    .map(
      item =>
        `<div>
              <div><img src="https://image.tmdb.org/t/p/w500${
                item.poster_path
              }" alt="${item.original_title}"></div>
              <div class = "gallery__title">
                  <h2>${item.original_title.toUpperCase()}</h2>
                  <p></p>
              </div>
          </div>`
    )
    .join('');
  containerModal.insertAdjacentHTML('beforeend', markup);
  return;
}

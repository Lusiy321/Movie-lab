import { container } from './API/consts';

export function renderSearch(data) {
  const markup = data.results
    .map(
      item =>
        `<li class="gallery__item">
            <div>
            <img src="https://image.tmdb.org/t/p/w500${
              item.poster_path
            }" alt="${item.title}" data-source="${item.id}"></div>
            <div class="gallery__title">
                <h2>${item.title.toUpperCase()}</h2>
                <p></p>
            </div>
        </li>`
    )
    .join('');
  container.insertAdjacentHTML('beforeend', markup);
  return;
}

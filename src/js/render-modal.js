import { containerModal, genres } from './about-film';

export function renderModal(data) {
  const markup = `<div class="modal__box_img" ><img class="modal__img" src="https://image.tmdb.org/t/p/w500${
    data.poster_path
  }" alt="${data.original_title}"></div>
              <div class = "gallery__title">
                  <h2>${data.original_title.toUpperCase()}</h2>
                  <ul>
                      <li>
                          <p><span>Vote / Votes</span>
                              <span>
                                  <span>${data.vote_average}</span>"/"<span>${
    data.vote_count
  }</span>
                              </span>
                          </p>
                      </li>
                      <li>
                          <p><span>Popularity</span><span>${
                            data.popularity
                          }</span></p>
                      </li>
                      <li>
                          <p><span>Original Title</span><span>${
                            data.original_title
                          }</span></p>
                      </li>
                      <li>
                          <p><span>Genre: </span><span class="modal__genres"></span></p>
                      </li>
                  </ul>
                  <h3>ABOUT</h3>
                  <p>${data.overview}</p>
              </div>`;

  containerModal.insertAdjacentHTML('beforeend', markup);
  const genres = document.querySelector('.modal__genres');
  const genre = data.genres
    .map(item => `<p class="genres">${item.name}</p>`)
    .join('');
  genres.insertAdjacentHTML('beforeend', genre);
  return;
}

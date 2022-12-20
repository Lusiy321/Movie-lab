import { containerModal, genres } from './about-film';

export function renderModal(data) {
  const markup = `<div class="modal__box_img" ><img class="modal__img" src="https://image.tmdb.org/t/p/w500${
    data.poster_path
  }" alt="${data.original_title}"></div>
              <div class = "galleries__title">
                  <h2 class = "modal__title">${data.original_title.toUpperCase()}</h2>
                  <ul class = "modal__desc">
                      <li class = "modal__desc__list">
                          <div><span class = "option__list">Vote / Votes</span></div>
                              <div><span class = "option__vote">${
                                data.vote_average
                              }</span><span class = "option__value"> / ${
    data.vote_count
  }</span></div>
                              
                          
                      </li>
                      <li class = "modal__desc__list">
                          <div><span class = "option__list">Popularity</span></div>
                          <div><span class = "option__value">${
                            data.popularity
                          }</span></div>
                      </li>
                      <li class = "modal__desc__list">
                          <div><span class = "option__list">Original Title</span></div>
                          <div><span class = "option__value">${
                            data.original_title
                          }</span></div>
                      </li>
                      <li class = "modal__desc__list">
                          <div><span class = "option__list">Genre: </span></div>
                          <div><span class="modal__genres"></span></div>
                      </li>
                  </ul>
                  <h3>ABOUT</h3>
                  <p class = "modal__about__text">${data.overview}</p>
                  <div class="modal__button">
                    <button autofocus type="submit" class="modal__btn">ADD TO WATCHED</button>
                    <button type="submit" class="modal__btn">ADD TO QUEUE</button>
                  </div>
              </div>
              `;

  containerModal.insertAdjacentHTML('beforeend', markup);
  const genres = document.querySelector('.modal__genres');
  const genre = data.genres
    .map(item => `<span class="modal__genres">${item.name}</span>`)
    .join('');
  genres.insertAdjacentHTML('beforeend', genre);
  return;
}

import { container } from './API/consts';

export function renderSearch(data) {
  const markup = data.results
    .map(
      item =>
        `<li>
            <div><img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.title}"></div>
            <div>
                <h2>${item.title}</h2>
                <p></p>
            </div>
        </li>`
    )
    .join('');
  container.insertAdjacentHTML('beforeend', markup);
  return;
}

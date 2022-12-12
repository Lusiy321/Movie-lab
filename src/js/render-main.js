import { page } from './API/consts';
import { popularMovie } from './API/main-page-movie';
import { container } from './API/consts';

export async function mainPage() {
  page = 1;
  try {
    await popularMovie(page).then(resp => {
      renderMain(resp.data);
    });
  } catch (e) {
    return Error;
  }
}

export function renderMain(data) {
  const markup = data.results
    .map(
      item =>
        `<li>
            <div><img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.title}"></div>
            <div class = "gallery__title">
                <h2>${item.title}</h2>
                <p></p>
            </div>
        </li>`
    )
    .join('');
  container.insertAdjacentHTML('beforeend', markup);
  return;
}

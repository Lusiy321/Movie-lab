import { page, pagin } from './API/consts';
import { popularMovie } from './API/main-page-movie';
import { container } from './API/consts';

export async function mainPage() {
  try {
    await popularMovie(page).then(resp => {
      const result = resp.data.total_results;
      renderMain(resp.data);
      pagin.reset(result);
    });
    pagin.on('afterMove', async ({ page }) => {
      await popularMovie(page).then(resp => {
        renderMain(resp.data);
      });
    });
  } catch (e) {
    return Error;
  }
  return;
}

export function renderMain(data) {
  container.innerHTML = null;
  const markup = data.results
    .map(
      item =>
        `<li class="gallery__item">
            <div><img src="https://image.tmdb.org/t/p/w500${
              item.poster_path
            }" alt="${item.title}" data-source="${item.id}"></div>
            <div class = "gallery__title">
                <h2>${item.title.toUpperCase()}</h2>
                <p></p>
            </div>
        </li>`
    )
    .join('');
  container.insertAdjacentHTML('beforeend', markup);
  return;
}

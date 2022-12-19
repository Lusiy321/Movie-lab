import { mainPage, renderMain } from '../render-main';
import { error, form, page, container } from './consts';
import { fetchQuery } from './main-page-movie';
import { page, pagin } from './consts';

form.addEventListener('submit', onSearch);

export async function onSearch(e) {
  e.preventDefault();
  const query = form.searchQuery.value;
  e.currentTarget.reset();
  if (!query) {
    error.textContent =
      'Search result not successful. Enter the correct movie name and try again';
    return;
  } else {
    try {
      await fetchQuery(query, page).then(res => {
        error.textContent = `We found ${res.data.total_results} films`;
        const result = res.data.total_results;
        if (res.data.total_results === 0) {
          container.innerHTML = null;
          mainPage();
          return;
        }
        pagin.reset(result);
        container.innerHTML = null;
        renderMain(res.data);
      });
      pagin.on('afterMove', async ({ page }) => {
        await fetchQuery(query, page).then(res => {
          error.textContent = `We found ${res.data.total_results} films`;
          if (res.data.total_results === 0) {
            container.innerHTML = null;
            mainPage();
            return;
          }
          container.innerHTML = null;
          renderMain(res.data);
        });
      });
    } catch (e) {
      return Error;
    }
  }
}

import { URL, KEY } from './consts';

export async function oneMovie(id) {
  try {
    const res = await axios.get(`${URL}movie/${id}?&api_key=${KEY}`);
    return res.JSON('');
  } catch (e) {
    return Error;
  }
}

import axios from 'axios';
import { URL, POPULAR, page, KEY, MOVIE, query } from './consts';

export async function popularMovie(page) {
  try {
    const resp = await axios.get(
      `${URL}${POPULAR}&page=${page}&api_key=${KEY}`
    );
    return resp;
  } catch (e) {
    return Error;
  }
}

export async function fetchQuery(query, page) {
  try {
    const res = await axios.get(
      `${URL}${MOVIE}&api_key=${KEY}&query=${query}$&page=${page}`
    );
    return res;
  } catch (e) {
    return Error;
  }
}

export async function fetchGenre() {
  try {
    const respon = await axios.get(
      `${URL}/genre/movie/list?api_key=${KEY}&language=en-US`
    );
    return respon.data.genres;
  } catch (e) {
    return Error;
  }
}

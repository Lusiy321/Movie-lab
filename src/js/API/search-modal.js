import { URL, KEY, ID } from './consts';
import axios from 'axios';

export async function oneMovie(ID) {
  try {
    const res = await axios.get(`${URL}/movie/${ID}?&api_key=${KEY}`);
    return res;
  } catch (e) {
    return Error;
  }
}

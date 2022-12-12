import { page } from './search';
import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/search/movie?';
const KEY = 'f753ddb9b7c22c6c336bfdc87099e2ae';
const SET = '&query=';
export const PER_PAGE = 40;

export async function fetchImg(value, page) {
  try {
    const res = await axios.get(`${URL}${KEY}${SET}${value}&page=${page}`);
    return res;
  } catch (e) {
    return Error;
  }
}

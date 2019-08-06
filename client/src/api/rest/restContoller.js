import axios from 'axios';
import { restURL } from '../baseURL';

export const getGoods = () => axios.get(`${restURL}/goods`);
export const getOneGoods = id => axios.get(`${restURL}/goods/id/${id}`);
export const loginUser = (formData) => axios.post(`${restURL}/login`, formData);
export const signupUser = (formData) => axios.post(`${restURL}/signup`, formData);


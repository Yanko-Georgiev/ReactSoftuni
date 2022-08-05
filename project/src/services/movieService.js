import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/movies';

export const getAll = () => request.get(baseUrl);
export const getOne = (movieId) => request.get(`${baseUrl}/${movieId}`);
export const create = (movieData) => request.post(baseUrl, movieData);
export const edit = (movieId, movieData) => request.put(`${baseUrl}/${movieId}`, movieData);
export const remove = (movieId) => request.del(`${baseUrl}/${movieId}`);

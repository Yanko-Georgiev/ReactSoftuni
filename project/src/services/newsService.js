import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/ideas';

export const getAll = () => request.get(baseUrl);
export const getOne = (newsId) => request.get(`${baseUrl}/${newsId}`);
export const create = (newsData) => request.post(baseUrl, newsData);
export const edit = (newsId, newsData) => request.put(`${baseUrl}/${newsId}`, newsData);
export const remove = (newsId) => request.del(`${baseUrl}/${newsId}`);
import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export const create = (movieId, comment) =>
    request.post(baseUrl, { movieId, text: comment });

export const getByMovieId = (movieId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`movieId="${movieId}"`);

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
}

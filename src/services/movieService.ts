import {apiService} from "./apiService";
import {urls} from "../constans";
import {IMovieData, IMovieDetails} from "../interfaces";
import {IRes} from "../types";

const movieService = {
    getAll: (page: string): IRes<IMovieData> => apiService.get(urls.movies.base, {params: {page}}),
    getById: (id: number): IRes<IMovieDetails> => apiService.get(urls.movies.byId(id)),
    getByGenreId: (page: string, id: number): IRes<IMovieData> => apiService.get(urls.movies.byGenreId(id), {params: {page}}),
    getTopRated: (): IRes<IMovieData> => apiService.get(urls.movies.topRated),
    getUpcoming: (): IRes<IMovieData> => apiService.get(urls.movies.upcoming)
};

export {movieService};
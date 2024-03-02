import {apiService} from "./apiService";
import {urls} from "../constans";
import {IMovieData} from "../interfaces";
import {IRes} from "../types";

const movieService = {
    getAll: (page: string): IRes<IMovieData> => apiService.get(urls.movies.base, {params: {page}}),
    getByGenreId: (page: string, id: number): IRes<IMovieData> => apiService.get(urls.movies.byGenreId(id), {params: {page}})
};

export {movieService};
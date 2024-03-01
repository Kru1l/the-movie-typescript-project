import {apiService} from "./apiService";
import {urls} from "../constans";
import {IMovieDetails} from "../interfaces";
import {IRes} from "../types";

const movieDetailsService = {
    getById: (id: number): IRes<IMovieDetails> => apiService.get(urls.movies.byId(id))
};

export {movieDetailsService};
import {apiService} from "./apiService";
import {urls} from "../constans";
import {IData} from "../interfaces";
import {IRes} from "../types";

const movieService = {
    getAll: (page: string): IRes<IData> => apiService.get(urls.movies.base, {params: {page}})
};

export {movieService};
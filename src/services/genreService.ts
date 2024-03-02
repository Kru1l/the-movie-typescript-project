import {apiService} from "./apiService";
import {urls} from "../constans";
import {IRes} from "../types";
import {IGenreData} from "../interfaces";

const genreService = {
    getAll: (): IRes<IGenreData> => apiService.get(urls.genres)
};

export {genreService};
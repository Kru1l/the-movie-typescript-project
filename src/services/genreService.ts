import {apiService} from "./apiService";
import {urls} from "../constans";
import {IRes} from "../types";
import {IGenre} from "../interfaces";

const genreService = {
    getAll: (): IRes<IGenre[]> => apiService.get(urls.genres)
};

export {genreService};
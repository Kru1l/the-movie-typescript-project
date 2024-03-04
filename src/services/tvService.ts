import {apiService} from "./apiService";
import {urls} from "../constans";
import {IMovieData, IMovieDetails} from "../interfaces";
import {IRes} from "../types";

const tvService = {
    getTopRated: (): IRes<IMovieData> => apiService.get(urls.tv.base),
    getById: (id: number): IRes<IMovieDetails> => apiService.get(urls.tv.byId(id))
};

export {tvService};
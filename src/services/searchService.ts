import {apiService} from "./apiService";
import {urls} from "../constans";

const searchService = {
    searchMoviesByQuery: (page: string, query: string) => apiService.get(urls.search(query), {params: {page}})
}

export {searchService};
const baseURL = 'https://api.themoviedb.org/3';
const posterURL = 'https://image.tmdb.org/t/p/w200';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWM1MTkwZTQyY2FiNzFkYTBmNTM0ODExMDU4Njk2OSIsInN1YiI6IjY1ZGYzM2NjYjM5ZTM1MDE0OTJmNDkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gSe2rjHKfJBlXpgTHbDEwH43R9MtFBMVc5rWDCdlz8U';

const discover = '/discover';
const movie = '/movie';

const genre = '/genre';
const list = '/list';
const with_genres = '?with_genres='

const search = '/search';
const query = '?query=';


const urls = {
    movies: {
        base: discover + movie,
        byId: (id: number): string => `${movie}/${id}`,
        byGenreId: (id: number): string => `${discover}/${movie}${with_genres}${id}`
    },
    genres: genre + movie + list,
    search: (name: string) =>  search + movie + query + name
};

export {
    baseURL,
    posterURL,
    token,
    urls
};
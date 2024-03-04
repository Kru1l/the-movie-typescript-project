const baseURL = 'https://api.themoviedb.org/3';
const posterURL = 'https://image.tmdb.org/t/p/w200';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWM1MTkwZTQyY2FiNzFkYTBmNTM0ODExMDU4Njk2OSIsInN1YiI6IjY1ZGYzM2NjYjM5ZTM1MDE0OTJmNDkwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gSe2rjHKfJBlXpgTHbDEwH43R9MtFBMVc5rWDCdlz8U';

const discover = '/discover';
const list = '/list';

const movie = '/movie';
const with_genres = '?with_genres=';
const top_rated = '/top_rated';
const upcoming = '/upcoming';

const tv = '/tv';

const genre = '/genre';

const search = '/search';
const query = '?query=';


const urls = {
    movies: {
        base: discover + movie,
        byId: (id: number): string => `${movie}/${id}`,
        byGenreId: (id: number): string => `${discover}/${movie}${with_genres}${id}`,
        topRated: movie + top_rated,
        upcoming: movie + upcoming

    },
    tv: {
        base: tv + top_rated,
        byId: (id: number): string => `${tv}/${id}`,
    },
    genres: genre + movie + list,
    search: (name: string) => search + movie + query + name
};

export {
    baseURL,
    posterURL,
    token,
    urls
};
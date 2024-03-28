import {useEffect, useState} from "react";

import home from '../../home.module.css';
import {TopMovie} from "../TopMovie/TopMovie";
import {IMovie} from "../../../../interfaces";
import {movieService} from "../../../../services";
import {useThemeContext} from "../../../../hooks";

const TopMovies = () => {
    const [topMovies, setTopMovies] = useState<IMovie[]>(null);
    const {isDarkMode} = useThemeContext();

    useEffect(() => {
        document.forms.namedItem('form').reset();
        movieService.getTopRated().then(({data}) => setTopMovies(data.results.slice(0, 5)))
            .catch((e) => console.error(e));
    }, []);

    return (
        <div className={`${home.Wrap}  ${!isDarkMode && home.light}`}>
            <h1 className={home.title} style={{textAlign: 'end'}}>Top Rated Movies</h1>
            <div className={home.movies}>
                {topMovies && topMovies.map(movie =>
                    <TopMovie
                        key={movie.id}
                        movie={movie}
                    />
                )}
            </div>
        </div>
    );
};

export {TopMovies};
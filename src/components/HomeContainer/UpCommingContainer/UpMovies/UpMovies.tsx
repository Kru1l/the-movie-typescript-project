import {useEffect, useState} from "react";

import home from '../../home.module.css';
import {UpMovie} from "../UpMovie/UpMovie";
import {IMovie} from "../../../../interfaces";
import {movieService} from "../../../../services";
import {useThemeContext} from "../../../../hooks";

const UpMovies = () => {
    const [upMovies, setUpMovies] = useState<IMovie[]>(null);
    const {isDarkMode} = useThemeContext();

    useEffect(() => {
        document.forms.namedItem('form').reset();
        movieService.getUpcoming().then(({data}) => setUpMovies(data.results.slice(0, 5)))
            .catch((e) => console.error(e));
    }, []);

    return (
        <div className={`${home.Wrap}  ${!isDarkMode && home.light}`}>
            <h1 className={home.title}>Coming Soon</h1>
            <div className={home.movies}>
                {upMovies && upMovies.map(movie =>
                    <UpMovie
                        key={movie.id}
                        movie={movie}
                    />
                )}
            </div>
        </div>
    );
};

export {UpMovies};
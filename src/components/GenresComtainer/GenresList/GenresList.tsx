import {useEffect, useState} from "react";

import styles from './GenresList.module.css';
import {IGenre} from "../../../interfaces";
import {genreService} from "../../../services";
import {Genre} from "../Genre/Genre";
import {useThemeContext} from "../../../hooks";

const GenresList = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const {isDarkMode} = useThemeContext();

    useEffect(() => {
        document.forms.namedItem('form').reset();
        genreService.getAll().then(({data}) => setGenres(data.genres))
            .catch((e) => console.error(e))
    }, []);

    return (
        <div className={`${styles.Genres} ${!isDarkMode && styles.light}`}>
            {genres && genres.map(genre =>
                <Genre
                    key={genre.id}
                    genre={genre}
                />)}
        </div>
    );
};

export {GenresList};
import {useEffect, useState} from 'react';
import {Pagination, Stack, ThemeProvider} from "@mui/material";

import styles from './MoviesList.module.css';
import {IMovieData} from "../../../interfaces";
import {MovieCard} from "../MovieCard/MovieCard";
import {usePageQuery, useThemeContext} from "../../../hooks";
import {movieService} from "../../../services";

const MoviesList = () => {
    const [moviesRes, setMoviesRes] = useState<IMovieData>(null);
    const {page, pageChange} = usePageQuery();
    const {theme, setTheme, toggleTheme} = useThemeContext();

    useEffect(() => {
        movieService.getAll(`${page}`).then(({data}) => setMoviesRes(data))
            .catch((e) => console.error(e));
    }, [page, theme]);

    return (
        <div className={styles.MoviesList}>
            <div className={styles.movies}>
                {moviesRes?.results.map(movie => <MovieCard
                    key={movie.id}
                    movie={movie}
                />)}
            </div>

            {moviesRes?.total_pages > 1 && <Stack spacing={2} color={"white"} borderColor={"red"}>
                <ThemeProvider theme={theme}>
                {/*<button onClick={toggleTheme}>Switch</button>*/}
                <Pagination count={500} showFirstButton showLastButton page={+page} onChange={pageChange}
                            color={"primary"}
                            variant="outlined"/>
                </ThemeProvider>
            </Stack>}
        </div>
    );
};

export {MoviesList};
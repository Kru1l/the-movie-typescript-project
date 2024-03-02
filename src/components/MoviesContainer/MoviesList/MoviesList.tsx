import {useEffect, useState} from 'react';
import {Pagination, Stack, ThemeProvider} from "@mui/material";

import styles from './MoviesList.module.css';
import {IMovieData} from "../../../interfaces";
import {MovieCard} from "../MovieCard/MovieCard";
import {usePageQuery, useThemeContext} from "../../../hooks";
import {movieService} from "../../../services";

const MoviesList = () => {
    const [moviesRes, setMoviesRes] = useState<IMovieData>(null);
    const {isDarkMode} = useThemeContext();
    const {page, pageChange} = usePageQuery();
    const {theme} = useThemeContext();

    useEffect(() => {
        document.forms.namedItem('form').reset();
        movieService.getAll(`${page}`).then(({data}) => setMoviesRes(data))
            .catch((e) => console.error(e));
    }, [page, theme]);

    return (
        <div className={`${styles.MoviesList}  ${!isDarkMode && styles.light}`}>
            <div className={styles.movies}>
                {moviesRes?.results.map(movie =>
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />)}
            </div>

            {moviesRes?.total_pages > 1 &&
                <ThemeProvider theme={theme}>
                    <Stack spacing={2} color={"white"} borderColor={"red"} width={"100%"}
                           sx={{justifyContent: 'center', alignItems: 'center'}}>
                        <Pagination count={500} showFirstButton showLastButton page={+page} onChange={pageChange}
                                    color={"primary"}
                                    variant="outlined"/>
                    </Stack>
                </ThemeProvider>}
        </div>
    );
};

export {MoviesList};
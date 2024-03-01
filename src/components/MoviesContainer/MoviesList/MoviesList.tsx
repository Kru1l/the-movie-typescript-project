import {useEffect, useState} from 'react';
import {createTheme, Pagination, Stack, ThemeProvider} from "@mui/material";

import styles from './MoviesList.module.css';
import {IData} from "../../../interfaces";
import {MovieCard} from "../MovieCard/MovieCard";
import {usePageQuery} from "../../../hooks";
import {movieService} from "../../../services";

const MoviesList = () => {
    const [moviesRes, setMoviesRes] = useState<IData>(null);

    const {page, pageChange} = usePageQuery();
    
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#ffffff',
            },
            secondary: {
                main: '#ff0000',
            },
        },
    });

    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#3f51b5', // основний колір для світлої теми
            },
            secondary: {
                main: '#f50057', // додатковий колір для світлої теми
            },
        },
    });

    const [theme, setTheme] = useState(darkTheme);

    const toggleTheme = (): void => {
        setTheme(theme !== lightTheme ? lightTheme : darkTheme);
    };

    useEffect(() => {
        movieService.getAll(`${page}`).then(({data}) => setMoviesRes(data))
            .catch((e) => console.error(e));
    }, [page, theme]);

    return (
        <div className={styles.MoviesList}>
            {moviesRes?.results.map(movie => <MovieCard
                key={movie.id}
                movie={movie}
            />)}

            <Stack spacing={2} color={"white"} borderColor={"red"}>
                <ThemeProvider theme={theme}>
                    <button onClick={toggleTheme}>Switch</button>
                    <Pagination count={500} showFirstButton showLastButton page={+page} onChange={pageChange}
                                color={"primary"}
                                variant="outlined"/>
                </ThemeProvider>
            </Stack>
        </div>
    );
};

export {MoviesList};
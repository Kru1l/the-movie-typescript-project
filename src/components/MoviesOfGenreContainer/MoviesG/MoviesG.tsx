import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Pagination, Stack} from "@mui/material";

import styles from './MoviesG.module.css';
import {movieService} from "../../../services";
import {IMovieData} from "../../../interfaces";
import {usePageQuery} from "../../../hooks";
import {MovieG} from "../MovieG/MovieG";

const MoviesG = () => {
    const [genreMoviesRes, setGenreMoviesRes] = useState<IMovieData>(null);
    const {page, pageChange} = usePageQuery();
    const {id} = useParams();

    console.log(genreMoviesRes?.results)

    useEffect(() => {
        movieService.getByGenreId(`${page}`, +id).then(({data}) => setGenreMoviesRes(data))
            .catch((e) => console.error(e));
    }, [id, page]);

    return (
        <div className={styles.MoviesOfG}>
            <div className={styles.moviesG}>
                {genreMoviesRes?.results && genreMoviesRes.results.map(movie =>
                    <MovieG
                        key={movie.id}
                        movie={movie}
                    />)}
            </div>

            {genreMoviesRes?.total_pages > 1 && <Stack spacing={2} color={"white"} borderColor={"red"}>
                {/*<ThemeProvider theme={''}>*/}
                {/*<button onClick={toggleTheme}>Switch</button>*/}
                <Pagination count={500} showFirstButton showLastButton page={+page} onChange={pageChange}
                            color={"primary"}
                            variant="outlined"/>
                {/*</ThemeProvider>*/}
            </Stack>}
        </div>
    );
};

export {MoviesG};
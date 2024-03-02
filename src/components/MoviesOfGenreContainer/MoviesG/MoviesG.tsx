import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Pagination, Stack, ThemeProvider} from "@mui/material";

import styles from './MoviesG.module.css';
import {movieService} from "../../../services";
import {IMovieData} from "../../../interfaces";
import {usePageQuery} from "../../../hooks";
import {MovieG} from "../MovieG/MovieG";

const MoviesG = () => {
    const [genreMoviesRes, setGenreMoviesRes] = useState<IMovieData>(null);
    const {page, pageChange} = usePageQuery();
    const {id} = useParams();

    console.log(page)

    useEffect(() => {
        movieService.getByGenreId(`${page ? page : 1}`, +id).then(({data}) => setGenreMoviesRes(data))
            .catch((e) => console.error(e));
    }, [id, page]);

    return (
        <div className={styles.MoviesG}>
            <div className={styles.movies}>
                {genreMoviesRes?.results && genreMoviesRes.results.map(movie =>
                    <MovieG
                        key={movie.id}
                        movie={movie}
                    />)}
            </div>

            {genreMoviesRes?.total_pages > 1 &&
                <ThemeProvider theme={''}>
                    <Stack spacing={2} color={"white"} borderColor={"red"} width={"100%"}
                           sx={{justifyContent: 'center', alignItems: 'center'}}>
                        <Pagination count={500} showFirstButton showLastButton page={page ? +page : 1}
                                    onChange={pageChange}
                                    color={"primary"}
                                    variant="outlined"/>
                    </Stack>
                </ThemeProvider>}
        </div>
    );
};

export {MoviesG};
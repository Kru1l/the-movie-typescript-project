import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Pagination, Stack, ThemeProvider} from "@mui/material";

import main from '../../main.module.css';
import {MovieG} from "../MovieG/MovieG";
import {movieService} from "../../../services";
import {IMovieData} from "../../../interfaces";
import {usePageQuery, useThemeContext} from "../../../hooks";

const MoviesG = () => {
    const [genreMoviesRes, setGenreMoviesRes] = useState<IMovieData>(null);
    const {isDarkMode, theme} = useThemeContext();
    const {page, pageChange} = usePageQuery();
    const {id} = useParams();

    useEffect(() => {
        movieService.getByGenreId(`${page ? page : 1}`, +id).then(({data}) => setGenreMoviesRes(data))
            .catch((e) => console.error(e));
    }, [id, page]);

    return (
        <div className={main.Wrap}>
            <div className={`${main.movies} ${!isDarkMode && main.light}`}>
                {genreMoviesRes?.results && genreMoviesRes.results.map(movie =>
                    <MovieG
                        key={movie.id}
                        movie={movie}
                    />)}
            </div>

            {genreMoviesRes?.total_pages > 1 &&
                <ThemeProvider theme={theme}>
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
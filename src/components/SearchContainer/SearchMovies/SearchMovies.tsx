import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Pagination, Stack, ThemeProvider} from "@mui/material";

import main from '../../main.module.css';
import {IMovieData} from "../../../interfaces";
import {SearchMovie} from "../SearchMovie/SearchMovie";
import {usePageQuery, useThemeContext} from "../../../hooks";
import {movieService, searchService} from "../../../services";

const SearchMovies = () => {
    const [searchRes, setSearchRes] = useState<IMovieData>(null);
    const {theme, isDarkMode} = useThemeContext();
    const {page, pageChange} = usePageQuery();
    const {query} = useParams();

    useEffect(() => {
        if (query) {
            searchService.searchMoviesByQuery(page, query).then(({data}) => setSearchRes(data))
                .catch((e) => console.error(e));
        } else {
            movieService.getAll(page).then(({data}) => setSearchRes(data))
                .catch((e) => console.error(e));
        }
    }, [query, page]);


    return (
        <div className={main.Wrap}>
            <div className={`${main.movies} ${!isDarkMode && main.light}`}>
                {searchRes?.results && searchRes.results.map(movie =>
                    <SearchMovie
                        key={movie.id}
                        movie={movie}/>)}
            </div>

            {searchRes?.total_pages > 1 &&
                <ThemeProvider theme={theme}>
                    <Stack spacing={2} color={"white"} borderColor={"red"} width={"100%"}
                           sx={{justifyContent: 'center', alignItems: 'center'}}>
                        <Pagination count={searchRes.total_pages < 500 ? searchRes.total_pages : 500}
                                    showFirstButton
                                    showLastButton page={+page}
                                    onChange={pageChange}
                                    color={"primary"}
                                    variant="outlined"/>
                    </Stack>
                </ThemeProvider>}

        </div>
    );
};

export {SearchMovies};
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {MovieDetails} from "../../components";
import {IMovieDetails} from "../../interfaces";
import {movieService, tvService} from "../../services";
import {useAppLocation, useThemeContext} from "../../hooks";


const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState<IMovieDetails>(null);
    const {setIsBackOn} = useThemeContext();
    const {state} = useAppLocation<{ status: boolean }>();
    const {id} = useParams();

    useEffect(() => {
        setIsBackOn(true);
        if (state?.status) {
            tvService.getById(+id).then(({data}) => setMovieDetails(data))
                .catch((e) => console.error(e));
        } else {
            movieService.getById(+id).then(({data}) => setMovieDetails(data))
                .catch((e) => console.error(e));
        }
    }, [id, state, setIsBackOn]);

    return (
        <div>
            {movieDetails && <MovieDetails movieDetails={movieDetails} status={state?.status}/>}
        </div>
    );
};

export {MovieDetailsPage};
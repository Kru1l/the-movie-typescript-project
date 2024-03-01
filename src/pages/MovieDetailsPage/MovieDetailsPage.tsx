import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import styles from './MovieDetailsPage.module.css';
import {MovieDetails} from "../../components";
import {IMovieDetails} from "../../interfaces";
import {movieDetailsService} from "../../services";


const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState<IMovieDetails>(null);
    const {id} = useParams();

    useEffect(() => {
        movieDetailsService.getById(+id).then(({data}) => setMovieDetails(data))
            .catch((e) => console.error(e))
    }, [id]);

    return (
        <div className={styles.DetailsPage}>
            {movieDetails && <MovieDetails movieDetails={movieDetails}/>}
        </div>
    );
};

export {MovieDetailsPage};
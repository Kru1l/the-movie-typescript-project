import {FC} from 'react';

import styles from './MovieCard.module.css';
import {IMovie} from "../../../interfaces";
import {posterURL} from "../../../constans";
import {useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie
}

const MovieCard: FC<IProps> = ({movie}) => {
    const {id, title, poster_path} = movie;
    const navigate = useNavigate();

    const toDetails = (): void => {
        navigate(`/movies/${id}`)
    };

    return (
        <div className={styles.MovieCard} onClick={toDetails}>
            <img src={`${posterURL}${poster_path}`} alt={title}/>
        </div>
    );
};

export {MovieCard};
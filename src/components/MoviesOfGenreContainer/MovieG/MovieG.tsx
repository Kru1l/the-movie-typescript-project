import styles from './MovieG.module.css';

import {FC} from 'react';
import {posterURL} from "../../../constans";
import {IMovie} from "../../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie
}

const MovieG: FC<IProps> = ({movie}) => {
    const {id, title, poster_path} = movie;
    const navigate = useNavigate();

    const toDetails = (): void => {
        navigate(`/movies/${id}`);
    }

    return (
        <div className={styles.MovieG} onClick={toDetails}>
            <img src={`${posterURL}${poster_path}`} alt={title}/>
            <p>{title}</p>
        </div>
    );
};

export {MovieG};

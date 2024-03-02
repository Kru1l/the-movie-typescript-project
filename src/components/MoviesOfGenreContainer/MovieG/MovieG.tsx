import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import styles from './MovieG.module.css';
import {posterURL} from "../../../constans";
import {IMovie} from "../../../interfaces";

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

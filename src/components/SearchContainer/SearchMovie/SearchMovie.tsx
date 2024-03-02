import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import styles from './SearchMovie.module.css';
import {posterURL} from "../../../constans";
import {IMovie} from "../../../interfaces";

interface IProps {
    movie: IMovie;
}

const SearchMovie: FC<IProps> = ({movie}) => {
    const {id, title, poster_path} = movie;
    const navigate = useNavigate();

    const toDetails = (): void => {
        document.forms.namedItem('form').reset();
        navigate(`/movies/${id}`)
    };

    return (
        <div className={styles.SearchMovie} onClick={toDetails}>
            <img src={`${posterURL}${poster_path}`} alt={title}/>
            <p>{title}</p>
        </div>
    );
};

export {SearchMovie};
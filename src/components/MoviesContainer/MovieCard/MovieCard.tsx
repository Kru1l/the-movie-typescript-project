import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import main from '../../main.module.css';
import {IMovie} from "../../../interfaces";
import {posterURL} from "../../../constans";

interface IProps {
    movie: IMovie
}

const MovieCard: FC<IProps> = ({movie}) => {
    const {id, title, poster_path} = movie;
    const navigate = useNavigate();

    const toDetails = (): void => {
        navigate(`/movies/${id}`);
    };

    return (
        <div className={main.Movie} onClick={toDetails}>
            <img src={`${posterURL}${poster_path}`} alt={title}/>
            <p>{title}</p>
        </div>
    );
};

export {MovieCard};
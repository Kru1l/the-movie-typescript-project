import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import home from '../../home.module.css';
import {IMovie} from "../../../../interfaces";
import {posterURL} from "../../../../constans";

interface IProps {
    movie: IMovie
}

const UpMovie: FC<IProps> = ({movie}) => {
    const {id, title, poster_path} = movie;
    const navigate = useNavigate();

    const toDetails = () => {
        navigate(`/movies/${id}`);
    };

    return (
        <div className={home.Movie} onClick={() => toDetails()}>
            <img src={`${posterURL}${poster_path}`} alt={title}/>
        </div>
    );
};

export {UpMovie};
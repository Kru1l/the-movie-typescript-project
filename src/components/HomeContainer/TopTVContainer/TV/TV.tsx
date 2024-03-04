import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import home from '../../home.module.css';
import {IMovie} from "../../../../interfaces";
import {posterURL} from "../../../../constans";


interface IProps {
    tv: IMovie;
}

const TV: FC<IProps> = ({tv}) => {
    const {id, title, poster_path} = tv;
    const navigate = useNavigate();

    const toDetails = () => {
        navigate(`/movies/${id}`, {state: {status: true}});
    };

    return (
        <div className={home.Movie} onClick={() => toDetails()}>
            <img src={`${posterURL}${poster_path}`} alt={title}/>
        </div>
    );
};

export {TV};
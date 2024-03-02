import {FC} from 'react';

import styles from './Genre.module.css';
import {IGenre} from "../../../interfaces";
import {NavLink} from "react-router-dom";

interface IProps {
    genre: IGenre;
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;

    return (
        <div className={styles.Genre}>
            <NavLink to={`/genres/${id}`}>{name}</NavLink>
        </div>
    );
};

export {Genre};
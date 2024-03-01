import {FC} from 'react';

import styles from './MovieDetails.module.css';
import {posterURL} from "../../../constans";
import {IMovieDetails} from "../../../interfaces";

interface IProps {
    movieDetails: IMovieDetails
}

const MovieDetails: FC<IProps> = ({movieDetails}) => {
    const {
        title,
        poster_path,
        release_date,
        runtime,
        overview,
        genres,
        budget,
        production_companies
    } = movieDetails;

    console.log(genres)

    return (
        <div className={styles.Details}>
            <main>
                <section className={styles.left}>
                    <img id={styles.poster} src={`${posterURL}/${poster_path}`} alt={title}/>
                </section>

                <section className={styles.right}>
                    <h1 id={styles.title}>{title}</h1>
                    <p>{release_date.split('-').slice()[0]} {runtime}m</p>
                    <p>{overview}</p>
                    <p>Studio {production_companies[0].name}</p>
                </section>
            </main>
        </div>
    );
};

export {MovieDetails};
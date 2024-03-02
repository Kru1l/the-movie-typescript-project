import {Outlet} from "react-router-dom";

import styles from './GenresPage.module.css';
import {GenresList} from "../../components";


const GenresPage = () => {

    return (
        <div className={styles.GenresPage}>
            <GenresList/>
            <Outlet/>
        </div>
    );
};

export {GenresPage};
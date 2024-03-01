import {Outlet} from "react-router-dom";

import styles from './MainLayout.module.css';
import {Header} from "../components";

const MainLayout = () => {

    return (
        <div className={styles.MainLayout}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
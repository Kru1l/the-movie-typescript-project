import {NavLink} from "react-router-dom";
import {FormControlLabel, ThemeProvider} from "@mui/material";

import styles from './Header.module.css';
import {useMuiSwitch, useThemeContext} from "../../hooks";
import {SearchForm} from "../SearchContainer";

const Header = () => {
    const {MaterialUISwitch} = useMuiSwitch();
    const {theme, toggleTheme, isDarkMode} = useThemeContext();

    return (
        <div className={`${styles.Header}  ${!isDarkMode && styles.light}`}>

            <img className={styles.logo} src={'https://www.plex.tv/wp-content/themes/plex/assets/img/plex-logo.svg'}
                 alt={'Plex.tv'}/>

            <section className={styles.search}>
                <SearchForm/>
            </section>

            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
            </nav>

            <ThemeProvider theme={theme}>
                <FormControlLabel
                    control={<MaterialUISwitch checked={isDarkMode} onChange={toggleTheme}/>}
                    label={''}
                />
            </ThemeProvider>

            <span id={styles.username}>Kru1l</span>
            <img className={styles.user} src={'https://img.icons8.com/?size=48&id=AZazdsitsrgg&format=png'} alt="User"/>
        </div>
    );
};

export {Header};
import {NavLink} from "react-router-dom";
import {FormControlLabel, ThemeProvider} from "@mui/material";

import styles from './Header.module.css';
import {useMuiSwitch, useThemeContext} from "../../hooks";

const Header = () => {
    const {MaterialUISwitch} = useMuiSwitch();
    const {theme, setTheme, toggleTheme, isDarkMode, setIsDarkMode} = useThemeContext();

    // if (!isDarkMode) {
    //     document.body.classList.add('light');
    // } else {
    //     document.body.classList.remove('light');
    // }

    return (
        <div className={`${styles.Header}  ${!isDarkMode && styles.light}`}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/movies'}>Movies</NavLink>
            <NavLink to={'/genres'}>Genres</NavLink>

            <ThemeProvider theme={theme}>
                <FormControlLabel
                    control={<MaterialUISwitch sx={{m: 1,}} checked={isDarkMode} onChange={toggleTheme}/>}
                    label={isDarkMode ? 'Dark' : 'Light'}
                />
            </ThemeProvider>
        </div>
    );
};

export {Header};
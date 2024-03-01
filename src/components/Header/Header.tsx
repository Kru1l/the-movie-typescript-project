import {NavLink} from "react-router-dom";
import {FormControlLabel} from "@mui/material";

import styles from './Header.module.css';
import {useMuiSwitch} from "../../hooks";

const Header = () => {
    const {MaterialUISwitch} = useMuiSwitch();

    return (
        <div className={styles.Header}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/movies'}>Movies</NavLink>
            <NavLink to={''}>Genres</NavLink>

            <FormControlLabel
                control={<MaterialUISwitch sx={{m: 1}} defaultChecked/>}
                label="Dark"
            />
        </div>
    );
};

export {Header};
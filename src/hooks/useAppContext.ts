import {useContext} from "react";

import {Context, ThemeContext} from "../hoc";

const useAppContext = () => useContext(Context);
const useThemeContext = () => useContext(ThemeContext);

export {
    useAppContext,
    useThemeContext
};
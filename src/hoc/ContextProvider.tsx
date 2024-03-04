import {createContext, FC, PropsWithChildren, useEffect, useState} from 'react';
import {createTheme} from "@mui/material";

const ThemeContext = createContext(null);

interface IProps extends PropsWithChildren {
}

const ContextProvider: FC<IProps> = ({children}) => {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#DB9F3DFF',
            }
        }
    });

    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#DB9F3DFF', // основний колір для світлої теми
            }
        },
    });

    const [theme, setTheme] = useState(darkTheme);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(
        JSON.parse(localStorage.getItem('isDarkMode')) || null
    );
    const [isBackOn, setIsBackOn] = useState<boolean>(null);

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
        setTheme(isDarkMode ? darkTheme : lightTheme);
        document.body.classList.toggle('light', !isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = (): void => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme, isDarkMode, setIsDarkMode, isBackOn, setIsBackOn}}>
            {children}
        </ThemeContext.Provider>
    );
};

export {
    ContextProvider,
    ThemeContext
};
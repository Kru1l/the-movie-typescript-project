import {createContext, FC, PropsWithChildren, useEffect, useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material";

const ThemeContext = createContext(null);

interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#DB9F3DFF',
            },
            secondary: {
                main: '#ff0000',
            }
        },
    });

    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#DB9F3DFF', // основний колір для світлої теми
            },
            secondary: {
                main: '#f50057', // додатковий колір для світлої теми
            }
        },
    });

    const [theme, setTheme] = useState(darkTheme);
    const [isDarkMode, setIsDarkMode] = useState(
        JSON.parse(localStorage.getItem('isDarkMode')) || null
    );

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
        setTheme(isDarkMode ? darkTheme : lightTheme);
        document.body.classList.toggle('light', !isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = (): void => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme, isDarkMode, setIsDarkMode}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export {
    ContextProvider,
    ThemeContext
};

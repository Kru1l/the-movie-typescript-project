import {createContext, FC, PropsWithChildren, useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material";

const Context = createContext<{}>(null);
const ThemeContext = createContext(null);

interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#ffffff',
            },
            secondary: {
                main: '#ff0000',
            },
            background: {
                default: "url(/public/images/dark-background.jpg)",
                paper: '#333333',
            }
        },
    });

    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#3f51b5', // основний колір для світлої теми
            },
            secondary: {
                main: '#f50057', // додатковий колір для світлої теми
            },
            background: {
                default: '#000000',
                paper: '#333333',
            }
        },
    });

    const [theme, setTheme] = useState(darkTheme);
    const [isDarkMode, setIsDarkMode] = useState(true);


    const toggleTheme = (): void => {
        setIsDarkMode(!isDarkMode);
        setTheme(isDarkMode ? lightTheme : darkTheme);
    };

    return (
        <Context.Provider value={'#'}>
            <ThemeContext.Provider value={{theme, setTheme, toggleTheme, isDarkMode, setIsDarkMode}}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </ThemeContext.Provider>
        </Context.Provider>
    );
};

export {
    ContextProvider,
    ThemeContext,
    Context
};

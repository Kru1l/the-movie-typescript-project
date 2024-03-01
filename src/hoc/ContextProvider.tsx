import {createContext, FC, PropsWithChildren} from 'react';

const Context = createContext(null);

interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {

    return (
        <Context.Provider value={''}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};
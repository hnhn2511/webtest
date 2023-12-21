'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import GetAPIvideohome from '../compunent/appGetAPIvideohome';

interface AppProviderProps {
    children: ReactNode;
}

export const AppContext = createContext<ContextProps>({

    getinput: '',
    setInput: (): string => '',
    // Get Data Videohome
    getdataVideohome: null,

});

export const AppProvider = ({ children }: AppProviderProps) => {

    // State Input
    const [getinput, setInput] = useState('');

    // State API
    const [getdataVideohome, setGetdataVideohome] = useState<DataFromAPIvideohome | null>(null);

    const apiDataVideohome = GetAPIvideohome();
 
    useEffect(() => {
        if ( apiDataVideohome) {
            setGetdataVideohome(apiDataVideohome);
        }
    }, [apiDataVideohome]);


    return (
        <AppContext.Provider value={{
            getinput, setInput, getdataVideohome
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

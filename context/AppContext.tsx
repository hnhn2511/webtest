'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import GetAPIvideohome from '../compunent/appGetAPIvideohome';
import GetAPImangahome from '../compunent/appGetAPImangahome';

interface AppProviderProps {
    children: ReactNode;
}

export const AppContext = createContext<ContextProps>({

    getinput: '',
    setInput: (): string => '',
    // Get Data Videohome
    getdataVideohome: null,
     // Get Data Mangahome
     getdataMangahome: null

});

export const AppProvider = ({ children }: AppProviderProps) => {

    const router = useRouter();
    const pathname = usePathname();


    // State Input
    const [getinput, setInput] = useState('');

    // State API
    const [getdataVideohome, setGetdataVideohome] = useState<DataFromAPIvideohome | null>(null);
    const [getdataMangahome, setGetdataMangahome] = useState<DataFromAPImangahome | null>(null);

    const apiDataVideohome = GetAPIvideohome();
    const apiDataMangahome = GetAPImangahome();
 
    useEffect(() => {
        if ( apiDataVideohome && apiDataMangahome ) {
            setGetdataVideohome(apiDataVideohome);
            setGetdataMangahome(apiDataMangahome);
        }
    }, [apiDataVideohome,apiDataMangahome]);


    return (
        <AppContext.Provider value={{
            getinput, setInput, getdataVideohome , getdataMangahome
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

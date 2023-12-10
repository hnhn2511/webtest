'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import GetAPI from '../compunent/appGetAPI';
import GetAPImanga from '../compunent/appGetAPImanga';

interface AppProviderProps {
    children: ReactNode;
}

export const AppContext = createContext<ContextProps>({

    getinput: '',
    setInput: (): string => '',
    // Get Data video
    getdataVideo: null,
    // Get Data Manga
    getdataManga: null

});

export const AppProvider = ({ children }: AppProviderProps) => {

    const router = useRouter();
    const pathname = usePathname();


    // State Input
    const [getinput, setInput] = useState('');

    // State API
    const [getdataVideo, setGetdataVideo] = useState<DataFromAPI | null>(null);
    const [getdataManga, setGetdataManga] = useState<DataFromAPImanga | null>(null);

    const apiData = GetAPI();
    const apiDataManga = GetAPImanga();

 
    useEffect(() => {
        if (apiData) {
            setGetdataVideo(apiData);
        }
    }, [apiData]);
    useEffect(() => {
        if (apiDataManga) {
            setGetdataManga(apiDataManga);
        }
    }, [apiDataManga]);



    return (
        <AppContext.Provider value={{
            getinput, setInput, getdataVideo , getdataManga
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

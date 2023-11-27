'use client'

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import facebook from '../styles/facebook.module.css';
import { useRouter, usePathname } from 'next/navigation';
import useSWR from 'swr';

interface AppProviderProps {
    children: ReactNode;
}

export const AppContext = createContext<ContextProps>({

    getinput: '',
    setInput: (): string => '',
    data: null,
    error: null,
    isLoading: false,
    btn1: '',
    btn2: '',
    handleBtn1: () => { },
    handleBtn2: () => { },
});

export const AppProvider = ({ children }: AppProviderProps) => {

    // GET API
    const fetcher = (url: string) => fetch(url, {
        method: 'GET',

    }).then(res => res.json())
    const { data, error, isLoading } = useSWR(process.env.NEXT_PUBLIC_DATABASE_URL, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });


    const router = useRouter();
    const pathname = usePathname();

    // State Input

    const [getinput, setInput] = useState('');

    // State btn + Pathname

    const [currentPath, setCurrentPath] = useState<string>('');

    const clickOn: string = (facebook.columm1LeftulLibtnClick);
    const clickOff: string = (facebook.columm1LeftulLibtn);
    const [btn1, setBtn1] = useState<string>(clickOff);
    const [btn2, setBtn2] = useState<string>(clickOff);


    useEffect(() => {
        setCurrentPath(pathname);
        if (currentPath === '/' || currentPath === '/video') {
            setBtn1(clickOn);
            setBtn2(clickOff);
        }
        if (currentPath === '/video/hot') {
            setBtn1(clickOff);
            setBtn2(clickOn);
        }
    });

    //Btn1
    const handleBtn1 = () => {
        if (btn1 === clickOn) {
            return
        } else {
            setBtn1(clickOn);
            setBtn2(clickOff);
            return router.push(`/`)
        }

    }

    // Btn2
    const handleBtn2 = () => {
        if (btn2 === clickOn) {
            return
        } else {
            setBtn2(clickOn);
            setBtn1(clickOff);
            return router.push(`/video/hot`)
        }

    }


    return (
        <AppContext.Provider value={{
            getinput, setInput, data, error, isLoading, btn1, btn2, handleBtn1, handleBtn2
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)

'use client'

import useSWR from 'swr';

const GetAPIvideohome = () => {

    // GET API
    const fetcher = (url: string) => fetch(url, {
        method: 'GET',

    }).then(res => res.json())
    const { data, error, isLoading } = useSWR(process.env.NEXT_PUBLIC_DATABASE_VIDEOHOME_URL, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return data

    
}
export default GetAPIvideohome
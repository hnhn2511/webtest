'use client'

import useSWR from 'swr';
import facebook from '../styles/facebook.module.css';
import ThumView from '../compunent/appThumview';

function View(props : IView) {

    const {itemsBang , itemsId} = props

    // GET API
    const fetcher = (url: string) => fetch(url, {
        method: 'GET',

    }).then(res => res.json())
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_DATABASE}/${itemsBang}/id${itemsId}.json`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    if (isLoading) {
        return (
            <>
                <div className={facebook.container} style={{ marginBottom: '50px' }}>
                    <div className={facebook.gird}>
                        <div className={facebook.row}>
                            <div className={facebook.columm1} style={{ width: "calc((0.85*100%)/12)" }}></div>
                            <div className={facebook.columm10} style={{ width: "calc((10.3*100%)/12)" }}>
                                <div className={facebook.columm10Product}>
                                    <div className={`${facebook.row} ${facebook.rowcolumm10}`}>
                                        <div className={facebook.fetch}>loading...</div>
                                    </div>
                                </div>
                            </div>
                            <div className={facebook.columm1} style={{ width: "calc((0.85*100%)/12)" }}></div>
                        </div>
                    </div>
                </div>
            </>
        )
    };


    return (
        <>
            <ThumView itemsData={data}/>

        </>

    )
}
export default View;

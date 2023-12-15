'use client'

import facebook from '../../styles/facebook.module.css';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import HomeApp from '../../compunent/appHome';

function Home() {

    const { getdataVideo, getdataManga } = useContext(AppContext);
    const [dataVideo, setdataVideo] = useState<any[]>([]);
    const [dataManga, setdataManga] = useState<any[]>([]);

    useEffect(() => {
        if (getdataManga && getdataVideo) {
            const dataArrayManga = Object.keys(getdataManga).map((key, index) => {
                const id = index + 1;
                const item = getdataManga[key];
                return { id, ...item };
            });
            const dataArrayVideo = Object.keys(getdataVideo).map((key, index) => {
                const id = index + 1;
                const item = getdataVideo[key];
                return { id, ...item };
            });
            const sortManga = dataArrayManga?.sort((a: any, b: any) => b.id - a.id);
            const sortVideo = dataArrayVideo?.sort((a: any, b: any) => b.id - a.id);
            setdataManga(sortManga);
            setdataVideo(sortVideo);
        }
    }, [getdataVideo, getdataManga]);


    if (!getdataVideo || dataVideo.length === 0 || !getdataManga || dataManga.length === 0) {
        return (
            <>
                <div className={facebook.container} style={{ marginBottom: '50px' }}>
                    <div className={facebook.gird}>
                        <div className={facebook.row}>
                            <div className={facebook.columm1}></div>
                            <div className={facebook.columm10}>
                                <div className={facebook.columm10Product}>
                                    <div className={`${facebook.row} ${facebook.rowcolumm10}`}>
                                        <div className={facebook.fetch} style={{ height: `460px` }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={facebook.columm1}></div>
                        </div>
                    </div>
                </div>
            </>
        )
    };
    return (
        <HomeApp itemsManga={dataManga} itemsVideo={dataVideo}/>

    )
}
export default Home;

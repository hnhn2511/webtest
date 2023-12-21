'use client'

import facebook from '../../styles/facebook.module.css';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import HomeApp from '../../compunent/appHome';

function Home() {

    const { getdataVideohome} = useContext(AppContext);
    const [dataVideo, setdataVideo] = useState<any[]>([]);

    useEffect(() => {
        if (getdataVideohome) {
            const dataArrayVideo = Object.keys(getdataVideohome).map((key, index) => {
                const id = index + 1;
                const item = getdataVideohome[key];
                return { id, ...item };
            });
            const sortVideo = dataArrayVideo?.sort((a: any, b: any) => b.id - a.id);
            setdataVideo(sortVideo);
        }
    }, [getdataVideohome]);


    if (!getdataVideohome || dataVideo.length === 0 ) {
        return (
            <>
                <div className={facebook.container} style={{ marginBottom: '50px' }}>
                    <div className={facebook.gird}>
                        <div className={facebook.row}>
                            <div className={facebook.columm1} style={{ width: 'calc((0.5*100%)/12)' }}></div>
                            <div className={facebook.columm10} style={{ width: 'calc((11*100%)/12)' }}>
                                <div className={facebook.columm10Product}>
                                    <div className={`${facebook.row} ${facebook.rowcolumm10}`}>
                                        <div className={facebook.fetch} style={{ height: `529px` }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={facebook.columm1} style={{ width: 'calc((0.5*100%)/12)' }}></div>
                        </div>
                    </div>
                </div>
            </>
        )
    };
    return (
        <>
            <HomeApp itemsVideo={dataVideo} />
        </>

    )
}
export default Home;

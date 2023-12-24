'use client'

import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../context/AppContext';
import facebook from '../../../styles/facebook.module.css';
import HomeApp from '../../../compunent/appHome';

function Searchhome({ searchParams }: { searchParams: { q: string | undefined } }) {

    // Lấy Query
    const search = searchParams.q;

    const { getdataVideohome } = useContext(AppContext);

    const [dataVideosort, setdataVideoSort] = useState<any[] | null>(null);

    useEffect(() => {
        if (getdataVideohome) {
            // Chuyển đổi thành mảng
            const dataArrayVideo = Object.keys(getdataVideohome).map((key) => {
                return {
                    id: parseInt(key.replace("id", "")), // Lấy số từ chuỗi key
                    ...getdataVideohome[key]
                };
            });
            const filteredDatavideo = dataArrayVideo.filter((a: any) => a.name.toLowerCase().includes(search?.toLowerCase()));
            const sortVideo = filteredDatavideo?.sort((a: any, b: any) => b.id - a.id);
            setdataVideoSort(sortVideo);
        }
    }, [search, getdataVideohome]);

    if (!getdataVideohome && !dataVideosort) {
        return (
            <>
                <div className={facebook.container} style={{ marginBottom: '50px' }}>
                    <div className={facebook.gird}>
                        <div className={facebook.row}>
                            <div className={facebook.columm1} style={{ width: "calc((0.5*100%)/12)" }}></div>
                            <div className={facebook.columm10} style={{ width: "calc((11*100%)/12)" }}>
                                <div className={facebook.columm10Product}>
                                    <div className={`${facebook.row} ${facebook.rowcolumm10}`}>
                                        <div className={facebook.fetch} style={{ minHeight: '529px' }}>loading...</div>
                                    </div>
                                </div>
                            </div>
                            <div className={facebook.columm1} style={{ width: "calc((0.5*100%)/12)" }}></div>
                        </div>
                    </div>
                </div>
            </>
        )
    };

    if (getdataVideohome && !dataVideosort) {
        return (
            <>
                <div className={facebook.container} style={{ marginBottom: '50px' }}>
                    <div className={facebook.gird}>
                        <div className={facebook.row}>
                            <div className={facebook.columm1} style={{ width: "calc((0.5*100%)/12)" }}></div>
                            <div className={facebook.columm10} style={{ width: "calc((11*100%)/12)" }}>
                                <div className={facebook.columm10Product}>
                                    <div className={`${facebook.row} ${facebook.rowcolumm10}`}>
                                        <div className={facebook.fetch} style={{ minHeight: '529px' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={facebook.columm1} style={{ width: "calc((0.5*100%)/12)" }}></div>
                        </div>
                    </div>
                </div>
            </>
        )
    };



    return (
        <>
            <HomeApp itemsVideo={dataVideosort} />

        </>

    )
}
export default Searchhome;

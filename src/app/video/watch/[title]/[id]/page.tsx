'use client'

import Iframecontent from '../../../../../../compunent/appIframecontent';
import { useContext } from 'react';
import { AppContext } from '../../../../../../context/AppContext';
import facebook from '../../../../../../styles/facebook.module.css';

function Title({ params }: { params: { id: string } }) {

    //Lấy Pargams
    const id = params.id;
    // Chuyển đổi params thành string
    const decodedid = decodeURIComponent(id);

    const { data, error, isLoading } = useContext(AppContext)

    if (error) {
        return (
            <>
                <div className={facebook.container} style={{ marginBottom: '50px' }}>
                    <div className={facebook.gird}>
                        <div className={facebook.row}>
                            <div className={facebook.columm1}></div>
                            <div className={facebook.columm10}>
                                <div className={facebook.columm10Product}>
                                    <div className={`${facebook.row} ${facebook.rowcolumm10}`}>
                                        <div className={facebook.fetch}>failed to load</div>
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

    if (isLoading) {
        return (
            <>
                <div className={facebook.container} style={{ marginBottom: '50px' }}>
                    <div className={facebook.gird}>
                        <div className={facebook.row}>
                            <div className={facebook.columm1}></div>
                            <div className={facebook.columm10}>
                                <div className={facebook.columm10Product}>
                                    <div className={`${facebook.row} ${facebook.rowcolumm10}`}>
                                        <div className={facebook.fetch}>loading...</div>
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

    // Chuyển đổi
    const dataArray = Object.keys(data).map((key, index) => {
        const id = index + 1;
        const item = data[key];
        return { id, ...item };
    });

    const getdata = dataArray?.filter((a: any) => a.id === (parseInt(decodedid, 10)))

    return (
        <>
            <Iframecontent items={getdata}></Iframecontent>
        </>

    )
}
export default Title;

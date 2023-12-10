'use client'

import Picturecontent from '../../../../../../compunent/appPicturecontent';
import { useContext ,  useState , useEffect } from 'react';
import { AppContext } from '../../../../../../context/AppContext';
import facebook from '../../../../../../styles/facebook.module.css';


function Title({ params }: { params: { id: string } }) {

    //Lấy Pargams
    const id = params.id;
    // Chuyển đổi params thành string
    const decodedid = decodeURIComponent(id);

    const { getdataManga } = useContext(AppContext);
    const [data, setdata] = useState<any[]>([]);

    useEffect(() => {
        if (getdataManga) {
            const dataArray = Object.keys(getdataManga).map((key, index) => {
                const id = index + 1;
                const item = getdataManga[key];
                return { id, ...item };
            });
            const filter = dataArray?.filter((a: any) => a.id === (parseInt(decodedid, 10)));
            setdata(filter);
        }
    }, [decodedid,getdataManga]);

    if (!getdataManga || data.length === 0) {
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

    return (
        <>
            <Picturecontent itemsManga={data}></Picturecontent>
        </>

    )
}
export default Title;

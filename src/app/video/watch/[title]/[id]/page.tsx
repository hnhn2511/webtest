'use client'

import Iframecontent from '../../../../../../compunent/appIframecontent';
import { useContext , useEffect , useState} from 'react';
import { AppContext } from '../../../../../../context/AppContext';
import facebook from '../../../../../../styles/facebook.module.css';

function Title({ params }: { params: { id: string } }) {

    //Lấy Pargams
    const id = params.id;
    // Chuyển đổi params thành string
    const decodedid = decodeURIComponent(id);

    const { getdataVideo } = useContext(AppContext);
    const [data, setdata] = useState<any[]>([]);

    useEffect(() => {
        if (getdataVideo) {
            const dataArray = Object.keys(getdataVideo).map((key, index) => {
                const id = index + 1;
                const item = getdataVideo[key];
                return { id, ...item };
            });
            const filter = dataArray?.filter((a: any) => a.id === (parseInt(decodedid, 10)));
            setdata(filter);
        }
    }, [decodedid,getdataVideo]);

    if (!getdataVideo || data.length === 0) {
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
            <Iframecontent items={data}></Iframecontent>
        </>

    )
}
export default Title;

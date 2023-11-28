'use client'

import { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../../../../context/AppContext';
import Contenthome from '../../../../../compunent/appContent';
import facebook from '../../../../../styles/facebook.module.css';
import { faCaretDown, faCaretUp, faFire, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Title({ params }: { params: { title: string } }) {

    // Lấy params
    const title = params.title;

    // Chuyển đổi params thành string
    const decodedTitle = decodeURIComponent(title);

    const { data, error, isLoading } = useContext(AppContext)

    const clickOn: string = (facebook.columm1LeftulLibtnClick);
    const clickOff: string = (facebook.columm1LeftulLibtn);
    const [btn1, setBtn1] = useState<string>(clickOn);
    const [btn2, setBtn2] = useState<string>(clickOff);

    const [datasort, setdataSort] = useState<any[]>([]);
    const [filteredDb, setfilteredDb] = useState<any[]>([]);

    useEffect(() => {
        if (!isLoading && !error && data) {
            const dataArray = Object.keys(data).map((key, index) => {
                const id = index + 1;
                const item = data[key];
                return { id, ...item };
            });
            const filteredData = dataArray.filter((a: any) => a.Title.toLowerCase().includes(decodedTitle.toLowerCase()));
            const sort = filteredData?.sort((a: any, b: any) => b.id - a.id);
            setdataSort(sort);
            setfilteredDb(filteredData);
        }
    }, [data, decodedTitle, isLoading, error]);

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
                                        <div className={facebook.fetch}></div>
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

    if (filteredDb.length === 0) {
        return (
            <>
                <div className={facebook.container} style={{ marginBottom: '50px' }}>
                    <div className={facebook.gird}>
                        <div className={facebook.row}>
                            <div className={facebook.columm1}></div>
                            <div className={facebook.columm10}>
                                <div className={facebook.columm10Product}>
                                    <div className={`${facebook.row} ${facebook.rowcolumm10}`}>
                                        <div className={facebook.fetch}>Không có</div>
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

    const handleBtn1 = () => {
        if (btn1 === clickOn) {
            return
        }
        else {
            const sort = filteredDb?.sort((a: any, b: any) => b.id - a.id)
            setdataSort(sort)
            setBtn1(clickOn);
            setBtn2(clickOff)

        }

    }

    const handleBtn2 = () => {
        if (btn2 === clickOn) {
            return
        }
        else {
            const sort = filteredDb?.sort((a: any, b: any) => b.view - a.view)
            setdataSort(sort)
            setBtn2(clickOn);
            setBtn1(clickOff)

        }

    }

    return (
        <>
            <div className={facebook.container} style={{ marginBottom: '50px' }}>
                <div className={facebook.gird}>
                    <div className={facebook.row}>
                    <div className={facebook.columm1Fixel}>
                            <div className={facebook.columm1Left}>
                                <div className={facebook.columm1Leftdiv} >
                                    <FontAwesomeIcon icon={faCaretDown} className={facebook.columm1LeftdivIcon} />
                                </div>

                                <ul className={facebook.columm1Leftul}>
                                    <li className={facebook.columm1LeftulLi}><button title='Mới nhất' className={btn1} onClick={handleBtn1}><FontAwesomeIcon icon={faClock} className={facebook.columm1LeftulLibtnIcon} /></button></li>
                                    <li className={facebook.columm1LeftulLi}><button title='Phổ biến' className={btn2} onClick={handleBtn2}><FontAwesomeIcon icon={faFire} className={facebook.columm1LeftulLibtnIcon} /></button></li>
                                </ul>

                                <div className={facebook.columm1Leftdiv} style={{
                                    borderTopLeftRadius: '0px', borderTopRightRadius: '0px',
                                    borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'
                                }} >
                                    <FontAwesomeIcon icon={faCaretUp} className={facebook.columm1LeftdivIcon} />
                                </div>
                            </div>
                        </div>
                        <div className={facebook.columm1}></div>
                        <div className={facebook.columm10}>
                            <div className={facebook.columm10Product}>
                                <div className={`${facebook.row} ${facebook.rowcolumm10}`}>
                                    <Contenthome items={datasort} />

                                </div>
                            </div>
                        </div>
                        <div className={facebook.columm1}></div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Title;

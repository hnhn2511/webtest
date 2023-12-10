'use client'

import facebook from '../styles/facebook.module.css';
import {faFire, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContenthomeManga from './appContentmanga';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function Containermanga() {

    const { getdataManga} = useContext(AppContext);
    
    const [datasort, setdataSort] = useState<any[]>([]);
    const [filteredDb, setfilteredDb] = useState<any[]>([]);
    const [value, setValue] = useState(0);


    useEffect(() => {
        if (getdataManga) {
            const dataArray = Object.keys(getdataManga).map((key, index) => {
                const id = index + 1;
                const item = getdataManga[key];
                return { id, ...item };
            });
            const sort = dataArray?.sort((a: any, b: any) => b.id - a.id);
            setdataSort(sort);
            setfilteredDb(dataArray);
        }
    }, [getdataManga]);

    if (!getdataManga) {
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

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                // Thực hiện chức năng khi chọn Tab 1
                const sort = filteredDb?.sort((a: any, b: any) => b.id - a.id)
                setdataSort(sort)
                break;
            case 1:
                // Thực hiện chức năng khi chọn Tab 2
                const sort1 = filteredDb?.sort((a: any, b: any) => b.view - a.view)
                setdataSort(sort1)
                break;
        }
    };


    return (
        <>
            {/*  III. Content */}
            <div className={facebook.container}>
                <div className={facebook.gird}>
                    <div className={facebook.row}>
                        <div className={facebook.columm1Fixel}>
                            <div className={facebook.columm1Left}>
                            <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    orientation="vertical"
                                    variant="scrollable"
                                    aria-label="Chức năng"
                                    indicatorColor="none"
                                    className={facebook.Tabui}
                                >
                                    <Tab icon={<FontAwesomeIcon icon={faClock} className={facebook.columm1LeftulLibtnIcon} />} disableRipple title='Mới nhất' />
                                    <Tab icon={<FontAwesomeIcon icon={faFire} className={facebook.columm1LeftulLibtnIcon} />} disableRipple title='Phổ biến' />
                                </Tabs>
                            </div>
                        </div>
                        <div className={facebook.columm1}></div>
                        <div className={facebook.columm10}>
                            <div className={facebook.columm10Product}>
                                <div className={`${facebook.row} ${facebook.rowcolumm10}`} style={{minHeight:'550px'}}>
                                    <ContenthomeManga itemsManga={datasort} />
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
export default Containermanga;

'use client'

import facebook from '../styles/facebook.module.css';
import { faCaretDown, faCaretUp, faFire, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Contenthome from './appContent';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Head from 'next/head';


function Container() {

    const { data, error, isLoading, btn1, btn2, handleBtn1, handleBtn2 } = useContext(AppContext);


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



    return (
        <>
        <Head>
        <title>Trang của tôi</title>
        <meta name="description" content="Mô tả của trang web của bạn ở đây" />
      </Head>
            {/*  III. Content */}
            <div className={facebook.container}>
                <div className={facebook.gird}>
                    <div className={facebook.row}>
                        <div className={facebook.columm1Fixel}>
                            <div className={facebook.columm1Left}>
                                <div className={facebook.columm1Leftdiv} >
                                    <FontAwesomeIcon icon={faCaretDown} className={facebook.columm1LeftdivIcon} />
                                </div>

                                <ul className={facebook.columm1Leftul}>
                                    <li className={facebook.columm1LeftulLi}><button title='Mới nhất' className={btn1} onClick={() => handleBtn1()}><FontAwesomeIcon icon={faClock} className={facebook.columm1LeftulLibtnIcon} /></button></li>
                                    <li className={facebook.columm1LeftulLi}><button title='Phổ biến' className={btn2} onClick={() => handleBtn2()}><FontAwesomeIcon icon={faFire} className={facebook.columm1LeftulLibtnIcon} /></button></li>
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
                                    <Contenthome items={dataArray?.sort((a: any, b: any) => b.id - a.id)} />
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
export default Container;

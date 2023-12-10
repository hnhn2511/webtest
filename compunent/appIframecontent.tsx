'use client'

import Head from 'next/head';
import facebook from '../styles/facebook.module.css';
import { useState } from 'react';
import Link from 'next/link';

function Iframecontent(props: IDatacop) {

    const { items } = props;


    // Btn
    const getserverOn: string = facebook.footerIframebtnActive;
    const getserverOff: string = '';
    const [getsrc, setSrc] = useState<string>(items[0].streamwish);
    const [btn1, setBtn1] = useState<string>(getserverOn);
    const [btn2, setBtn2] = useState<string>(getserverOff);

    const handlebtn1 = () => {
        if (btn1 === getserverOn) {
            return
        } else {
            setSrc(items[0].streamwish);
            setBtn1(getserverOn);
            setBtn2(getserverOff);
        }
    }

    const handlebtn2 = () => {
        if (btn2 === getserverOn) {
            return
        } else {
            setSrc(items[0].maychukhac)
            setBtn2(getserverOn);
            setBtn1(getserverOff);
        }
    }


    return (
        <>
            <Head>
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="default-src 'self' https://mc.yandex.ru; frame-src 'self' https://mc.yandex.ru;"
                />
            </Head>
            {items.map(item => {
                return (
                    <div key={item.id} className={facebook.container} style={{ marginBottom: '50px' }}>
                        <div className={facebook.gird}>
                            <div className={facebook.row}>
                                <div className={`${facebook.columm1} ${facebook.columm15}`}></div>
                                <div className={`${facebook.columm10} ${facebook.columm9}`}>
                                    <div className={facebook.columm10Product}>
                                        <div className={`${facebook.row} ${facebook.rowcolumm10} ${facebook.rowcolumm10iframe}`}>
                                            <div style={{width: '100%'}}>
                                                <h5 className={facebook.fetchiframe} title={item.Title}>{item.Title}</h5>
                                                <iframe src={getsrc} width='640' height='360' allowFullScreen style={{
                                                    width: '100%',
                                                    height: '675px'
                                                }}></iframe>
                                                <div>

                                                    <div className={facebook.footerIframe} style={{ marginTop: '16px' }}>
                                                        <h6 className={facebook.footerIframeh6} title='MÁY CHỦ'>MÁY CHỦ :</h6>
                                                        <ul className={facebook.footerIframeul}>
                                                            <li className={facebook.footerIframeli}><button onClick={handlebtn1} className={`${facebook.footerIframebtn} ${btn1}`} title='SW'>SW</button></li>
                                                            <li className={facebook.footerIframeli}><button onClick={handlebtn2} className={`${facebook.footerIframebtn} ${btn2}`} title='MCK'>Khác</button></li>
                                                        </ul>

                                                    </div>

                                                    <div className={facebook.footerIframe} style={{ marginTop: '16px' }}>
                                                        <h6 className={facebook.footerIframeh6} title='TẢI XUỐNG'>TẢI XUỐNG :</h6>
                                                        <ul className={facebook.footerIframeul}>
                                                            <li className={facebook.footerIframeli}><a href={item.torrent} target="_blank" title='Torrent'><button className={facebook.footerIframebtn}>Torrent</button></a></li>
                                                        </ul>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <div className={`${facebook.row} ${facebook.rowcolumm10} ${facebook.rowcolumm10iframe}`} style={{ marginTop: '50px' }}>
                                            <div className={facebook.rowcolumm10Info}>
                                                <div className={facebook.rowcolumm10Infoimg} title={item.Title} style={{ backgroundImage: `url(${item.imageinfo}${item.imageinfosize})` }}></div>
                                            </div>
                                            <h5 className={facebook.rowcolumm10Infoh5} title={item.Title}>{item.Title}</h5>
                                            <div className={facebook.rowcolumm10Infotype}>
                                                <div className={facebook.rowcolumm10Infotypefull}>
                                                    <span className={facebook.rowcolumm10InfotypeSpan} title={item.subject}>{item.subject}</span>
                                                    <div className={facebook.rowcolumm10Infocode}>
                                                        <h6 className={facebook.rowcolumm10InfocodeH6} title='Code'>Code :</h6>
                                                        <span className={facebook.rowcolumm10InfocodeSpan} title={item.code}>{item.code}</span>
                                                    </div>
                                                    <div className={facebook.rowcolumm10Infomaker}>
                                                        <h6 className={facebook.rowcolumm10InfocodeH6} title='Maker'>Maker :</h6>
                                                        <Link href={`/video/search/${item.type}`} className={facebook.columm10colummContentlink}>
                                                        <h6 className={facebook.rowcolumm10InfomakerH6} style={{ color: 'black' }} title={item.type}>{item.type}</h6>
                                                        </Link>
                                                    </div>
                                                    <div className={facebook.rowcolumm10Infostars}>
                                                        <h6 className={facebook.rowcolumm10InfocodeH6} title='Diễn viên'>Stars :</h6>
                                                        <Link href={item.starsinfo} target="_blank" className={facebook.rowcolumm10InfostarsA} style={{fontSize: '1.1rem' , color: 'black'}} title={item.stars}>{item.stars}</Link>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className={`${facebook.columm1} ${facebook.columm15}`}></div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>

    )
}
export default Iframecontent;

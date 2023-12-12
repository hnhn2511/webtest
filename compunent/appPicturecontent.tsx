'use client'


import facebook from '../styles/facebook.module.css';
import { useState, useEffect , useMemo } from 'react';
import Link from 'next/link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import { Fancybox } from '@fancyapps/ui';

function Picturecontent(props: IDatacopManga2) {

    const { itemsManga , itemsRoll , itemsHeight } = props;

    const [value, setValue] = useState<number>(0);
    const [chapter, setChapter] = useState<string>('');
    const [chaptercop, setChaptercop] = useState<string>('');
    const chapterlength:number = Object.keys(itemsManga[0].Pagefull).length;

    const [selectedEP, setSelectedEP] = useState<any>(itemsManga[0].Pagefull.EP1); // State để lưu dữ liệu EP1
    const [propsEp, setpropsEp] = useState<number>(1);

    const handleKeyDown = (e: any) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            setChaptercop(chapter)
        }
    };

    useEffect(() => {
        const stringWithoutSpaces = chaptercop.replace(/\s/g, '');
        const hasNonNumericCharacters = /\D/.test(stringWithoutSpaces);
        if (stringWithoutSpaces !== '' && !hasNonNumericCharacters) {
            let chaptercopInt = parseInt(chaptercop);
            const eventMockup: React.ChangeEvent<{}> = {} as React.ChangeEvent<{}>;
            if (chaptercopInt === 0) {
                setValue(0);
                setChapter('');
                handleChange(eventMockup, 0)
            }
            if (chaptercopInt > chapterlength) {
                setValue(chapterlength - 1);
                setChapter('');
                handleChange(eventMockup, chapterlength - 1)

            }
            if (chaptercopInt <= chapterlength && chaptercopInt != 0) {
                setValue(parseInt(chaptercop) - 1);
                setChapter('');
                handleChange(eventMockup, parseInt(chaptercop) - 1)

            }
            // Nếu stringWithoutSpaces chỉ chứa số, bạn có thể thực hiện các hành động khác ở đây

        } else {
            setChapter('');
            // Nếu có ký tự không phải số, xử lý ở đây
        }
    }, [chaptercop]);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
        const selectedPageFull = itemsManga[0].Pagefull
        const selectedKey = Object.keys(selectedPageFull)[newValue];
        const keysLength = Object.keys(selectedPageFull).length;
        const selectedValue = selectedPageFull[selectedKey];
        if (newValue < keysLength) {
            setpropsEp(newValue + 1);
            setSelectedEP(selectedValue)
        }

    }

    // Produc 1
    const sortedData: {
        [episodeName: string]: Page;
    } = Object.keys(selectedEP)
        .sort((a, b) => {
            const getPageNumber = (str: string) => parseInt(str.match(/\d+/)?.[0] || '0');
            return getPageNumber(a) - getPageNumber(b);
        })
        .reduce((obj, key) => {
            obj[key] = selectedEP[key];
            return obj;
        }, {} as {
            [episodeName: string]: Page;
        });

    const entries = Object.entries(sortedData)

    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            // Các cấu hình khác có thể được thêm vào đây nếu cần
        });
    }, []);

    const tabs = useMemo(() => {
        return Object.keys(itemsManga[0].Pagefull).map((key, index) => (
            <Tab label={`Tập ${index + 1}`} key={key} />
        ));
    }, [itemsManga]);

    return (
        <>
            <div className={`${facebook.columm1Fixel} ${facebook.columm15}`} style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={facebook.columm1Left} style={{ width: 'calc((1*100%)/1.5)' }}>
                    <TextField
                        className={facebook.textfield}
                        id="standard-basic"
                        placeholder="Tập Số"
                        sx={{
                            '& input::placeholder': {
                                textAlign: 'center',

                            },
                            '& input': {
                                textAlign: 'center', // Đặt vị trí của văn bản nhập vào giữa

                            },
                        }}
                        variant="standard"
                        value={chapter}
                        onChange={(e) => setChapter(e.target.value)} onKeyDown={handleKeyDown}
                    />

                    <Tabs
                        className={facebook.textTabs}
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        scrollButtons={itemsRoll}
                        sx={{
                            '& .MuiTabs-indicator': {
                                display: 'none'
                            },
                            height: `${itemsHeight}`,
                        }}

                    >

                        {tabs}

                        {/* {Object.keys(itemsManga[0].Pagefull).map((key, index) => (
                            <Tab label={`Tập ${index + 1}`} key={key} />
                        ))} */}

                    </Tabs>
                </div>

            </div>
            <div className={`${facebook.columm1} ${facebook.columm15}`}></div>
            <div className={`${facebook.columm10} ${facebook.columm9}`}>
                <div className={facebook.columm10Product}>
                    <div className={`${facebook.row} ${facebook.rowcolumm10} ${facebook.rowcolumm10iframe}`}>
                        <div style={{ width: '100%' }}>
                            <h5 className={facebook.fetchiframe} title={itemsManga[0].name}>{itemsManga[0].name} - Chapter {propsEp}</h5>
                            <div style={{ textAlign: 'center', minHeight: '550px' }}>
                                {entries.map((entry: [string, Page]) => {
                                    const [key, value] = entry
                                    return (

                                        <a key={key}
                                            data-fancybox="gallery"
                                            data-src={`${value}`}
                                            data-caption={`${itemsManga[0].name}-Chapter${propsEp}-${key}`}
                                            data-title={`${itemsManga[0].name}-Chapter${propsEp}-${key}`}
                                        >
                                            <img src={`${value}`} alt={`${itemsManga[0].name}-Chapter${itemsManga[0].name}-${key}`} title={`${itemsManga[0].name}-Chapter${propsEp}-${key}`} style={{ cursor: 'pointer' }} />
                                        </a>

                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={`${facebook.row} ${facebook.rowcolumm10} ${facebook.rowcolumm10iframe}`} style={{ marginTop: '50px' }}>
                        <div className={facebook.rowcolumm10Info}>
                            <div className={facebook.rowcolumm10Infoimg} title={itemsManga[0].name} style={{ backgroundImage: `url(${itemsManga[0].image})` }}></div>
                        </div>
                        <h5 className={facebook.rowcolumm10Infoh5} title={itemsManga[0].name}>{itemsManga[0].name}</h5>
                        <div className={facebook.rowcolumm10Infotype}>
                            <div className={facebook.rowcolumm10Infotypefull}>
                                <div className={facebook.rowcolumm10Infocode}>
                                    <div className={facebook.rowcolumm10Codemanga} title='Số tập'>
                                        <h6 className={facebook.rowcolumm10InfocodeH6} style={{ minWidth: '0px' }} title='Số tập'>Số tập</h6>
                                        <h6 className={facebook.rowcolumm10InfocodeH6} style={{ minWidth: '0px' }} title='Số tập'>:</h6>
                                    </div>
                                    <span className={facebook.rowcolumm10InfocodeSpan} style={{ flex: '1' }} title={itemsManga[0].sotap}>{itemsManga[0].sotap}</span>
                                </div>
                                <div className={facebook.rowcolumm10Infomaker}>
                                    <div className={facebook.rowcolumm10Codemanga} title='Loạt'>
                                        <h6 className={facebook.rowcolumm10InfocodeH6} style={{ minWidth: '0px' }} title='Loạt'>Loạt</h6>
                                        <h6 className={facebook.rowcolumm10InfocodeH6} style={{ minWidth: '0px' }} title='Loạt'>:</h6>
                                    </div>

                                    <Link href={`/manga/search/${itemsManga[0].code}`} className={facebook.columm10colummContentlink} style={{ flex: '1' }} >
                                        <h6 className={facebook.rowcolumm10InfomakerH6} style={{ color: 'black' }} title={itemsManga[0].code}>{itemsManga[0].code}</h6>
                                    </Link>
                                </div>
                                <div className={facebook.rowcolumm10Infostars}>
                                    <div className={facebook.rowcolumm10Codemanga} title='Nội dung'>
                                        <h6 className={facebook.rowcolumm10InfocodeH6} style={{ minWidth: '0px' }} title='Nội dung'>Nội dung</h6>
                                        <h6 className={facebook.rowcolumm10InfocodeH6} style={{ minWidth: '0px' }} title='Nội dung'>:</h6>
                                    </div>
                                    <span className={facebook.rowcolumm10InfostarsA} style={{ fontSize: '1.1rem', color: 'black', flex: '1' }} title={itemsManga[0].thongtin}>{itemsManga[0].thongtin}</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default Picturecontent;

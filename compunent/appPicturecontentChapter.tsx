'use client'

import facebook from '../styles/facebook.module.css';
import { Fancybox } from '@fancyapps/ui';
import { useEffect } from 'react';


function PicturecontentChapter(props: IDatacopMangachapter) {

    const { itemsName, itemsPagefull, itemsEp } = props;

    const sortedData: {
        [episodeName: string]: Page;
    } = Object.keys(itemsPagefull)
        .sort((a, b) => {
            const getPageNumber = (str: string) => parseInt(str.match(/\d+/)?.[0] || '0');
            return getPageNumber(a) - getPageNumber(b);
        })
        .reduce((obj, key) => {
            obj[key] = itemsPagefull[key];
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

    return (
        <>

            <div className={`${facebook.row} ${facebook.rowcolumm10} ${facebook.rowcolumm10iframe}`}>
                <div style={{ width: '100%' }}>
                    <h5 className={facebook.fetchiframe} title={itemsName}>{itemsName} - Chapter {itemsEp}</h5>
                    <div style={{ textAlign: 'center' }}>
                        {entries.map((entry: [string, Page]) => {
                            const [key, value] = entry
                            return (

                                <a key={key}
                                    data-fancybox="gallery"
                                    data-src={`${value}`}
                                    data-caption={`${itemsName}-Chapter${itemsEp}-${key}`}
                                    data-title={`${itemsName}-Chapter${itemsEp}-${key}`}
                                >
                                    <img src={`${value}`} alt={`${itemsName}-Chapter${itemsEp}-${key}`} title={`${itemsName}-Chapter${itemsEp}-${key}`} style={{ cursor: 'pointer' }} />
                                </a>

                            )
                        })}
                    </div>
                </div>

            </div>

        </>

    )
}
export default PicturecontentChapter;

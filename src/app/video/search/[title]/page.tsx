'use client'

import { useContext } from 'react';
import { AppContext } from '../../../../../context/AppContext';
import Contenthome from '../../../../../compunent/appContent';
import facebook from '../../../../../styles/facebook.module.css';

function Title({ params }: { params: { title: string } }) {

    // Lấy params
    const title = params.title;

    // Chuyển đổi params thành string
    const decodedTitle = decodeURIComponent(title);

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

    // Chuyển đổi
    const dataArray = Object.keys(data).map((key, index) => {
        const id = index + 1;
        const item = data[key];
        return { id, ...item };
    });


    const test = dataArray?.filter((a: any) => a.Title.toLowerCase().includes(decodedTitle.toLowerCase()))
    if (test.length === 0) {
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

    return (
        <>
            <div className={facebook.container} style={{ marginBottom: '50px' }}>
                <div className={facebook.gird}>
                    <div className={facebook.row}>
                        <div className={facebook.columm1}></div>
                        <div className={facebook.columm10}>
                            <div className={facebook.columm10Product}>
                                <div className={`${facebook.row} ${facebook.rowcolumm10}`}>
                                    <Contenthome items={test.sort((a: any, b: any) => b.id - a.id)} />

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

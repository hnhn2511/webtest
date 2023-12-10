
import facebook from '../styles/facebook.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { Pagination } from '@mui/material';

function ContenthomeManga(props: IDatacopManga) {

    const { itemsManga } = props;

    const itemsPerPage = 15;
    const totalPages = Math.ceil(itemsManga.length / itemsPerPage);

    const paginatedData = Array.from({ length: totalPages }, (_, index) =>
        itemsManga.slice(index * itemsPerPage, (index + 1) * itemsPerPage)
    );

    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const currentPageData = paginatedData[currentPage - 1] || [];

    return (
        <>
            {currentPageData.map(item => {
                return (
                    <div key={item.id} className={facebook.columm10columm}>
                        <div className={facebook.columm10colummContent}>
                            <Link href={`/manga/view/${item.name}/${item.id}`} className={facebook.columm10colummContentlink}>
                                <div className={facebook.columm10colummContentframe}>
                                    <div className={facebook.columm10colummContentimg} style={{ backgroundImage: `url(${item.image})` }} title={item.name}></div>
                                </div>
                            </Link>
                            <Link href={`/manga/view/${item.name}/${item.id}`} className={facebook.columm10colummContentlink}>
                                <h4 className={facebook.columm10colummContenth4} title={item.name}>{item.name}</h4>
                            </Link>
                            <div className={facebook.columm10colummContentOther}>
                                <span className={facebook.columm10colummContentDay} title={item.Dayupload}>{item.Dayupload}</span>
                                <span className={facebook.columm10colummContentviews} title='1M'>1M</span>
                            </div>
                        </div>
                    </div>
                )
            })}

            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handleChange}
                variant="outlined"
                shape="rounded"
                style={{ width: '100%', justifyContent: 'center', margin: '20px 0', display: 'flex' }}
            />

        </>
    )
}


export default ContenthomeManga;
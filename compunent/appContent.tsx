
import facebook from '../styles/facebook.module.css';
import Link from 'next/link';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

function Contenthome(props: IDatacop) {

    const { items } = props;

    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState<number>(0);

    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
    };


    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            {currentItems.map(item => {
                return (
                    <div key={item.id} className={facebook.columm10columm}>
                        <div className={facebook.columm10colummContent}>
                            <Link href={`/video/watch/${item.Title}/${item.id}`} className={facebook.columm10colummContentlink}>
                                <div className={facebook.columm10colummContentframe}>
                                    <div className={facebook.columm10colummContentimg} style={{ backgroundImage: `url(${item.image}${item.imagesize})` }} title={item.Title}></div>
                                </div>
                            </Link>
                            <Link href={`/video/watch/${item.Title}/${item.id}`} className={facebook.columm10colummContentlink}>
                                <h4 className={facebook.columm10colummContenth4} title={item.Title}>{item.Title}</h4>
                            </Link>
                            <div className={facebook.columm10colummContentOther}>
                                <span className={facebook.columm10colummContentDay}>{item.Dayupload}</span>
                                <span className={facebook.columm10colummContentviews}>1M</span>
                            </div>
                        </div>
                    </div>
                )
            })}

            <ReactPaginate
                breakLabel="..."
                nextLabel="Tiến >"
                onPageChange={handlePageChange}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={Math.ceil(items.length / itemsPerPage)}
                previousLabel="< Lùi"
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination" className={facebook.pagination}
                activeClassName="active"
            />
        </>
    )
}


export default Contenthome;
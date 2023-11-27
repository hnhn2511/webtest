'use client'

import Link from 'next/link';
import facebook from '../styles/facebook.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHouse, faImage, faBookOpen, faMusic } from "@fortawesome/free-solid-svg-icons";
import { useContext , useEffect , useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useRouter } from 'next/navigation';

function Header() {

    const { getinput, setInput } = useContext(AppContext);

    const router = useRouter();


    const [searchValue, setSearchValue] = useState('');


    const getkey = (e: any) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            setSearchValue(getinput);
        }
    }

    useEffect(() => {
        if (searchValue !== '') {
            router.push(`/video/search/${encodeURIComponent(searchValue)}`);
            setInput('');
        }
    }, [searchValue, router]);


    return (
        <div className={facebook.app}>
            <header className={facebook.header}>
                <nav className={facebook.headerNavbar}>
                    <input value={getinput} onChange={(e) => setInput(e.target.value)} onKeyDown={getkey} className={facebook.headerNavbarsearch} placeholder={`Tìm kiếm`} ></input>

                    <ul className={facebook.headerNavbarlistbtn}>
                        <li className={facebook.headerNavbarlistbtnItem}>
                            <Link href={'#'} title='' className={facebook.headerNavbarlink}>
                                <button className={facebook.headerNavbarbtnOut}>
                                    <FontAwesomeIcon icon={faImage} className={facebook.headerNavbarbtnIcon} />
                                </button>
                            </Link>
                        </li>
                        <li className={facebook.headerNavbarlistbtnItem}>
                            <Link href={'#'} title='' className={facebook.headerNavbarlink}>
                                <button className={facebook.headerNavbarbtnOut}>
                                    <FontAwesomeIcon icon={faFilm} className={facebook.headerNavbarbtnIcon} />
                                </button>
                            </Link>
                        </li>
                        <li className={facebook.headerNavbarlistbtnItem}>
                            <Link title='Trang chủ' href={'/'} className={facebook.headerNavbarlink}>
                                <button className={facebook.headerNavbarbtn}>
                                    <FontAwesomeIcon icon={faHouse} className={facebook.headerNavbarbtnIcon} />
                                </button>
                            </Link>
                        </li>
                        <li className={facebook.headerNavbarlistbtnItem}>
                            <Link href={'#'} title='' className={facebook.headerNavbarlink}>
                                <button className={facebook.headerNavbarbtnOut}>
                                    <FontAwesomeIcon icon={faBookOpen} className={facebook.headerNavbarbtnIcon} />
                                </button>
                            </Link></li>
                        <li className={facebook.headerNavbarlistbtnItem}>
                            <Link href={'#'} title='' className={facebook.headerNavbarlink}>
                                <button className={facebook.headerNavbarbtnOut}>
                                    <FontAwesomeIcon icon={faMusic} className={facebook.headerNavbarbtnIcon} />
                                </button>
                            </Link></li>
                    </ul>
                    <p className={facebook.headerNavbarright} ></p>
                </nav>

            </header>
        </div>
    )
}

export default Header;
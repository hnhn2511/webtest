'use client'

import Link from 'next/link';
import facebook from '../styles/facebook.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHouse, faImage, faBookOpen, faMusic } from "@fortawesome/free-solid-svg-icons";
import { useContext , useEffect , useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useRouter ,  usePathname } from 'next/navigation';

function Header() {

    const { getinput, setInput } = useContext(AppContext);

    const router = useRouter();
    const pathname = usePathname();


    const [searchValue, setSearchValue] = useState('');
    const [setcolorHome, setSetColorhome] = useState('');
    const [setcolorVideo, setSetColorvideo] = useState('');
    const setcolorOn:string = '#0548bd';
    const setcolorOff:string = '';


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

    useEffect(() => {
        if (pathname === '/video') {
            setSetColorvideo(setcolorOn);
            setSetColorhome(setcolorOff)
        } 
        if (pathname === '/' ) {
            setSetColorhome(setcolorOn);
            setSetColorvideo(setcolorOff)
        }
    }, [pathname]);


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
                            <Link href={'/video'} title='Video' className={facebook.headerNavbarlink}>
                                <button className={facebook.headerNavbarbtn}>
                                    <FontAwesomeIcon icon={faFilm} style={{color : setcolorVideo}} className={facebook.headerNavbarbtnIcon} />
                                </button>
                            </Link>
                        </li>
                        <li className={facebook.headerNavbarlistbtnItem}>
                            <Link title='Trang chủ' href={'/'} className={facebook.headerNavbarlink}>
                                <button className={facebook.headerNavbarbtn}>
                                    <FontAwesomeIcon icon={faHouse} style={{color : setcolorHome}} className={facebook.headerNavbarbtnIcon} />
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
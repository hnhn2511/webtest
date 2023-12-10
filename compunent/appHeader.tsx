'use client'

import Link from 'next/link';
import facebook from '../styles/facebook.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHouse, faImage, faBookOpen, faMusic } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useRouter, usePathname } from 'next/navigation';

function Header() {

    const { getinput, setInput } = useContext(AppContext);

    const router = useRouter();
    const pathname = usePathname();


    const [searchValue, setSearchValue] = useState('');
    const [searchManga, setSearchManga] = useState('');
    
    const [setcolorHome, setSetColorhome] = useState('');
    const [setcolorVideo, setSetColorvideo] = useState('');
    const [setcolorManga, setSetColormanga] = useState('');
    const setcolorOn: string = '#0548bd';
    const setcolorOff: string = '';
    
    const setoffOpacity: string = '0%';
    const setoffCursor: string = 'default';
    const [setinputOpacity, setInputOpacity] = useState<string>(setoffOpacity);
    const [setinputCursor, setInputCursor] = useState<string>(setoffCursor);


    const getkey = (e: any) => {
        if (pathname.includes('/video') && (e.code === 'Enter' || e.code === 'NumpadEnter') ) {
            setSearchValue(getinput);

        }
        if (pathname.includes('/manga') && (e.code === 'Enter' || e.code === 'NumpadEnter')) {
            setSearchManga(getinput);

        }
    }


    useEffect(() => {
        if (searchValue !== '' && pathname.includes('/video')) {
            router.push(`/video/search/${encodeURIComponent(searchValue)}`);
            setInput('');

        }
        if (searchManga !== '' && pathname.includes('/manga')) {
            router.push(`/manga/search/${encodeURIComponent(searchManga)}`);
            setInput('');
        }
    }, [ searchValue, router ,searchManga]);


    

    useEffect(() => {
        if (pathname !== '/') {
            setInputOpacity('');
            setInputCursor('')
        }else{
            setInputOpacity(setoffOpacity);
            setInputCursor(setoffCursor)
        }
    }, [pathname]);


    // Btn Header
    useEffect(() => {
        if (pathname === '/video') {
            setSetColorvideo(setcolorOn);
            setSetColorhome(setcolorOff);
            setSetColormanga(setcolorOff);
        }
        if (pathname === '/') {
            setSetColorhome(setcolorOn);
            setSetColorvideo(setcolorOff);
            setSetColormanga(setcolorOff);
        }
        if (pathname === '/manga') {
            setSetColormanga(setcolorOn);
            setSetColorvideo(setcolorOff);
            setSetColorhome(setcolorOff)
        }
    }, [pathname]);


    return (
        <div className={facebook.app}>
            <header className={facebook.header}>
                <nav className={facebook.headerNavbar}>
                    <input value={getinput} onChange={(e) => setInput(e.target.value)} onKeyDown={getkey} style={{opacity : `${setinputOpacity}` , cursor : `${setinputCursor}`}} className={facebook.headerNavbarsearch} placeholder={`Tìm kiếm`} ></input>

                    <ul className={facebook.headerNavbarlistbtn}>
                        <li className={facebook.headerNavbarlistbtnItem}>
                            <Link href={'#'} title='' className={facebook.headerNavbarlink}>
                                <button className={facebook.headerNavbarbtnOut}>
                                    <FontAwesomeIcon icon={faImage} style={{ opacity: '0.4' }} className={facebook.headerNavbarbtnIcon} />
                                </button>
                            </Link>
                        </li>
                        <li className={facebook.headerNavbarlistbtnItem}>
                            <Link href={'/video'} title='Video' className={facebook.headerNavbarlink}>
                                <button className={facebook.headerNavbarbtn}>
                                    <FontAwesomeIcon icon={faFilm} style={{ color: setcolorVideo }} className={facebook.headerNavbarbtnIcon} />
                                </button>
                            </Link>
                        </li>
                        <li className={facebook.headerNavbarlistbtnItem}>
                            <Link title='Trang chủ' href={'/'} className={facebook.headerNavbarlink}>
                                <button className={facebook.headerNavbarbtn}>
                                    <FontAwesomeIcon icon={faHouse} style={{ color: setcolorHome }} className={facebook.headerNavbarbtnIcon} />
                                </button>
                            </Link>
                        </li>
                        <li className={facebook.headerNavbarlistbtnItem}>
                            <Link href={'/manga'} title='Manga' className={facebook.headerNavbarlink}>
                                <button className={facebook.headerNavbarbtn}>
                                    <FontAwesomeIcon icon={faBookOpen} style={{ color: setcolorManga }} className={facebook.headerNavbarbtnIcon} />
                                </button>
                            </Link></li>
                        <li className={facebook.headerNavbarlistbtnItem}>
                            <Link href={'#'} title='' className={facebook.headerNavbarlink}>
                                <button className={facebook.headerNavbarbtnOut}>
                                    <FontAwesomeIcon icon={faMusic} style={{ opacity: '0.4' }} className={facebook.headerNavbarbtnIcon} />
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
'use client'

import Link from 'next/link';
import facebook from '../styles/facebook.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';


interface IColor {
    itemsColor: string
}

function Headercontent(props: IColor) {

    const { itemsColor } = props;

    const { getinput, setInput } = useContext(AppContext);

    const [isNavigating, setIsNavigating] = useState<string>('');

    const router = useRouter();

    const [setcolorHome, setSetColorhome] = useState(`${itemsColor}`);

    const getkey = (e: any) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            setIsNavigating(getinput);
            router.push(`/search?q=${encodeURIComponent(getinput.trim())}`)
        }
    }

    useEffect(() => {
        if (isNavigating != '') {
            setInput('');
        }
    }, [isNavigating]);


    // Btn Header
    useEffect(() => {
        setSetColorhome(itemsColor)
    }, [itemsColor]);


    return (
        <div className={facebook.app}>
            <header className={facebook.header}>
                <nav className={facebook.headerNavbar}>
                    <div style={{
                        flex: '1', display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        padding: '0px 5px'
                    }}>
                        <img alt='Tân Lang' src='/logo.png' />
                        <input value={getinput} onChange={(e) => setInput(e.target.value)} onKeyDown={getkey} className={facebook.headerNavbarsearch} placeholder={`Tìm kiếm`} ></input>
                    </div>
                    <div style={{
                        flex: '1',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex'
                    }}>
                        <Link
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '90%',
                                width: '25%',
                                borderRadius: '10px'

                            }}
                            title='Trang chủ' href={'/'} >
                            <Button
                                style={{
                                    height: '100%',
                                    width: '100%'
                                }}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#f0f2f5', // Thay đổi màu khi hover
                                    },
                                }}
                                variant="text"
                                disableRipple
                            >
                                <FontAwesomeIcon icon={faHouse} style={{ color: setcolorHome, fontSize: '1.5rem' }} className={facebook.headerNavbarbtnIcon} />

                            </Button>
                        </Link>
                    </div>
                    <div style={{ flex: '1' }}>
                    </div>


                </nav>

            </header>
        </div >
    )
}

export default Headercontent;
'use client'

import facebook from '../styles/facebook.module.css';
import { useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import InfoIcon from '@mui/icons-material/Info';


interface IThumview {
    itemsData: {
        name: string,
        Dayupload: string,
        type: string,
        download: string,
        watch: string,
        sub: string,
        thongtin: string,
        thum: string[],
        bang: number
    }
}

function Thumview(props: IThumview) {

    const { itemsData } = props

    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            // Các cấu hình khác có thể được thêm vào đây nếu cần
        });
    }, []);

    return (
        <>
            <div className={facebook.container} style={{ marginBottom: '50px' }}>
                <div className={facebook.gird}>
                    <div className={facebook.row}>
                        <div className={`${facebook.columm1} ${facebook.columm15}`} style={{ width: "calc((0.85*100%)/12)" }}></div>
                        <div className={`${facebook.columm10} ${facebook.columm9}`} style={{ width: "calc((10.3*100%)/12)" }}>
                            <div className={facebook.columm10Product}>

                                <div className={`${facebook.row} ${facebook.rowcolumm10} ${facebook.rowcolumm10iframe}`} style={{
                                    margin: '0px',
                                    padding: '0px', backgroundColor: '#fff'
                                }}>
                                    <div style={{
                                        backgroundColor: '#f5f5f5', padding: '10px 15px', display: 'flex', alignItems: 'center', width: '100%',
                                        border: '1px solid #ddd',
                                        borderTopLeftRadius: '5px',
                                        borderTopRightRadius: ' 5px',
                                        minHeight: '45px'
                                    }}>
                                        <h3 title={itemsData.name} style={{
                                            fontSize: '1rem',
                                            margin: '0px'
                                        }}>{itemsData.name}</h3>
                                    </div>
                                    <div style={{
                                        padding: '15px ', width: '100%', borderBottom: '1px solid #ddd',
                                        borderRight: '1px solid #ddd',
                                        borderLeft: '1px solid #ddd'
                                    }}>
                                        <div className={facebook.row} style={{ marginLeft: '-15px', marginRight: '-15px', }}>

                                            <div className={facebook.columm1} style={{
                                                paddingLeft: '15px',
                                                paddingRight: '15px',
                                                width: 'calc((1*100%)/12)'
                                            }}>
                                                <span title='Ngày' style={{fontSize :'0.95rem'}}>Ngày :</span>
                                            </div>
                                            <div className={facebook.columm1} style={{
                                                paddingLeft: '15px',
                                                paddingRight: '15px',
                                                width: 'calc((5*100%)/12)'
                                            }}>
                                                <span title={itemsData.Dayupload} style={{fontSize :'0.95rem'}}>{itemsData.Dayupload}</span>
                                            </div>


                                        </div>

                                    </div>
                                    <div style={{
                                        backgroundColor: '#f5f5f5', padding: '10px 15px', display: 'flex', alignItems: 'center', width: '100%',
                                        borderRight: "1px solid #ddd",
                                        borderLeft: '1px solid #ddd',
                                        borderBottomRightRadius: '5px',
                                        borderBottomLeftRadius: '5px',
                                        borderBottom: '1px solid #ddd',
                                        // minHeight:'45px'
                                    }}>
                                        <IconButton aria-label="play"
                                            style={{ padding: '0px', marginRight: '15px' }}
                                            sx={{
                                                '&:hover': {
                                                    backgroundColor: 'transparent', // Tắt background-color khi hover
                                                    borderRadius: '0', // Loại bỏ border-radius khi hover
                                                    color: 'blue'
                                                },
                                                '& .MuiTouchRipple-root': {
                                                    overflow: 'unset',
                                                    pointerEvents: 'unset',
                                                    position: 'unset',
                                                    zIndex: 'unset',
                                                    borderRadius: 'unset'
                                                },
                                                '&:focus, &:active': {
                                                    outline: 'none',
                                                    boxShadow: 'none',
                                                },
                                            }} >
                                            <a href={`${itemsData.watch}`} title='Watch' style={{
                                                textDecoration: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}>
                                                <PlayArrowIcon fontSize='small' /><span style={{
                                                    marginLeft: '5px',
                                                    fontSize: '1rem'
                                                }}>Watch</span>
                                            </a>
                                        </IconButton >
                                        <IconButton
                                            aria-label="download"
                                            style={{ padding: '0px', marginRight: '15px' }}
                                            sx={{
                                                '&:hover': {
                                                    backgroundColor: 'transparent', // Tắt background-color khi hover
                                                    borderRadius: '0', // Loại bỏ border-radius khi hover
                                                    color: 'blue'
                                                },
                                                '& .MuiTouchRipple-root': {
                                                    overflow: 'unset',
                                                    pointerEvents: 'unset',
                                                    position: 'unset',
                                                    zIndex: 'unset',
                                                    borderRadius: 'unset'
                                                },
                                                '&:focus, &:active': {
                                                    outline: 'none',
                                                    boxShadow: 'none',
                                                },
                                            }} >
                                            <a href={`${itemsData.download}`} title='Watch' style={{
                                                textDecoration: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}>
                                                <DownloadIcon fontSize='small' /><span style={{
                                                    marginLeft: '5px',
                                                    fontSize: '1rem'
                                                }}>Download</span>
                                            </a>
                                        </IconButton >
                                        <IconButton aria-label="subtitle"
                                            style={{ padding: '0px', marginRight: '15px' }}
                                            sx={{
                                                '&:hover': {
                                                    backgroundColor: 'transparent', // Tắt background-color khi hover
                                                    borderRadius: '0', // Loại bỏ border-radius khi hover
                                                    color: 'blue'
                                                },
                                                '& .MuiTouchRipple-root': {
                                                    overflow: 'unset',
                                                    pointerEvents: 'unset',
                                                    position: 'unset',
                                                    zIndex: 'unset',
                                                    borderRadius: 'unset'
                                                },
                                                '&:focus, &:active': {
                                                    outline: 'none',
                                                    boxShadow: 'none',
                                                },
                                            }} >
                                            <a href={`${itemsData.sub}`} title='Subtitle' style={{
                                                textDecoration: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}>
                                                <SubtitlesIcon fontSize='small' /><span style={{
                                                    marginLeft: '5px',
                                                    fontSize: '1rem'
                                                }}>Subtitle</span>
                                            </a>
                                        </IconButton >
                                        <IconButton aria-label="Info"
                                            style={{ padding: '0px', marginRight: '15px' }}
                                            sx={{
                                                '&:hover': {
                                                    backgroundColor: 'transparent', // Tắt background-color khi hover
                                                    borderRadius: '0', // Loại bỏ border-radius khi hover
                                                    color: 'blue'
                                                },
                                                '& .MuiTouchRipple-root': {
                                                    overflow: 'unset',
                                                    pointerEvents: 'unset',
                                                    position: 'unset',
                                                    zIndex: 'unset',
                                                    borderRadius: 'unset'
                                                },
                                                '&:focus, &:active': {
                                                    outline: 'none',
                                                    boxShadow: 'none',
                                                },
                                            }} >
                                            <a href={`${itemsData.thongtin}`} title='Info' style={{
                                                textDecoration: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}>
                                                <InfoIcon fontSize='small' /><span style={{
                                                    marginLeft: '5px',
                                                    fontSize: '1rem'
                                                }}>Info</span>
                                            </a>
                                        </IconButton >
                                    </div>
                                </div>


                                <div className={`${facebook.row} ${facebook.rowcolumm10} ${facebook.rowcolumm10iframe}`} style={{ border: '1px solid #ddd', marginTop: '30px', backgroundColor: '#fff' }}>
                                    <div style={{ width: '100%' }}>

                                        <div style={{ textAlign: 'center', minHeight: '550px' }}>
                                            {itemsData.thum.map((item, index) => {
                                                return (
                                                    <a key={index}
                                                        data-fancybox="gallery"
                                                        data-src={`${item}`}
                                                        data-caption={`${itemsData.name}`}
                                                        data-title={`${itemsData.name}`}
                                                    >
                                                        <img src={`${item}`} alt={`${itemsData.name}`} title={`${itemsData.name}`} style={{ cursor: 'pointer' }} />
                                                    </a>
                                                )
                                            })}

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={`${facebook.columm1} ${facebook.columm15}`} style={{ width: "calc((0.85*100%)/12)" }}></div>
                    </div>


                </div>
            </div >
        </>


    )
}
export default Thumview;

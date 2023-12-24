'use client'

import facebook from '../styles/facebook.module.css';
import React, { useState } from 'react';
import Link from 'next/link';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { Pagination } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import InfoIcon from '@mui/icons-material/Info';
import slugify from 'slugify';

function HomeApp(props: IHome) {

    const { itemsVideo } = props

    const [currentPage, setCurrentPage] = useState(1);

    const itemsdata: any[] | null = itemsVideo;

    

    // Pagination
    const itemsPerPage = 10;
    let totalPages = 0;
    let currentPageData = [];

    if (itemsdata) {

        totalPages = Math.ceil(itemsdata.length / itemsPerPage);

        const paginatedData = Array.from({ length: totalPages }, (_, index) =>
            itemsdata.slice(index * itemsPerPage, (index + 1) * itemsPerPage)
        );

        currentPageData = paginatedData[currentPage - 1] || [];

    }


    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };


    const CustomPagination = () => {
        return (
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handleChange}
                // variant="outlined"
                shape="rounded"
                color="primary"
                style={{ width: '100%', justifyContent: 'center', margin: '20px 0', display: 'flex' }}
            />
        );
    };



    const columns: any = [
        {
            field: 'type', headerName: 'Loại', renderCell: (params: GridCellParams<any, any>) => {
                return (
                    <Link href={`/search?q=${slugify(params.value || '', {
                        lower: true,
                        locale: 'vi'
                    })}`} className={facebook.fielda} title={params.value}>
                        {params.value}
                    </Link>
                )

            }, align: 'center', flex: 0.15, headerAlign: 'center', disableColumnMenu: true, sortable: false, headerClassName: `${facebook.columnheader}`
        },
        {
            field: 'name', headerName: 'Tên', renderCell: (params: GridCellParams<any, any>) => {
                return (
                    <Link href={`/view/${slugify(params.row.code, {
                        lower: true,
                        locale: 'vi'
                    })}-p${params.row.id}.html?sbid=${params.row.bang}`} className={facebook.fielda} title={params.value}>
                        {params.value}
                    </Link>
                )

            }, flex: 1.45, sortable: false, headerClassName: `${facebook.columnheader2}`, cellClassName: `${facebook.columncell2}`
        },
        {
            field: 'link', headerName: 'Link', renderCell: (params: GridCellParams<any, any>) => (
                <>
                    <IconButton aria-label="info"
                        style={{ marginRight: '-10px' }}
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
                        <Link href={`${params.row.thongtin}`} title='Info'>
                            <InfoIcon />
                        </Link>
                    </IconButton >
                    <IconButton aria-label="play"
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
                        <Link href={`${params.row.watch}`} title='Watch'>
                            <PlayArrowIcon />
                        </Link>
                    </IconButton >
                    <IconButton aria-label="download"
                        style={{ marginLeft: '-10px', marginRight: '-10px' }}
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
                        <Link href={`${params.row.download}`} title='Download'>
                            <DownloadIcon />
                        </Link>
                    </IconButton >
                    <IconButton aria-label="subtitle"
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
                        <Link href={`${params.row.sub}`} title='Subtitle'>
                            <SubtitlesIcon />
                        </Link>
                    </IconButton >
                </>

            ), align: 'center', flex: 0.25, headerAlign: 'center', disableColumnMenu: true, sortable: false, headerClassName: `${facebook.columnheader2}`, cellClassName: `${facebook.columncell2}`
        },
        { field: 'Dayupload', headerName: 'Ngày', align: 'center', flex: 0.2, headerAlign: 'center', sortable: false, headerClassName: `${facebook.columnheader2}`, cellClassName: `${facebook.columncell2}` },
    ];

    return (
        <>
            <div className={facebook.container} style={{ marginBottom: '50px' }}>
                <div className={facebook.gird}>
                    <div className={facebook.row}>
                        <div className={facebook.columm1} style={{ width: 'calc((0.5*100%)/12)' }}></div>
                        <div className={facebook.columm10} style={{ width: 'calc((11*100%)/12)' }}>
                            <div className={facebook.columm10Product}>
                                <div className={`${facebook.row} ${facebook.rowcolumm10}`} style={{ padding: '0px', backgroundColor: '#f0f2f5' }}>
                                    <DataGrid
                                        style={{ minHeight: '529px' }}
                                        rows={currentPageData}
                                        columns={columns}
                                        autoHeight={true}
                                        disableRowSelectionOnClick={true}
                                        rowHeight={40}
                                        // checkboxSelection // Hiển thị checkbox cho việc lựa chọn hàng
                                        slotProps={{
                                            pagination: {
                                                component: CustomPagination,
                                            },
                                        }}

                                        sx={{
                                            '& .MuiDataGrid-footerContainer': {
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                backgroundColor: '#f0f2f5',
                                                borderTop: 'none'

                                            },
                                            '& .MuiDataGrid-cell': {
                                                maxWidth: 'none',
                                                minWidth: 'none',
                                                width: '100%',
                                            },
                                            "& .MuiDataGrid-row:hover": {
                                                backgroundColor: '#f5f5f5',
                                            },
                                            '& .MuiDataGrid-cell:focus': {
                                                outline: 'none', // Loại bỏ viền khi cột được chọn
                                                boxShadow: 'none', // Loại bỏ box-shadow khi cột được chọn
                                            },
                                            '& .MuiDataGrid-columnHeader:focus': {
                                                outline: 'none'
                                            },
                                            '& .MuiDataGrid-row': {
                                                borderBottom: '1px solid #ddd', // Tắt border dưới của hàng
                                                borderTop: 'none', // Tắt border trên của hàng
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={facebook.columm1} style={{ width: 'calc((0.5*100%)/12)' }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeApp;

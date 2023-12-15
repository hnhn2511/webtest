'use client'

import facebook from '../styles/facebook.module.css';
import React, { useState} from 'react';
import Link from 'next/link';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { Pagination } from '@mui/material';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function HomeApp(props: IHome) {

    const { itemsManga, itemsVideo } = props

    const [itemsdata, setItemsdata] = useState<any[]>(itemsManga);

    const [checked, setChecked] = React.useState(false);

    const [name, setName] = useState<string>('name');
    const [url, setUrl] = useState<string>('/manga/view');
    const [typedata, setTypedata] = useState<string>('Manga');

    // Switch onClick
    const handleChangeClick = () => {
        if(itemsdata === itemsManga){
            setItemsdata(itemsVideo);
            setName('Title');
            setUrl('/video/watch');
            setTypedata('Anime')
        }else{
            setItemsdata(itemsManga);
            setName('name');
            setUrl('/manga/view');
            setTypedata('Manga')
        }

    }

    // Switch
    const handleChange5 = (event: any) => {
        setChecked(event.target.checked);
    };

    // Pagination
    const itemsPerPage = 10;
    const totalPages = Math.ceil(itemsdata.length / itemsPerPage);

    const paginatedData = Array.from({ length: totalPages }, (_, index) =>
        itemsdata.slice(index * itemsPerPage, (index + 1) * itemsPerPage)
    );

    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const currentPageData = paginatedData[currentPage - 1] || [];

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
            field: 'style', renderHeader: (params: any) => (
                <Switch
                    checked={checked}
                    onChange={handleChange5}
                    color="primary"
                    sx={{
                        '& .MuiSwitch-track': {
                            backgroundColor: '#8cbae8', // Màu của thanh dưới khi không kích hoạt
                            opacity: 1, // Giữ cho màu sắc không thay đổi
                        }
                    }}
                    style={{color :'#1976d2'}}
                    disableRipple
                    onClick={handleChangeClick}
                />
            ), valueGetter: () => `${typedata}`, align: 'center', flex: 0.2, headerAlign: 'center', disableColumnMenu: true, sortable: false, headerClassName: `${facebook.columnheader}`, cellClassName: `${facebook.columncell}`
        },
        {
            field: `${name}`, headerName: 'Tên', renderCell: (params: GridCellParams<any, any>) => {
                return (
                    <Link href={`${url}/${encodeURIComponent(params.row[name])}/${params.row.id}`} className={facebook.fielda} title={params.value}>
                        {params.value}
                    </Link>
                )

            }, flex: 2, headerClassName: `${facebook.columnheader2}`, cellClassName: `${facebook.columncell2}`
        },
        {
            field: 'link', headerName: 'Link', renderCell: (params: GridCellParams<any, any>) => (
                <IconButton aria-label="play"
                    sx={{
                        '&:hover': {
                            backgroundColor: 'transparent', // Tắt background-color khi hover
                            borderRadius: '0', // Loại bỏ border-radius khi hover
                            color: 'blue'
                        },
                        '& .MuiTouchRipple-root': {
                            // Thêm các thuộc tính CSS tùy chỉnh để ghi đè lên MuiTouchRipple-root ở đây
                            // Ví dụ:
                            // backgroundColor: 'transparent',
                            // borderRadius: '0',
                            // Các thuộc tính khác nếu cần thiết
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
                    <Link href={`${url}/${encodeURIComponent(params.row[name])}/${params.row.id}`} title='view'>
                        <PlayArrowIcon />
                    </Link>
                </IconButton >
            ), align: 'center', flex: 0.15, headerAlign: 'center', disableColumnMenu: true, sortable: false, headerClassName: `${facebook.columnheader2}`, cellClassName: `${facebook.columncell2}`
        },
        { field: 'Dayupload', headerName: 'Ngày', align: 'center', flex: 0.3, headerAlign: 'center', headerClassName: `${facebook.columnheader2}`, cellClassName: `${facebook.columncell2}` },
    ];

    return (
        <>
            <div className={facebook.container} style={{ marginBottom: '50px' }}>
                <div className={facebook.gird}>
                    <div className={facebook.row}>
                        <div className={facebook.columm1}></div>
                        <div className={facebook.columm10}>
                            <div className={facebook.columm10Product}>
                                <div className={`${facebook.row} ${facebook.rowcolumm10}`} style={{ padding: '0px', backgroundColor: '#f0f2f5' }}>
                                    <DataGrid
                                        style={{ borderRight: 'none', borderLeft: 'none', borderBottom: 'none' }}
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
                                                backgroundColor: '#f0f2f5'

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
                                            }
                                        }}
                                    />
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
export default HomeApp;

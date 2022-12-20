import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'
import GlobalLoading from '../common/GlobalLoading'
import Topbar from '../common/Topbar'
import AuthModal from '../common/AuthModal';

const MainLayout = () => {
    return (
        <>
            {/* global loading */}
            <GlobalLoading />
            {/* global loading */}

            {/* login modal */}
            <AuthModal />
            {/* login modal */}
            <Box display="flex" minHeight="100vh">
                {/* header */}
                <Topbar />
                {/* header */}

                {/* main */}
                {/* Sử dụng Outlet truyền từ parent -> child cho phép giao diện người dùng lồng nhau hiển thị khi các tuyến con được hiển thị. */}
                <Box
                    component="main"
                    flexGrow={1}
                    overflow="hidden"
                    minHeight="100vh"
                >
                    <Outlet />
                    {/* main */}
                </Box>

            </Box>
            {/* footer */}
            <Footer />
            {/* footer */}
        </>
    )
}

export default MainLayout
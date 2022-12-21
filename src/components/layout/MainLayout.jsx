import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'
import GlobalLoading from '../common/GlobalLoading'
import Topbar from '../common/Topbar'
import AuthModal from '../common/AuthModal';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { toast } from "react-toastify"
import userApi from "../../api/modules/user.api"
import favoriteApi from '../../api/modules/favorite.api';
import { setListFavorites, setUser } from '../../redux/features/userSlice'

const MainLayout = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.user)

    useEffect(() => {
        authUser()
    }, [dispatch])

    useEffect(() => {
        if (user) getFavorites();
        if (!user) dispatch(setListFavorites([]))

    }, [user, dispatch])


    const authUser = async () => {
        const { response, err } = await userApi.getInfo()

        if (response) dispatch(setUser(response))
        if (err) dispatch(setUser(null))
    }

    const getFavorites = async () => {
        const { response, err } = await favoriteApi.getList()

        if (response) dispatch(setListFavorites(response))
        if (err) toast.error(err.message);
    }



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
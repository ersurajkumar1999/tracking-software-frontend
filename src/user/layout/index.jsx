
import { Outlet, useNavigate } from 'react-router-dom';

// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

// project import
import Drawer from './Drawer';
import Header from './Header';
import navigation from 'menu-items';
import Loader from 'components/Loader';
import Breadcrumbs from 'components/@extended/Breadcrumbs';

import { handlerDrawerOpen, useGetMenuMaster } from 'api/menu';

import { useDispatch, useSelector } from 'react-redux';

import React, { useEffect } from 'react';
import { getUserInfo } from 'services/ApiService';
import { setUserInfo } from 'features/userSlice';

const UserLayout = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.user.userInfo);
    console.log("user", userInfo);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const lastLog = useSelector((state) => state.timeLog.lastLog);

    const logData = lastLog;
    console.log("lastLog UserLayout", lastLog);
    const navigate = useNavigate();
    const { menuMasterLoading } = useGetMenuMaster();
    const downXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));

    useEffect(() => {

        // Function to take screenshots at random intervals within 10 minutes
        const takeScreenshotsRandomly = () => {
            const randomInterval = Math.random() * 600000; // Random time between 0 to 10 minutes (in milliseconds)
            setTimeout(() => {
                console.log("logDatalogDatalogData", logData);
                // takeScreenshot("669267fcd144a421eeaf53a2");
                takeScreenshotsRandomly(); // Schedule the next screenshot
            }, 100000);
        };
        takeScreenshotsRandomly();

        handlerDrawerOpen(!downXL);
        if (!isLoggedIn) {
            navigate('/login');
        }
        if (!userInfo) {
            const getUserProfileInfo = async () => {
                try {
                    const response = await getUserInfo();
                    if (!response.status) {
                        await errorMessage(response.data.message ?? null);
                        return;
                    } 
                    dispatch(setUserInfo(response.data.data));
                } catch (error) {
                    console.log("error", error);
                }
            }
            getUserProfileInfo();
        }
    }, [downXL, isLoggedIn, lastLog]);

    if (menuMasterLoading) return <Loader />;


    
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Header />
            <Drawer />
            <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                <Toolbar />
                <Breadcrumbs navigation={navigation} title />
                <Outlet />
            </Box>
        </Box>
    )
}

export default UserLayout
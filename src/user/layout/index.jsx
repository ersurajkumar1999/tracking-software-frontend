
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

import { useSelector } from 'react-redux';

import React, { useEffect } from 'react';
import html2canvas from 'html2canvas';
import { takeScreenshot } from 'helpers/Screenshot';

const UserLayout = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const navigate = useNavigate();
    const { menuMasterLoading } = useGetMenuMaster();
    const downXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));

    useEffect(() => {

        // Function to take screenshots at random intervals within 10 minutes
        const takeScreenshotsRandomly = () => {
            const randomInterval = Math.random() * 600000; // Random time between 0 to 10 minutes (in milliseconds)
            setTimeout(() => {
                // takeScreenshot();
                takeScreenshotsRandomly(); // Schedule the next screenshot
            }, 2000);
        };
        takeScreenshotsRandomly();

        handlerDrawerOpen(!downXL);
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [downXL, isLoggedIn]);

    if (menuMasterLoading) return <Loader />;

    // useEffect(() => {
    //     const takeScreenshot = () => {
    //         html2canvas(document.body).then(canvas => {
    //             // Convert canvas to base64 image data
    //             const imageData = canvas.toDataURL('image/png');
    //             // Send imageData to server or save locally as needed
    //             console.log('Screenshot taken:', imageData);
    //         });
    //     };

    //     // Function to take screenshots at random intervals within 10 minutes
    //     const takeScreenshotsRandomly = () => {
    //         const randomInterval = Math.random() * 600000; // Random time between 0 to 10 minutes (in milliseconds)
    //         setTimeout(() => {
    //             takeScreenshot();
    //             takeScreenshotsRandomly(); // Schedule the next screenshot
    //         }, 2000);
    //     };

    //     // Initial call to start taking screenshots
    //     takeScreenshotsRandomly();

    //     // Cleanup function (optional)
    //     return () => {
    //         // Clean up any timers or resources if necessary
    //     };
    // }, []);

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
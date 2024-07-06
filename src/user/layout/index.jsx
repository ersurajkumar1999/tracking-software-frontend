import { useEffect } from 'react';
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
import Cookies from 'js-cookie';
const UserLayout = () => {
    const navigate = useNavigate();
    const { menuMasterLoading } = useGetMenuMaster();
    const downXL = useMediaQuery((theme) => theme.breakpoints.down('xl'));
    let isLoggedIn = Cookies.get('_session');

    useEffect(() => {
        handlerDrawerOpen(!downXL);
        if(!isLoggedIn){
            navigate('/login');
        }
    }, [downXL, isLoggedIn]);

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
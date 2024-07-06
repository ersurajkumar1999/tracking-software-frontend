import { createBrowserRouter } from 'react-router-dom';

// project import
// import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import UserRoutes from './UserRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([UserRoutes, LoginRoutes]);

export default router;

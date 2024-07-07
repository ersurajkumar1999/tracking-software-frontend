import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable'
import UserLayout from 'user/layout';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const UserRoutes = {
  path: '/',
  element: <UserLayout />,
  children: [
    {
      path: 'user',
      children: [
        {
          path: 'dashboard',
          element: <DashboardDefault />
        },
        {
          path: 'profile',
          element: <SamplePage />
        },
        {
          path: 'sample-page',
          element: <SamplePage />
        },
        {
          path: 'logout',
          element: <SamplePage />
        },
      ]
    },
    // {
    //   path: 'sample-page',
    //   element: <SamplePage />
    // },
    // {
    //   path: 'shadow',
    //   element: <Shadow />
    // },
    // {
    //   path: 'typography',
    //   element: <Typography />
    // }
  ]
};

export default UserRoutes;

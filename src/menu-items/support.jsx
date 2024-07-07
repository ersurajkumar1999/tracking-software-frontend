// assets
import { ChromeOutlined, QuestionOutlined, LogoutOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
  LogoutOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/user/sample-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'logout',
      title: 'Logout',
      type: 'item',
      url: '/user/logout',
      icon: icons.LogoutOutlined,
      // external: true,
      // target: true
    }
  ]
};

export default support;

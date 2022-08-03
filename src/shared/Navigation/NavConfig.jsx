// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={28} height={28} />;

const navConfig = [
{
    title: 'Home',
    path: '/',
    icon: getIcon('eva:home-outline'),
  },
  {
    title: 'About',
    path: '/about',
    icon: getIcon('eva:info-outline'),
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: getIcon('eva:settings-outline'),
  }
];

export default navConfig;

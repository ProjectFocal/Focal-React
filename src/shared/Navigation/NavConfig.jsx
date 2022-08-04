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
    title: 'Profile',
    path: '/profile',
    icon: getIcon('eva:person-outline'),
  },
  {
    title: 'Friends',
    path: '/friends',
    icon: getIcon('akar-icons:people-group'),
  },
  {
    title: 'FocalPoints',
    path: '/focalpoints',
    icon: getIcon('material-symbols:hub-outline'),
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: getIcon('eva:settings-outline'),
  },
  {
    title: 'Help',
    path: '/about',
    icon: getIcon('bx:help-circle'),
  },
  
];

export default navConfig;

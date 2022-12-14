// component
import Iconify from '../../components/Iconify';
import React, { Component }  from 'react';
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
    title: 'Notifications',
    path: '/notifications',
    icon: getIcon('ic:baseline-notifications-none'),
  },
  
  {
    title: 'Achievements',
    path: '/achievements',
    icon: getIcon('ant-design:trophy-outlined'),
  },
  
  {
    title: 'Settings',
    path: '/settings',
    icon: getIcon('eva:settings-outline'),
  },
  {
    title: 'About',
    path: '/about',
    icon: getIcon('bx:help-circle'),
  },
 
  
];

export default navConfig;

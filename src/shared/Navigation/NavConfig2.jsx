// component
import Iconify from '../../components/Iconify';
import React, { Component }  from 'react';
// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={28} height={28} />;

const navConfig = [
{
    title: 'Explore',
    path: '/explore',
    icon: getIcon('ic:outline-explore'),
  },
  {
    title: 'FocalPoints',
    path: '/focalpoints',
    icon: getIcon('material-symbols:hub-outline'),
  },
  {
    title: 'Gaming',
    path: '/gaming',
    icon: getIcon('gg:games'),
  },
  {
    title: 'Tech',
    path: '/tech',
    icon: getIcon('tabler:devices-pc'),
  },
  
  
];

export default navConfig;

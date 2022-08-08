//Mui COMPS
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Link, Button, Drawer, Typography, Avatar, Stack, Paper } from '@mui/material';
import useResponsive from './useResponsive';
import Scrollbar from './Scrollbar';
import NavSection from './NavSection';
import navConfig from './NavConfig';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import React, { Component }  from 'react';
import MailIcon from '@mui/icons-material/Mail';
import HubIcon from '@mui/icons-material/Hub';
import FeedbackIcon from '@mui/icons-material/Feedback';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: 'px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
  
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const DRAWER_WIDTH = 230;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};


//Get User Time
export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  var Pfp = "N"
  var today = new Date()
  var curHr = today.getHours()
 
  var userName = "Nathan Aruna";
  
  if (curHr = 3){
    var timeMessage = "SPOOKY HOUR"
  }
  if (curHr < 12) {
    var timeMessage = "Good morning.";
  } if (curHr < 18) {
    var timeMessage = "Good afternoon.";
  } if (curHr <24) {
    var timeMessage = "Good evening.";
  }

  var status = timeMessage 
  const { pathname } = useLocation();
  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);


//Rendering The Side Nav
  const renderContent = (
    <Scrollbar 
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <Box sx={{ px: 2.5, py: 0, display: 'inline-flex' }}>
      </Box>
    
    <div class="dayStatusBox">
      <card variant="outlined">
            <Box sx={{ width: '100%', }}>
            <Stack spacing={0}>
            <Item>
            <Stack direction="row" spacing={2}>

    <div class="dayStatusChip">
    <Chip avatar={<Avatar>N</Avatar>} label="Nathan Aruna The Great" />
    </div>
      </Stack>
      </Item> 
      </Stack>
      </Box>   
      </card>
      </div>


      <div class="dayStatusBox">
      <card variant="outlined">
            <Box sx={{ width: '100%', }}>
            <Stack spacing={0}>
            <Item>
            <Stack direction="row" spacing={2}>

    <div class="dayStatusChip">
      <div class="padding">
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
    </div>
    <div class="padding">
    <Badge badgeContent={4} color="primary">
      <HubIcon color="action" />
    </Badge>
    </div>

    <div class="padding">
    <Badge badgeContent={4} color="primary">
      <FeedbackIcon color="action" />
    </Badge>
    </div>
    </div>
      </Stack>
      </Item> 
      </Stack>
      </Box>   
      </card>
      </div>
    
    
      
    <Divider variant="middle"/>
      <NavSection navConfig={navConfig} />
       <Divider variant="middle" />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ px: 0, pb: 0, mt: 0}}>
         <Stack alignItems="center" spacing={20} sx={{ pt: 50, borderRadius: 2, position: 'relative' }}>
          <Button href="login" target="_blank" variant="contained">
             Log Out 
          </Button>
        </Stack>
      </Box>
    </Scrollbar>
  );


  return (
    <Paper elevation={6}>
    <RootStyle>
      
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: '',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
    </Paper>
  );
}

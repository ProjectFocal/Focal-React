//Mui COMPS
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Drawer, Avatar, Stack, Paper, } from '@mui/material';
import useResponsive from './useResponsive';
import Scrollbar from './Scrollbar';
import NavSection from './NavSection';
import navConfig from './NavConfig';
import navConfig2 from './NavConfig2';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import React from 'react';
import { userImage, activity, userEmail, userName, aboutMe } from '../../components/User/UserHandler';


//icons
import MailIcon from '@mui/icons-material/Mail';
import HubIcon from '@mui/icons-material/Hub';
import NoteIcon from '@mui/icons-material/Note';



//Const Start 
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
//Const End




//User Variables
export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {

 
  var today = new Date()
  var curHr = today.getHours()
  
  
//Get current time of day type
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

//setting current time of day type
  var status = timeMessage 
  const { pathname } = useLocation();
  const isDesktop = useResponsive('up', 'lg');


//side bar open shit
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
      }}>

      <Box sx={{ px: 2.5, py: 0, display: 'inline-flex' }}></Box>
      

      <div className="profileCard">
      
           
      <Stack spacing={0}>
            
       <Chip variant="outlined" avatar={<Avatar alt="Remy Sharp" src={userImage} />} label={userName} />
         
      </Stack>
         
     
      </div>

      <div className="profileCard">
      <card variant="outlined">
            <Box sx={{ width: '100%', }}>
            <Stack spacing={0}>
            <Item>
            <Stack direction="row" spacing={2}>

            
            <Chip size="small" label="Online" color="success" variant="outlined" />  
            <div className='profileStatus'>
            <Badge badgeContent={0} color="primary">
           <MailIcon color="action" />
           </Badge>   
           </div>  
           <div className='profileStatus'>
            
            <Badge badgeContent={0} color="primary">
           <HubIcon color="action" />
           
           </Badge>   
           </div>
           <div className='profileStatus'>
            <Badge badgeContent={4} color="primary">
           <NoteIcon color="action" />
           </Badge>   
           </div>  
            </Stack>
          </Item> 
         </Stack>
        </Box>   
      </card>
      </div>
     
     
      
    <Divider variant="middle"/>
      <NavSection navConfig={navConfig}/>
    <Divider variant="middle"/>
      <NavSection navConfig={navConfig2}/>

    
      
       <Divider variant="middle" />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ px: 0, pb: 0, mt: 0}}>

        <Stack alignItems="center" spacing={20} sx={{ pt: 50, borderRadius: 2, position: 'relative' }}>
          <div className="dayStatusBox">
          <card variant="outlined">
            <Box sx={{ width: '100%', }}>
            <Stack spacing={0}>
            <Item>
        <Stack direction="row" spacing={2}>

      
      </Stack>
      </Item> 
      </Stack>
      </Box>   
      </card>
      </div>
          
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

/* eslint-disable no-unused-vars */
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
import { ThemeProvider } from '@mui/system';
import makeStyles from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { blue, blueGrey } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
  
  



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


// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    
    <Scrollbar 
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
        
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
      </Box>

      

      <Box sx={{ mb: 5, mx: 2.5 }} />
      <div class="padding">
      <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        
      </StyledBadge>
    </Stack>
    </div>

    <div class="padding">
    <Stack direction="row" spacing={1}>
      <Chip label="Good *timeOfDay* *user* "/>
      
    </Stack>
    </div>
    
    <Divider variant="middle"/>
      <NavSection navConfig={navConfig} />

      <Divider variant="middle" />



      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ px: 0, pb: 0, mt: 0}}>
        <Stack alignItems="center" spacing={20} sx={{ pt: 50, borderRadius: 2, position: 'relative' }}>
          <Button href="https://material-ui.com/store/items/minimal-dashboard/" target="_blank" variant="contained">
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

//MUI COMPS
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import {Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import Iconify from '../../components/Iconify';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import React, { Component }  from 'react';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Grow from '@mui/material/Grow';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Menu from '@mui/icons-material/Menu';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useTheme } from '@mui/material/styles';


//Icons
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddCircleIcon from '@mui/icons-material/AddCircle';

//Const Start
const DRAWER_WIDTH = 200;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 70;

const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  background: 'linear-gradient(rgb(35, 51, 80) 0%, rgb(35, 51, 63) 100%)',
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  '&:before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
    background:
      'radial-gradient(at center center, rgb(55, 71, 83) 0%, rgba(62, 79, 249, 0) 64%)',
  },
  '&:after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    background:
      'radial-gradient(at center center, rgb(75, 91, 103) 0%, rgba(247, 237, 225, 0) 70%)',
    transform: 'rotate(10deg)',
  },
});



const style = {
  position: 'absolute',
  top: '50%',
  left: '55%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 60,
  p: 4,
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));
//Const End




//idek what this does
DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};



//Top nav open/close handeling
export default function DashboardNavbar({ onOpenSidebar }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  
  

  return (
    
      <RootStyle>
        
        <ToolbarStyle className="navbar active">
        <WallPaper />
          
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
          <Iconify icon="eva:menu-fill" />
          </IconButton>
          
          
      
        
        <div className='navbar'>
        <Search onClick={handleOpen} sx={{ flexGrow: 1 }}>
          <SearchIconWrapper>
            <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }} />   
        </Search>
        </div>

        <div className='navbar'>
        <Button href="/UploadContent" variant="contained" endIcon={<AddCircleIcon/>}>
           Upload
        </Button>
        </div>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="box-content">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Whats On Your Mind?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Autocomplete
                multiple
                id="tags-outlined"
                options={FocalSearchFilters}
                getOptionLabel={(option) => option.title}
                defaultValue={[FocalSearchFilters[3]]}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label=""
                    placeholder="Type In Me!" />
                )} />
            </Typography>
          </Box>
        </Modal>
      
      </ToolbarStyle>
      
    </RootStyle>
  );
}


//Filters For Search
const FocalSearchFilters = [
  { title: 'FocalPoints', year: 1994 },
  { title: 'Posts', year: 1974 },
  { title: 'Profiles', year: 1972 },
  { title: 'All', year: 1972 },
  
];

//MUI Comps
import * as React from 'react';
import { useState } from 'react';
import Page from '../components/Page';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import { Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




//Const Start 
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
//Const End 




function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This Key should Not Be Shared';
    }

    return '';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Settings() {
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


 





  return (
    
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value}  onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Account" {...a11yProps(0)} />
          <Tab label="Profile" {...a11yProps(1)} />
          <Tab label="Notifications" {...a11yProps(2)} />
          <Tab label="Theme" {...a11yProps(3)} />
          <Tab label="Special Feautures" {...a11yProps(4)} />
          <Tab label="Privacy" {...a11yProps(5)} />
        </Tabs>
      </Box>

      
      
      <TabPanel value={value} index={0}>
      <card variant="outlined">
        <Box sx={{ width: '20%' }}>
          <Stack spacing={3}>
            <Item> <Chip label="ExampleEmail@Gmail.com"/></Item>
          </Stack>
        </Box>
      </card>
      </TabPanel>
     


      <TabPanel value={value} index={1}>
      <div class="padding">
        
        <OutlinedInput placeholder="UserName" />
        <div class="spacer"></div>
        <OutlinedInput placeholder="About Me" />
        <div class="spacer"></div>
        <OutlinedInput placeholder="Custom Status" />
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        </div>

      </TabPanel>



      <TabPanel value={value} index={2}>
      <div className='padding'> 
      <Chip label="User Messages"/>
      <Switch {...label} defaultChecked />
      </div>

      <div className='padding'>
      <Chip label="Focal Points"/>
      <Switch {...label} defaultChecked />
      </div>

      <div className='padding'>
      <Chip label="Focal Messages"/>
      <Switch {...label} defaultChecked />
      </div>

      <div className='padding'>
      <Chip label="All Notifications"/>
      <Switch {...label} defaultChecked />
      </div>
      
    

        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
      </TabPanel>


      <TabPanel value={value} index={3}>
      

        
      
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
      </TabPanel>


      <TabPanel value={value} index={4}>
      <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '29ch' }}>
        <OutlinedInput placeholder="Please enter Super Secret Key" />
        <MyFormHelperText />
      </FormControl>
    </Box>
      </TabPanel>

      <TabPanel value={value} index={5}>
      
      <div>
      <Button onClick={handleClickOpen('paper')}>Terms of Service</Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Terms of Service</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(10)]
              .map(
                () => `Terms of service (also known as terms of use and terms and conditions, commonly abbreviated as TOS or ToS, ToU or T&C) are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service.`,
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}>Accept</Button>
        </DialogActions>
      </Dialog>
    </div>

      </TabPanel>
    </Box>
    
  );
}



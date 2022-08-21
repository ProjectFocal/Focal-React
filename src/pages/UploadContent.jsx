import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import AspectRatio from '@mui/joy/AspectRatio';
import ListDivider from '@mui/joy/ListDivider';
import Avatar from '@mui/joy/Avatar';
import { Paper } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { Navigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button2 from '@mui/material/Button';
import Chip2 from '@mui/material/Chip';
import IconButton2 from '@mui/material/IconButton';


// Icons import
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ForwardToInboxRoundedIcon from '@mui/icons-material/ForwardToInboxRounded';
import FolderIcon from '@mui/icons-material/Folder';

export default function UploadContent() {
  const [value, setValue] = React.useState('');
  
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleChange = (event) => {
    setValue(event.target.value);
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
    <>
    

    <div className='padding'>
      <Paper elevation={6}>
        <Sheet

          sx={{
            minHeight: 500,
            borderRadius: 'sm',
            p: 2,
            mb: 3,
            bgcolor: 'background.componentBg',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Avatar
                src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                srcSet="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                sx={{ borderRadius: 'sm' }} />
              <Box sx={{ ml: 2 }}>
                <Typography level="body2" textColor="text.primary" mb={0.5}>
                  USERNAME
                </Typography>
                <Typography level="body3" textColor="text.tertiary">
                  
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: 'flex', height: '32px', flexDirection: 'row', gap: 1.5 }}
            >
              <Button2 variant="outlined"  >
               Post
              </Button2>
              
              <IconButton2 color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <ImageIcon />
              </IconButton2>
            </Box>
          </Box>

          <ListDivider component="hr" sx={{ mt: 2 }} />
          <ListDivider component="hr" />

          <TextField fullWidth label="Description" id="fullWidth" multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
            variant="filled" />

          <Typography level="body2" textColor="text.secondary" mt={2} mb={2}>

          
                

            <Alert severity="warning">Please Comply With Our <Chip2 size="small" label="Terms Of Service" variant="outlined" onClick={handleClickOpen('paper')} /> Before Posting.</Alert>
          </Typography>
          <ListDivider component="hr" />
          <Typography
            level="body2"
            fontWeight="md"
            textColor="text.primary"
            mt={2}
            mb={2}
          >
            Attachments
          </Typography>
          <Box
            sx={(theme) => ({
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              '& > div': {
                boxShadow: 'none',
                '--Card-padding': '0px',
                '--Card-radius': theme.vars.radius.sm,
              },
            })}
          >
            <Card>
              <AspectRatio ratio="1" sx={{ minWidth: 80 }}>
                <img
                  src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=2370"
                  alt="Yosemite National Park" />
              </AspectRatio>
            </Card>
            <Card >
              <AspectRatio ratio="1" sx={{ minWidth: 80 }}>
                <img
                  src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=2370"
                  alt="Yosemite National Park" />
              </AspectRatio>
            </Card>
      
          </Box>
        </Sheet>
      </Paper>
    </div>


    <div>

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
    </>
  );
}

import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import IconButton from '@mui/material/IconButton';
import { userImage, activity, userEmail, userName, aboutMe } from '../components/User/UserHandler';


export default function InteractiveCard() {
 
  return (
    <center>
   
    <Paper elevation={6} sx={{
      minWidth: 400,
      maxWidth: 400,

    }} >
    <Card
      row
      sx={{
        minWidth: '320px',
        gap: 2,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img
          src={userImage}
          alt=""
        />
      </AspectRatio>
      <Box>
        <Box sx={{ ml: 0.5 }}>
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>

            {userName}

          </Typography>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            
            {aboutMe}
          </Typography>

          
          <Button href="/settings" size="small" variant="contained">Edit Profile</Button> <Button href="/uploadcontent" size="small" variant="contained">Create</Button> 
          <IconButton href="/saved"color="primary" aria-label="delete">
           <BookmarkIcon />
         </IconButton>


    
        </Box>
      </Box>
    </Card>
    </Paper>
    
    
    </center>
  );
}

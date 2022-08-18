import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


export default function InteractiveCard() {
 
  return (
    <div className='padding'>
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
          src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
          alt=""
        />
      </AspectRatio>
      <Box>
        <Box sx={{ ml: 0.5 }}>
          <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
            USERNAME HERE

          </Typography>
          <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
            
              The about me part of the profile goes here.
          </Typography>

          
          <Button href="/settings" size="small" variant="outlined">Edit Profile</Button> <Button href="/uploadcontent" size="small" variant="outlined">Create</Button> 
         


    
        </Box>
      </Box>
    </Card>
    </Paper>
    </div>
  );
}

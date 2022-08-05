import { useState } from 'react';
import Page from '../components/Page';
import React, { Component }  from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Chip } from '@mui/material';

var status = String("Active")

export default function About() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };


  const theme = useTheme(); 
  

  return (
    
    <Card sx={{ display: 'flex' }}>
      <CardMedia
      component="img"
      sx={{ width: 151 }}
      image="https://institutcommotions.com/wp-content/uploads/2018/05/blank-profile-picture-973460_960_720-1.png"
      alt="ProfilePicture"
    />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          UserName
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
        <Chip label={status } color="success" variant="outlined" />
        </Typography>
      </CardContent>
    </Box>
    
  </Card>
      
    
  );
}

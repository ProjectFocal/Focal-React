import { useState } from 'react';
import React, { Component }  from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



// mock

// ----------------------------------------------------------------------

export default function About() {
  // eslint-disable-next-line no-unused-vars
  const [openFilter, setOpenFilter] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };


  return (
    <> 
    <div class="aboutCards">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://cdn.discordapp.com/attachments/923593657486049342/1005566436854472754/IMG_0082.JPG"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Nathan
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Full stack developer working on Project Focal. Age: 15, Occupation: School
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>

    <div class="aboutCards">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://camo.githubusercontent.com/2bd01d967f182b48ff9726069a0bbbc5d2cb500896d4422f60b76cc3f5f5195a/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3935303836303838303630303439383234362f3936313739373938343835393835323831302f4453434e363936362e4a50473f77696474683d393135266865696768743d363836"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Domenico
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Full stack developer working on Project Focal. Age: 15, Occupation: School
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </>    
  );
}

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
import { Redirect } from "react-router-guard";
import AuthService from "../services/auth.service";
import React, { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

 
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

            {currentUser.username}

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
  }

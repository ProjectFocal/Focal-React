import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import { notiType, profilePicture, timeAgo, title } from '../components/UsersNotifications/UsersNotificationshandler';


//Demo All of this content will be handled in the Friends Handler src/components/UsersFriends
export default function AlignItemsList() {
  return (
    <>
    <div className='padding'>
    <Chip label="‎ ‎ System Notifications: ‎ ‎ " variant="outlined" />
    
    </div>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/110752227?s=200&v=4" />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={<React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              <Chip size="small" label={notiType} color="primary" variant="outlined" />
            </Typography>
            {timeAgo}
          </React.Fragment>} />
      </ListItem>
      <Divider variant="inset" component="li" />
      
      
    </List>
    <div className='padding'>
    <Chip label="‎ ‎ User Notifications: ‎ ‎ " variant="outlined" />
    </div>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Z9vjM-_Ww_rUHKOYFQ3brhBsKWniGSN7jembYtImHkPzHReyZ4zNBlPF550WjI8a_eE&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Nathan Aruna The Great"
          secondary={<React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              <Chip size="small" label="Liked  Your Post" color="primary" variant="outlined" />
            </Typography>
            {" — A few days ago"}
          </React.Fragment>} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Z9vjM-_Ww_rUHKOYFQ3brhBsKWniGSN7jembYtImHkPzHReyZ4zNBlPF550WjI8a_eE&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Nathan Aruna The Great"
          secondary={<React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              <Chip size="small" label="Sent You a Message" color="primary" variant="outlined" />
            </Typography>
            {" — A few days ago"}
          </React.Fragment>} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Z9vjM-_Ww_rUHKOYFQ3brhBsKWniGSN7jembYtImHkPzHReyZ4zNBlPF550WjI8a_eE&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Nathan Aruna The Great"
          secondary={<React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              <Chip size="small" color="primary" label="Commented On Your Post" variant="outlined" />
            </Typography>
            {' — A few days ago'}
          </React.Fragment>} />
      </ListItem>
    </List>
    
    </>
  );
}

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import { notiType, profilePicture, timeAgo, title } from '../UsersNotifications/UsersNotificationshandler';

//Demo All of this content will be handled in the Friends Handler src/components/UsersFriends
export default function AlignItemsList() {
  return (
    <>
    
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
    
    </>
  );
}

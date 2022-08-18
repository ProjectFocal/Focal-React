import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';


//Demo All of this content will be handled in the Friends Handler src/components/UsersFriends
export default function AlignItemsList() {
  return (
    <>
    <div className='padding'>
    <h4>Friends:</h4>
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
              <Chip size="small" label="Online" color="success" variant="outlined" />
            </Typography>
            {" — The last message communicated with this user will go here."}
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
              <Chip size="small" label="Away" color="warning" variant="outlined" />
            </Typography>
            {" — The last message communicated with this user will go here."}
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
              <Chip size="small" label="Offline" variant="outlined" />
            </Typography>
            {' — The last message communicated with this user will go here.'}
          </React.Fragment>} />
      </ListItem>
    </List>
    <div className='padding'>
    <h4>Suggested users:</h4>
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
              <Chip size="small" label="Online" color="success" variant="outlined" />
            </Typography>
            {" — The last message communicated with this user will go here."}
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
              <Chip size="small" label="Away" color="warning" variant="outlined" />
            </Typography>
            {" — The last message communicated with this user will go here."}
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
              <Chip size="small" label="Offline" variant="outlined" />
            </Typography>
            {' — The last message communicated with this user will go here.'}
          </React.Fragment>} />
      </ListItem>
    </List>
    
    </>
  );
}

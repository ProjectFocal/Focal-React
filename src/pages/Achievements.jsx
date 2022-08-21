import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';




const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const message = `Achievements will be made up later and will be used to reward users for their interaction with project Focal.`;

export default function Achievements(props) {
    
  return (
    <>
    <center>
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
          <StyledPaper
              sx={{
                  my: 1,
                  p: 2,
              }}
          >
              <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                      <Avatar>1</Avatar>
                  </Grid>
                  <Grid item xs>
                      <Typography>{message}</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box sx={{ width: '100%', mr: 1 }}>
                              <LinearProgress variant="determinate" {...props} />
                          </Box>
                          <Box sx={{ minWidth: 35 }}>
                              <Typography variant="body2" color="text.secondary">{`${Math.round(
                                  props.value
                              )}%`}</Typography>
                          </Box>
                      </Box>
                  </Grid>
              </Grid>
          </StyledPaper>
      </Box><Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
              <StyledPaper
                  sx={{
                      my: 1,
                      p: 2,
                  }}
              >
                  <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                          <Avatar>2</Avatar>
                      </Grid>
                      <Grid item xs>
                          <Typography>{message}</Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Box sx={{ width: '100%', mr: 1 }}>
                                  <LinearProgress variant="determinate" {...props} />
                              </Box>
                              <Box sx={{ minWidth: 35 }}>
                                  <Typography variant="body2" color="text.secondary">{`${Math.round(
                                      props.value
                                  )}%`}</Typography>
                              </Box>
                          </Box>
                      </Grid>
                  </Grid>
              </StyledPaper>
          </Box><Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
              <StyledPaper
                  sx={{
                      my: 1,
                      p: 2,
                  }}
              >
                  <Grid container wrap="nowrap" spacing={2}>
                      <Grid item>
                          <Avatar>3</Avatar>
                      </Grid>
                      <Grid item xs>
                          <Typography>{message}</Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <Box sx={{ width: '100%', mr: 1 }}>
                                  <LinearProgress variant="determinate" {...props} />
                              </Box>
                              <Box sx={{ minWidth: 35 }}>
                                  <Typography variant="body2" color="text.secondary">{`${Math.round(
                                      props.value
                                  )}%`}</Typography>
                              </Box>
                          </Box>
                      </Grid>
                  </Grid>
              </StyledPaper>
          </Box>
          </center>
          </>

        
  );
}

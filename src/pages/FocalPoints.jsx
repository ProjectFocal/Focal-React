import { useState } from 'react';
import React, { Component }  from 'react';
import Page from '../components/Page';
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import focalpoint from './FocalPoint.css'



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Focal 
      </Link>{''}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
          }}
        >

<div class="svg-container">
        <svg id="mySVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 300">
          <circle class="circle blue-bg" cx="58.14" cy="114.94" r="10.72" />
          <circle class="line" cx="58.25" cy="115" r="15.33" />

          <path data-async class="line" d="M58.25 99.67V70" />
          <path data-async class="line" d="M70.06 105.22l32.11-26.66" />
          <path data-async class="line" d="M70.54 124.17l23.61 19.3" />
          <path data-async class="line" d="M55.75 130.13L40.25 211" />
          <path class="line" d="M45.96 124.17l-31.81 19.72" />

          <circle data-async class="line" cx="58.25" cy="66" r="4.25" />
          <circle data-async class="line" cx="105.25" cy="76" r="4.25" />
          <circle data-async class="line" cx="97.25" cy="146" r="4.25" />
          <circle data-async class="line" cx="40.25" cy="215" r="4.25" />
          <circle class="line" cx="10.75" cy="146" r="4.25" />

          <circle data-async class="circle step1" cx="58.25" cy="66" r="4" />
          <circle data-async class="circle step1" cx="105.25" cy="76" r="4" />
          <circle data-async class="circle step1" cx="97.25" cy="146" r="4" />
          <circle data-async class="circle step1" cx="40.25" cy="215" r="4" />
          <circle class="circle step1" cx="10.75" cy="146" r="4" />

          <path data-async class="line" d="M61.42 63.56l46.62-34.68" />
          <path data-async class="line" d="M109.25 76l42-.01" />
          <path data-async class="line" d="M99.8 142.92l52.9-63.84" />
          <path data-async class="line" d="M94.7 149.08l-52 62.76" />
          <path class="line" d="M38.55 211.38l-26.23-61.7" />

          <circle data-async class="line" cx="111.25" cy="26.5" r="4.25" />
          <circle class="line" cx="155.25" cy="75.99" r="4.25" />

          <circle data-async class="circle step2" cx="111.25" cy="26.5" r="4" />
          <circle class="circle step2" cx="155.25" cy="75.99" r="4" />

          <path data-async class="line" d="M152.44 73.14L113.89 29.5" />
          <path data-async class="line" d="M155.25 71.99l-7.5-54.49" />
          <path data-async class="line" d="M158.18 78.71l34.13 33.41" />
          <path class="line" d="M43.97 213.54l67.78-25.53" />

          <circle data-async class="line" cx="147.75" cy="13.5" r="4.25" />
          <circle data-async class="line" cx="195.08" cy="115" r="4.25" />
          <circle class="line" cx="115.75" cy="186.5" r="4.25" />

          <circle data-async class="circle step3" cx="147.75" cy="13.5" r="4" />
          <circle data-async class="circle step3" cx="195.08" cy="115" r="4" />
          <circle data-async class="circle step3" cx="115.75" cy="186.5" r="4" />

          <path data-async class="line" d="M195.77 111.06l9.29-53.12" />
          <path data-async class="line" d="M197.84 117.9l38.66 40.7" />
          <path data-async class="line" d="M119.69 185.82l53.56-8.67" />
          <path class="line" d="M118.46 189.43l96.11 94.43" />

          <circle data-async class="line" cx="205.75" cy="54" r="4.25" />
          <circle data-async class="line" cx="239.25" cy="161.5" r="4.25" />
          <circle data-async class="line" cx="177.25" cy="176.5" r="4.25" />
          <circle class="line" cx="217.42" cy="286.67" r="4.25" />

          <circle data-async class="circle step4" cx="205.75" cy="54" r="4" />
          <circle data-async class="circle step4" cx="239.25" cy="161.5" r="4" />
          <circle data-async class="circle step4" cx="177.25" cy="176.5" r="4" />
          <circle class="circle step4" cx="217.42" cy="286.67" r="4" />

          <path data-async class="line" d="M235.46 162.78l-54.21 12.78" />
          <path data-async class="line" d="M237 164.81l-36.21 47.1" />
          <path class="line" d="M179.12 180.03l17.33 31.4" />

          <circle class="line" cx="198.25" cy="215" r="4.25" />
          <circle class="circle step5" cx="198.25" cy="215" r="4" />
          </svg>
          
          
        

      </div>
        </Grid>
        
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            <Box component="form" noValidate sx={{ mt: 2 }}>
              

              <h1>Focal</h1>
              
              <Button variant="outlined" href="#Create FocalPoin">
               Create FocalPoint
              </Button>

              <Button variant="outlined" href="#Browse FocalPoints">
              Browse FocalPoints
              </Button>

              
              
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                  
                </Grid>
              </Grid>
              <Copyright  sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


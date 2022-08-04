import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';



const tiers = [
    {
        title: '',
        price: '0',
        description: [
          '10 users included',
          '2 GB of storage',
          'Help center access',
          'Email support',
        ],
        buttonText: 'Profile',
        buttonVariant: 'outlined',
      },
      {
        title: '',
        subheader: '',
        price: '15',
        description: [
          '20 users included',
          '10 GB of storage',
          'Help center access',
          'Priority email support',
        ],
        buttonText: 'Focal Points',
        buttonVariant: 'contained',
      },
      {
        title: '',
        price: '30',
        description: [
          '50 users included',
          '30 GB of storage',
          'Help center access',
          'Phone & email support',
        ],
        buttonText: 'Activity',
        buttonVariant: 'outlined',
      },
];



function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          FOCAL
          <div class="spacer"></div>
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
         Welcome to Focal. This is example text because its is 3 am in the morning and i am to tired to come up with something to actually be presntable to users
        </Typography>
      </Container>
      <div class="spacer"></div>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
               
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
      </Container>
      {/* Footer */}
      
      {/* End footer */}
    </React.Fragment>
    
  );
}

export default function Pricing() {
  return <PricingContent />;
}
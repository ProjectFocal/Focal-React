import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';

export default function BasicCard() {
  return (
    <><Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <Button href="/" variant="text">
          <CardCover>
            <img

              src="https://cdnb.artstation.com/p/assets/images/images/037/517/209/large/e-heshna-keyboard.jpg?1620673790&dl=1"
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              alt="" />
          </CardCover>
          <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
            <Typography
              level="h6"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Keyboards
            </Typography>
          </CardContent>
        </Button>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <Button href="/" variant="text">
          <CardCover>
            <img
              src="https://dlcdnrog.asus.com/rog/media/1492071878551.webp"
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              alt="" />
          </CardCover>
          <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
            <Typography
              level="h6"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Hardware
            </Typography>
          </CardContent>
        </Button>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <Button href="/" variant="text">
          <CardCover>
            <img
              src="https://image.benq.com/is/image/benqco/kv-11?$ResponsivePreset$&fmt=png-alpha"
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              alt="" />
          </CardCover>
          <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
            <Typography
              level="h6"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Audio
            </Typography>
          </CardContent>
        </Button>
      </Card>
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <Button href="/" variant="text">
          <CardCover>
            <img
              src="https://www.aspfaqs.com/wp-content/uploads/2021/10/pankaj-patel-_SgRNwAVNKw-unsplash-1.jpg"
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              alt="" />
          </CardCover>
          <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
            <Typography
              level="h6"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Programing
            </Typography>
          </CardContent>
        </Button>
      </Card>

      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <Button href="/" variant="text">
          <CardCover>
            <img
              src="https://www.reviewgeek.com/p/uploads/2022/01/7a093e60.png?width=400"
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              alt="" />
          </CardCover>
          <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
            <Typography
              level="h6"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 12, sm: 18 }}
            >
              Creations
            </Typography>
          </CardContent>
        </Button>
      </Card>
    </Box>
    <Divider variant="middle" />
    
    
    
    </>
    
  );
}

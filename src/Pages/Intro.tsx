import { 
    Typography,
    Container,
    Box,
    Button,
    Theme,
    SxProps,
    Grid
  } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';

import { Link } from 'react-router-dom';

import ProductHeroLayout from '../Components/ProductHeroLayout';

const backgroundImage = 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80';

const item: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
  };
  

const Intro = () => {
  return (
    <Box>
        <ProductHeroLayout
        sxBackground={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: '#7fc7d9', // Average color of the background image.
            backgroundPosition: 'center',
        }}
        >
        {/* Increase the network loading priority of the background image. */}
        <img
            style={{ display: 'none' }}
            src={backgroundImage}
            alt="increase priority"
        />
        <Typography variant="h2">
            Upgrade your Sundays
        </Typography>
        <Typography
            color="inherit"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
        >
            Crafting the Perfect Brew, One Sip at a Time!
        </Typography>
        <Button
            variant="contained"
            size="large"
            component={Link}
            to={"/companies"}
            sx={{ minWidth: 200 }}
        >
            company list
        </Button>
        </ProductHeroLayout>
        <Box
            component="section"
            sx={{ display: 'flex', overflow: 'hidden', marginTop: '-5rem' }}
        >
      <Container
        maxWidth={false}
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1573641287741-f6e223d81a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="curvy lines"
          sx={{
            position: 'absolute',
            opacity: 0.4,
            width: '100%',
            height: '200%',  // make sure the image covers the full height of its container
          }}
        />
        <div>
          <Grid container spacing={5} 
            >
            <Grid item xs={12} md={4} >
              <Box sx={item}>
                <Box
                />
                 <StarBorderIcon fontSize='large'/>
                <Typography variant="h5" align="center">
                   We are the top rated company for  developing
                   products and reviewing it by the associate of the mapcom
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                />
                <BalanceIcon fontSize='large'/>
                <Typography variant="h5" align="center">
                  First come, first served. Our offers are in limited quantities, so
                  be quick.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                />
                <ClosedCaptionOffIcon fontSize='large'/>
                <Typography variant="h5" align="center">
                  {'New offers every week. New experiences, new surprises. '}
                  {'Your Sundays will no longer be alike.'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
    </Box>
  )
}

export default Intro
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Hidden, Typography } from '@material-ui/core';
import { BooksCarousel } from '../components/home/BooksCarousel';
import Fade from 'react-reveal/Fade'
import img1 from '../assets/person1.png'
import img2 from '../assets/person2.png'


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 60,
    marginInline: 0
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    marginInline: 'auto',
    marginBottom: 100,
  },
  title: {
    color: '#6838ad',
    fontSize: '40px',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    paddingTop: 34
  },
  description: {
    color: '#1e0241',
    fontFamily: 'Open Sans',
    fontSize: '20px',
    textAlign: 'justify',
    width: '95%',
    marginTop: 20
  },
  imgBox: {
    background: 'linear-gradient(90deg, rgba(241,110,84,1) 0%, rgba(213,33,119,1) 100%)'
  },
  textContainer: {
    background: 'white',
    paddingTop: 60,
    [theme.breakpoints.up('xl')]: {
      paddingInline: 150,
    },
  }
}));

export const ThemesSection = () => {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth="xl" id="themes" className={classes.container}>
        <BooksCarousel />
      <Grid container className={classes.textContainer}>
        <Fade duration={2000} cascade>
          <Grid item container justify='space-between' className={classes.item} xs={12} md={11}>
            <Hidden mdDown>
              <div className={classes.imgBox}>
                <img style={{ position: 'relative', top: '40px', left: '40px',  width: "100%" }} alt="" height='350px' src={img1} />
              </div>
            </Hidden>
            <Grid item direction='column' md={6}>
              <Typography className={classes.title} variant="h3" >
                Vivamus posuere libero erat, non maximus urna pulvinar ut
              </Typography>
              <Typography className={classes.description} variant="h6" >
                Sed congue massa a tellus posuere convallis. Nunc congue odio leo, et faucibus risus ultrices sit amet. Donec nec ultrices purus. In non ante urna.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify='space-between' className={classes.item} xs={12} md={11}>
            <Grid item direction='column' md={5}>
              <Typography style={{ paddingTop: '38px' }} className={classes.title} variant="h3" >
                Nunc tempor nulla et ligula viverra
              </Typography>
              <Typography style={{ width: '100%' }} className={classes.description} variant="h6" >
                Praesent aliquam, nunc a hendrerit feugiat, massa felis euismod augue, a consequat ipsum enim vitae augue.
              </Typography>
            </Grid>
            <Hidden mdDown>
              <div style={{ marginBottom: 50 }} className={classes.imgBox}>
                <img alt="" style={{ position: 'relative', top: '40px', right: '40px', width: "100%" }} height='350px' src={img2} />
              </div>
            </Hidden>
          </Grid>
        </Fade>
      </Grid>
    </Container>
  );
};
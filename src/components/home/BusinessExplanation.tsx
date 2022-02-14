import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    marginTop: 110,
    marginBottom: 80,
    paddingInline: 0
  },
  headline: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 24,
    fontSize: '50px',
    fontFamily: 'Poppins',
    [theme.breakpoints.down('md')]: {
      fontSize: '36px'
    },
  },
  text: {
    fontWeight: "normal",
    color: 'white',
    fontFamily: 'Poppins'
  },
  highlight: {
    textShadow: '0 0 60px #ea524d',
    color: '#ea524d'
  }
}));

export const BusinessExplanation = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.headline}>
        Lorem <span className={classes.highlight}>ipsum</span> dolor <br /> <span className={classes.highlight}>sit amet.</span> <br /> 
      </Typography>
      <Typography variant="h6" className={classes.text}> 
      Duis tempor justo in felis interdum.
      </Typography>
    </Container>
  );
};

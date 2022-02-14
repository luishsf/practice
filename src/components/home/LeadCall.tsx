import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { BusinessExplanation } from './BusinessExplanation';
import { ContactUsForm } from './ContactUpForm';
import Fade from 'react-reveal/Fade'


const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
});

export const LeadCall = () => {
  const classes = useStyles();

  return (
    <section className="lead-section">
      <div className="overlay" />
      <div className="text-wrapper">
        <Container id="home" className={classes.container}>
          <Fade duration={3000}>
            <BusinessExplanation />
          </Fade>
          <ContactUsForm />
        </Container>
      </div>
    </section>
  );
};

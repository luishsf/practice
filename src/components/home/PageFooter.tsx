import React from "react";
import { AppBar, Container, Hidden, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import "../../css/footer.css"
import { Link } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer'
  },
  link: {
    fontSize: '18px',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer',
    fontFamily: 'Poppins',
  },
  typography: {
    textAlign: 'left',
    fontSize: '18px',
    fontWeight: 600,
    fontFamily: 'Poppins',
    marginRight: 160,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      fontSize: '14px',
    },
  }
}));

export function PageFooter(props: any) {
  const classes = useStyles();

  return (
    <AppBar style={{ background: '#180134' }} elevation={24} position="static" color="primary">
      <Container>
        <Toolbar>
          <footer>
            <Hidden smDown>
              <div>
                <Typography className={classes.typography}>
                  <Link
                    className={classes.link}
                    to='home'
                    smooth={true}
                    duration={1000}
                    spy={true}
                    offset={-120}
                    exact='true'
                  >
                    Início
                  </Link>
                </Typography>
                <Typography className={classes.typography}>
                  <Link
                    className={classes.link}
                    to='themes'
                    smooth={true}
                    duration={1000}
                    spy={true}
                    offset={20}
                    exact='true'
                  >
                    Escolha o tema
                  </Link>
                </Typography>
                <Typography className={classes.typography}>
                  <Link
                    className={classes.link}
                    to='how-it-works'
                    smooth={true}
                    duration={1000}
                    spy={true}
                    offset={-80}
                    exact='true'
                  >
                    Como funciona?
                  </Link>
                </Typography>
                <Typography className={classes.typography}>
                  <Link
                    className={classes.link}
                    to='schedule-categories'
                    smooth={true}
                    duration={1000}
                    spy={true}
                    offset={-120}
                    exact='true'
                  >
                    Nossos Tutores
                  </Link>
                </Typography>
              </div>
            </Hidden>
            <div>
              <Typography style={{ marginBottom: 10, fontSize: '18px' }} className={classes.typography}>
                Contato
              </Typography>
              <Typography style={{ fontFamily: 'Open Sans', marginBottom: 10 }} className={classes.typography}>
                (XX) XXXX-XXXX
              </Typography>
              <Typography style={{ fontFamily: 'Open Sans' }} className={classes.typography}>
                comercial@company.com.br
              </Typography>
            </div>
            <div>
              <ul className="social-links">
                <li>
                  <a className="social-network" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a className="social-network" target="_blank" rel="noopener noreferrer" href="https://wa.me/message">
                    <FaWhatsapp />
                  </a>
                </li>
                <li>
                  <a className="social-network" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
                    <FaFacebook />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
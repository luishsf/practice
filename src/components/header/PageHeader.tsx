import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import { Slide } from '@material-ui/core';

import { Link } from 'react-scroll';

import { NavAuth } from '../auth/NavAuth'
import { useAuth0 } from "@auth0/auth0-react";


const useStyles = makeStyles(() => ({
    title: {
        textDecoration: 'none'
    },
    link: {
        flexGrow: 1,
        color: 'white',
        fontSize: '15px',
        fontFamily: 'Poppins',
        fontWeight: 600,
        textDecoration: 'none',
        cursor: 'pointer',
        '-webkit-transition': 'all .5s ease-in-out',
        '-moz-transition': 'all .5s ease-in-out',
        '-o-transition': 'all .5s ease-in-out',
        'transition': 'all .5s ease-in-out',
        '&:hover': {
            color: '#854DFF'
        }
    },
    grow: {
        flexGrow: 1
    },
    active: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingInline: 20,
        paddingBlock: 5,
        color: '#1e0241',
        textDecoration: 'none',
        '-webkit-transition': 'all .5s ease-in-out',
        '-moz-transition': 'all .5s ease-in-out',
        '-o-transition': 'all .5s ease-in-out',
        'transition': 'all .5s ease-in-out',
    },
    appBarTransparent: {
        backgroundColor: 'rgba(30, 2, 65, 0)',
        'box-shadow': 'unset',
    },
    appBarSolid: {
        backgroundColor: 'rgba(30, 2, 65, 0.8)',
        'box-shadow': '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
        'backdrop-filter': 'blur(40px)',
    }
}));

function HideOnScroll(props: { children: any; window: any; }) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Logo = () => {
    return (
        <svg id="logo-54" width="170" height="70" viewBox="0 0 170 41" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M51.8601 28.138H63.8121V24.538H56.1081V10.978H51.8601V28.138Z" fill="#ff8c6b" stop-color="#ff8c6b"></path> <path d="M70.8932 25.738C69.1892 25.738 68.3012 24.25 68.3012 22.018C68.3012 19.786 69.1892 18.274 70.8932 18.274C72.5972 18.274 73.5092 19.786 73.5092 22.018C73.5092 24.25 72.5972 25.738 70.8932 25.738ZM70.9172 28.522C74.8772 28.522 77.4692 25.714 77.4692 22.018C77.4692 18.322 74.8772 15.514 70.9172 15.514C66.9812 15.514 64.3412 18.322 64.3412 22.018C64.3412 25.714 66.9812 28.522 70.9172 28.522Z" fill="#ff8c6b" stop-color="#ff8c6b"></path> <path d="M84.3237 32.386C86.1477 32.386 87.7557 31.978 88.8357 31.018C89.8197 30.13 90.4677 28.786 90.4677 26.938V15.85H86.7237V17.17H86.6757C85.9557 16.138 84.8517 15.49 83.2197 15.49C80.1717 15.49 78.0597 18.034 78.0597 21.634C78.0597 25.402 80.6277 27.466 83.3877 27.466C84.8757 27.466 85.8117 26.866 86.5317 26.05H86.6277V27.274C86.6277 28.762 85.9317 29.626 84.2757 29.626C82.9797 29.626 82.3317 29.074 82.1157 28.426H78.3237C78.7077 30.994 80.9397 32.386 84.3237 32.386ZM84.2997 24.562C82.8357 24.562 81.8757 23.362 81.8757 21.514C81.8757 19.642 82.8357 18.442 84.2997 18.442C85.9317 18.442 86.7957 19.834 86.7957 21.49C86.7957 23.218 86.0037 24.562 84.2997 24.562Z" fill="#ff8c6b" stop-color="#ff8c6b"></path> <path d="M98.166 25.738C96.462 25.738 95.574 24.25 95.574 22.018C95.574 19.786 96.462 18.274 98.166 18.274C99.87 18.274 100.782 19.786 100.782 22.018C100.782 24.25 99.87 25.738 98.166 25.738ZM98.19 28.522C102.15 28.522 104.742 25.714 104.742 22.018C104.742 18.322 102.15 15.514 98.19 15.514C94.254 15.514 91.614 18.322 91.614 22.018C91.614 25.714 94.254 28.522 98.19 28.522Z" fill="#ff8c6b" stop-color="#ff8c6b"></path> <path d="M105.884 28.138H109.796V15.85H105.884V28.138ZM105.884 14.146H109.796V10.978H105.884V14.146Z" fill="#ff8c6b" stop-color="#ff8c6b"></path> <path d="M111.494 32.194H115.406V26.866H115.454C116.222 27.898 117.35 28.522 118.934 28.522C122.15 28.522 124.286 25.978 124.286 21.994C124.286 18.298 122.294 15.49 119.03 15.49C117.35 15.49 116.15 16.234 115.31 17.338H115.238V15.85H111.494V32.194ZM117.926 25.498C116.246 25.498 115.286 24.13 115.286 22.138C115.286 20.146 116.15 18.634 117.854 18.634C119.534 18.634 120.326 20.026 120.326 22.138C120.326 24.226 119.414 25.498 117.926 25.498Z" fill="#ff8c6b" stop-color="#ff8c6b"></path> <path d="M130.655 28.522C133.871 28.522 136.247 27.13 136.247 24.442C136.247 21.298 133.703 20.746 131.543 20.386C129.983 20.098 128.591 19.978 128.591 19.114C128.591 18.346 129.335 17.986 130.295 17.986C131.375 17.986 132.119 18.322 132.263 19.426H135.863C135.671 17.002 133.799 15.49 130.319 15.49C127.415 15.49 125.015 16.834 125.015 19.426C125.015 22.306 127.295 22.882 129.431 23.242C131.063 23.53 132.551 23.65 132.551 24.754C132.551 25.546 131.807 25.978 130.631 25.978C129.335 25.978 128.519 25.378 128.375 24.154H124.679C124.799 26.866 127.055 28.522 130.655 28.522Z" fill="#ff8c6b" stop-color="#ff8c6b"></path> <path d="M141.561 28.498C143.265 28.498 144.345 27.826 145.233 26.626H145.305V28.138H149.049V15.85H145.137V22.714C145.137 24.178 144.321 25.186 142.977 25.186C141.729 25.186 141.129 24.442 141.129 23.098V15.85H137.241V23.914C137.241 26.65 138.729 28.498 141.561 28.498Z" fill="#ff8c6b" stop-color="#ff8c6b"></path> <path d="M150.75 28.138H154.662V21.25C154.662 19.786 155.382 18.754 156.606 18.754C157.782 18.754 158.334 19.522 158.334 20.842V28.138H162.246V21.25C162.246 19.786 162.942 18.754 164.19 18.754C165.366 18.754 165.918 19.522 165.918 20.842V28.138H169.83V20.146C169.83 17.386 168.438 15.49 165.654 15.49C164.07 15.49 162.75 16.162 161.79 17.65H161.742C161.118 16.33 159.894 15.49 158.286 15.49C156.51 15.49 155.334 16.33 154.566 17.602H154.494V15.85H150.75V28.138Z" fill="#ff8c6b" stop-color="#ff8c6b"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6841 40.138C31.7298 40.138 40.6841 31.1837 40.6841 20.138C40.6841 9.09234 31.7298 0.138031 20.6841 0.138031C9.63837 0.138031 0.684082 9.09234 0.684082 20.138C0.684082 31.1837 9.63837 40.138 20.6841 40.138ZM26.9234 9.45487C27.2271 8.37608 26.1802 7.73816 25.2241 8.41933L11.8772 17.9276C10.8403 18.6663 11.0034 20.138 12.1222 20.138L15.6368 20.138V20.1108H22.4866L16.9053 22.0801L14.4448 30.8212C14.1411 31.9 15.1879 32.5379 16.1441 31.8567L29.491 22.3485C30.5279 21.6098 30.3647 20.138 29.246 20.138L23.9162 20.138L26.9234 9.45487Z" fill="#efeced" stop-color="#efeced"></path> </svg>
    )
}


export function PageHeader(props: any) {
    const classes = useStyles();
    const { isAuthenticated } = useAuth0();

    const [navBackground, setNavBackground] = useState(classes['appBarTransparent'])
   
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 70
            if (show) {
                setNavBackground(classes['appBarSolid'])
            } else {
                setNavBackground(classes['appBarTransparent'])
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <React.Fragment>
            <HideOnScroll {...props}>
                <AppBar className={navBackground}>
                    {!isAuthenticated ?
                        <Toolbar disableGutters>
                            <Box display="flex" px={6} mr={20} style={{ height: '70px' }}>
                                <Typography className={classes.title} variant="h5">
                                    <NavLink className={classes.title} to="/home">
                                       <Logo />
                                    </NavLink>
                                </Typography>
                            </Box>
                            <Typography className={classes.grow}>
                                <Link
                                    className={classes.link}
                                    activeClass={classes.active}
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
                            <Typography className={classes.grow}>
                                <Link
                                    className={classes.link}
                                    activeClass={classes.active}
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
                            <Typography className={classes.grow}>
                                <Link
                                    className={classes.link}
                                    activeClass={classes.active}
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
                            <Typography className={classes.grow}>
                                <Link
                                    className={classes.link}
                                    activeClass={classes.active}
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

                            <NavAuth />
                        </Toolbar>
                        :
                        <Toolbar disableGutters>
                            <Box display="flex" px={6} mr={20} style={{ height: '70px' }}>
                                <Typography className={classes.title} variant="h5">
                                    <NavLink className={classes.title} to="/home">
                                        <Logo />
                                    </NavLink>
                                </Typography>
                            </Box>
                            <Typography>
                                <NavLink
                                    className={classes.link}
                                    activeClassName={classes.active}
                                    to='/dashboard'
                                >
                                    Dashboard
                                </NavLink>
                            </Typography>
                            <Typography style={{ flexGrow: 1, marginLeft: 60 }}>
                                {/* <NavLink
                                    className={classes.link}
                                    activeClassName={classes.active}
                                    to='/profile'
                                >
                                    Perfil
                                </NavLink> */}
                            </Typography>

                            <NavAuth />
                        </Toolbar>}
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    )
}
import React from 'react';
import {
    Grid,
    makeStyles,
    SvgIcon,
} from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { FaChalkboardTeacher } from 'react-icons/fa'
import { RiFileMusicLine } from 'react-icons/ri'
import Fade from 'react-reveal/Fade'


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: "35px",
        paddingTop: 0,
        backgroundColor: "#f1f1f1",
        border: "none",
    },
    heading: {
        color: '#1e0241',
        fontSize: '30px',
        fontWeight: 800,
        fontFamily: "Poppins"
    },
    titulo: {
        color: '#1e0241',
        fontSize: '21px',
        fontWeight: 600,
        fontFamily: "Poppins",
        whiteSpace: 'nowrap',
        textTransform: 'lowercase',
        '&:first-letter': {
            textTransform: 'uppercase'
        }
    },
    descricao: {
        color: '#1e0241',
        fontSize: "15px",
        fontFamily: 'Open Sans',
        textAlign: 'center'
    },
    paper: {
        elevation: "0",
        padding: '12px',
        textAlign: 'center',
        backgroundColor: "transparent",
    },
    paperTitle: {
        padding: '2px',
        marginBottom: "60px",
        textAlign: 'center',
        backgroundColor: "transparent",
        height: "28px",
    },
    icones: {
        fontSize: 100,
        color: "#fb6634",
    }
});

const Tutors = () => {
    return (
        <svg preserveAspectRatio="xMidYMid meet" data-bbox="52 28 96 144" viewBox="52 28 96 144" height="100" width="100" xmlns="http://www.w3.org/2000/svg" role="img">
            <g>
                <path d="M145 172H55c-1.658 0-3-1.342-3-3V46c0-1.658 1.342-3 3-3h24v6H58v117h84V49h-21v-6h24c1.658 0 3 1.342 3 3v123c0 1.658-1.342 3-3 3z" fill="#fb6634"></path>
                <path d="M130 130H70c-1.658 0-3-1.342-3-3V70c0-1.658 1.342-3 3-3h60c1.658 0 3 1.342 3 3v57c0 1.658-1.342 3-3 3zm-57-6h54V73H73v51z" fill="#fb6634"></path>
                <path d="M118 130H82c-1.658 0-3-1.342-3-3v-12c0-.618.19-1.222.548-1.729 1.688-2.394 11.713-7.178 20.452-7.178s18.765 4.784 20.452 7.178c.357.507.548 1.11.548 1.729v12c0 1.658-1.342 3-3 3zm-33-6h30v-7.556c-2.323-1.427-8.789-4.351-15-4.351s-12.677 2.924-15 4.351V124z" fill="#fb6634"></path>
                <path d="M100 103.094c-6.618 0-12-5.426-12-12.094v-2.906C88 81.426 93.382 76 100 76s12 5.426 12 12.094V91c0 6.668-5.382 12.094-12 12.094zM100 82c-3.308 0-6 2.733-6 6.094V91c0 3.36 2.692 6.094 6 6.094s6-2.733 6-6.094v-2.906c0-3.361-2.692-6.094-6-6.094z" fill="#fb6634"></path>
                <path fill="#fb6634" d="M124 55v6H76v-6h48z"></path>
                <path fill="#fb6634" d="M70 55v6h-6v-6h6z"></path>
                <path fill="#fb6634" d="M136 55v6h-6v-6h6z"></path>
                <path d="M112 61H88c-1.658 0-3-1.342-3-3V31c0-1.658 1.342-3 3-3h24c1.658 0 3 1.342 3 3v27c0 1.658-1.342 3-3 3zm-21-6h18V34H91v21z" fill="#fb6634"></path>
                <path fill="#fb6634" d="M121 139v6H79v-6h42z"></path>
                <path fill="#fb6634" d="M112 151v6H88v-6h24z"></path>
            </g>
        </svg>
    );
}

export function HowItWorks() {

    const classes = useStyles();

    return (
        <div id="how-it-works" className={classes.root}>

            <Fade duration={3000} cascade>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper elevation={0} className={classes.paperTitle}>
                            <p className={classes.heading}> Como funciona? </p>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Paper elevation={0} className={classes.paper}>

                            <FaChalkboardTeacher className={classes.icones} />

                            <p className={classes.titulo}>Maecenas eget</p>
                            <p className={classes.descricao}>Sed consectetur sem dui, ac vulputate lacus consectetur sed. Donec.</p>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Paper elevation={0} className={classes.paper}>
                            <Tutors />
                            <p className={classes.titulo}>Curabitur commodo</p>
                            <p className={classes.descricao}>Curabitur vehicula dictum mi, sit amet facilisis neque efficitur eget.</p>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Paper elevation={0} className={classes.paper}>
                            <AccessTimeIcon className={classes.icones} />
                            <p className={classes.titulo}>Etiam nibh</p>
                            <p className={classes.descricao}>Mauris eget sapien ipsum. Morbi dapibus aliquam sollicitudin. In euismod.</p>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Paper elevation={0} className={classes.paper}>
                            <SvgIcon style={{ fontSize: 100, marginBottom: 0, color: "#fb6634" }} >
                                <MenuBookIcon />
                            </SvgIcon>
                            <p className={classes.titulo}>Fusce condimentum</p>
                            <p className={classes.descricao}>Integer convallis maximus iaculis. Quisque in neque eu sem fermentum.</p>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Paper elevation={0} className={classes.paper}>
                            <SvgIcon className={classes.icones}>
                                <MoneyOffIcon />
                            </SvgIcon>
                            <p className={classes.titulo}>Duis matti</p>
                            <p className={classes.descricao}>Mauris ornare mi eget eros consectetur interdum. Sed vestibulum libero.</p>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Paper elevation={0} className={classes.paper}>
                            <SvgIcon className={classes.icones}>
                                <QuestionAnswerIcon />
                            </SvgIcon>
                            <p className={classes.titulo}>Pellentesque habitant</p>
                            <p className={classes.descricao}>Donec in maximus erat. Proin ligula enim, rhoncus vel tellus.</p>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Paper elevation={0} className={classes.paper}>
                            <RiFileMusicLine className={classes.icones} />
                            <p className={classes.titulo}>Nam euismod</p>
                            <p className={classes.descricao}>Praesent molestie, felis in congue fringilla, urna augue tincidunt lorem.
                            </p>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Paper elevation={0} className={classes.paper}>
                            <SvgIcon className={classes.icones}>
                                <BorderColorIcon />
                            </SvgIcon>
                            <p className={classes.titulo}>Mauris luctus</p>
                            <p className={classes.descricao}>
                                Vestibulum ac maximus quam. Nunc magna neque, feugiat nec orci.
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
            </Fade>
        </div>
    );
}
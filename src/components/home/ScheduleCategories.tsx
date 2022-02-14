import React from 'react';
import {
    Button,
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { events } from '../../calendly/index';

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        textAlign: 'center',
        flexWrap: 'wrap',
        marginTop: '20px',
        marginBottom: '30px'
    },
    title: {
        color: 'white',
        fontSize: '33px',
        fontWeight: 600,
        fontFamily: 'Poppins',
        marginBottom: 120
    },
    categoriesWrapper: {
        marginTop: '10px',
        marginBottom: '20px'
    },
    item: {
        height: '100%',
        background: '#28064e',
        borderRadius: 20,
        overflow: 'visible',
        '-webkit-transition': 'all .5s ease-in-out',
        '-moz-transition': 'all .5s ease-in-out',
        '-o-transition': 'all .5s ease-in-out',
        'transition': 'all .5s ease-in-out',
        '&:hover': {
            background: '#6838ad',
        }
    },
    img: {
        borderRadius: '50%',
        width: '200px',
        margin: 'auto',
        marginTop: -100
    },
    cardActions: {
        justifyContent: 'center'
    },
    description: {
        height: '140px',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Poppins'
    }
});

export const ScheduleCategories = () => {
    const classes = useStyles();

    return (
        <Container id='schedule-categories' className={classes.container}>
            <Grid lg={12} container justify="center">
                <Box pt={5} display="flex">
                    <Typography className={classes.title} variant="h5" >
                        Nossos Tutores
                    </Typography>
                </Box>
            </Grid>
            <Grid lg={11} className={classes.categoriesWrapper} justify="center" container spacing={6}>
                {events.map(item => (
                    <Grid style={{ marginBottom: 80 }} item key={item.name} xs={12} lg={4}>
                            <Card elevation={5} className={classes.item}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt={item.title}
                                        height="200"
                                        image={item.imageUrl}
                                        className={classes.img}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom style={{ color: 'white', fontWeight: 600 }} variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography className={classes.description} variant="body2" component="p">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.cardActions}>
                                    <Link style={{ textDecoration: 'none' }} to={`/schedule?eventId=${item.name}`}>
                                        <Button variant="contained" style={{ background: 'linear-gradient(90deg, rgba(241,110,84,1) 0%, rgba(213,33,119,1) 100%)', borderRadius: 20 }}>
                                            <span style={{ color: 'white' }}>Agendar</span>
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
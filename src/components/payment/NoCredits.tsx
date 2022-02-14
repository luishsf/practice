import React from "react";
import { Container, Button, Typography, makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        textAlign: 'center',
        flexWrap: 'wrap',
        marginTop: '60px',
    },
});

export const NoCredits = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography style={{ color: 'white', marginBottom: 20}} variant='h3'>
                Saldo Insuficiente
            </Typography>
            <Link style={{ textDecoration: 'none' }} to={`/payment`}>
                <Button variant="contained" color="secondary">
                    <span style={{ color: 'white' }}>Comprar Créditos</span>
                </Button>
            </Link>
        </Container>
    );
};

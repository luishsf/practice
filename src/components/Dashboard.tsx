import React from "react";
import { Link } from 'react-router-dom';
import { Button, Container, makeStyles } from "@material-ui/core";
import { ScheduleCategories } from "./home/ScheduleCategories";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        textAlign: 'center',
    },
});

export const Dashboard = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Link style={{ textDecoration: 'none', marginTop: 120 }} to={`/payment`}>
                <Button variant="contained" color="secondary">
                    <span style={{ color: 'white' }}>Comprar créditos</span>
                </Button>
            </Link>
            <ScheduleCategories />
        </Container>
    )
}
import React from 'react';

import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/styles';


// MaterialUI Hook API for styles:
const useStyles = makeStyles(theme => ({
    midSizeContainer : {
        backgroundColor: "green",
    }
}));

export default function Soon(){
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.midSizeContainer}>
            <h4>Coming Soon!</h4>
        </Container>

    )
}
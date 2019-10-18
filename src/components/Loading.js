import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress';




// MATERIAL-UI Component Styles:
const useStyles = makeStyles(theme => ({
    process: {
        margin: theme.spacing(2),
    },
    loadingContainer: {
        textAlign: 'center',
        marginTop: '7em',
    }
}))

export default function LoadingGroup() {
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth='sm' className={classes.loadingContainer}>
                <CircularProgress className={classes.progress} />
            </Container>
        </div>
    );
}
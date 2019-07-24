import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: 'orange',
        padding: theme.spacing(6,0),
        marginBottom: theme.spacing(8),
    }
}));

export default function BioStockHeader() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <Container maxWidth='lg'>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    BioStock
                </Typography>
            </Container>
        </header>
    )    
}




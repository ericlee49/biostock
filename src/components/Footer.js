import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    footer: {
        marginTop: 'auto',
        backgroundColor: '#bdcafc',
        padding: theme.spacing(6,0),
    }
}));

export default function BioStockFooter() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth='lg'>
                <p>Hello Footer</p>
            </Container>
        </footer>
    )

}

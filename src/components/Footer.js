import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import logo from '../assets/ubc_footer_logo.png'


const useStyles = makeStyles(theme => ({
    footer: {
        marginTop: 'auto',
        backgroundColor: '#bac8de',
        padding: theme.spacing(6,0),
    },
    contactInfo: {
        color: 'white',
        fontWeight: 'bold'
    },
    address: {
        color: 'white',

    },
    ubc_logo: {
        width: '350px',
        paddingLeft: 60,
    }
}));

export default function BioStockFooter() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={9}>
                        <img src={logo} className={classes.ubc_logo} alt="logo"/>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="body2" gutterBottom className={classes.contactInfo}>
                            Microbiology & Immunology <br></br>Faculty of Science
                        </Typography>
                        <Typography variant="body2"  className={classes.address}>
                        1365 - 2350 Health Sciences Mall <br></br>
                        Vancouver, BC, Canada V6T 1Z3
                        </Typography>                
                    </Grid>                
                </Grid>



            </Container>


        </footer>
    )

}

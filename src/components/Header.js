import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import 'typeface-signika';

// import {ReactComponent as Logo} from '../assets/transmembrane_protein.svg'
import {ReactComponent as Logo} from '../assets/logo1.svg'

import { FormHelperText } from '@material-ui/core';
{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}



const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: '#bac8de',
        // backgroundColor: 'orange',
        // padding: theme.spacing(2,0,1),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(8),
        marginBottom: theme.spacing(8),
        // verticalAlign: 'text-top',
    },
    gridContainer: {
        margin: '0',
        width: '100%',
    },
    logo: {
        // backgroundColor: 'red',
        width: '100px',
    },
    box: {
        display: 'flex',
        alignItems: 'center', // center items vertically
        // backgroundColor: 'orange',
    }
}));

export default function BioStockHeader() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <Container maxWidth='lg'>
                <Grid container justify="center" spacing={0}>
                    <Grid item>
                        <Logo className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <Typography component="h1" variant="h2"  color="textPrimary" gutterBottom className={classes.title}>
                            <Box fontFamily="Signika" fontWeight="600" m={1} pt={0} className={classes.box}>
                                BioStock
                            </Box>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
 
             {/* <Grid container spacing={0} justify="center" className={classes.gridContainer}>
                 <Grid item>
                    <Logo className={classes.logo}/>
                </Grid>
                <Grid item>
                    <Typography component="h1" variant="h2"  color="textPrimary" gutterBottom className={classes.title}>
                        <Box fontFamily="Signika" fontWeight="600" m={1} pt={0} className={classes.box}>
                            BioStock
                        </Box>
                    </Typography>
                </Grid>
             </Grid> */}



        </header>
    )    
}




import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import 'typeface-signika';
{/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}



const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: '#bdcafc',
        // backgroundColor: 'orange',
        // padding: theme.spacing(2,0,1),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(8),
        marginBottom: theme.spacing(8),
        // verticalAlign: 'text-top',
    },
    title: {
        
    }
}));

export default function BioStockHeader() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <Container maxWidth='lg'>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.title}>
                    <Box fontFamily="Signika" fontWeight="600" m={1} pt={0}>
                        BioStock
                    </Box>
                </Typography>
            </Container>
        </header>
    )    
}




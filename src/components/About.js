import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    avatar: {
        margin: 10,
        width: 200,
        height: 200,
    },
    mainContainer: {
        marginTop: '5em',
        marginBottom: '5em',
    }
});

export default function About() {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.mainContainer}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h3">
                        <Box fontFamily="Signika">
                            <u>About the Project</u>
                        </Box>
                    </Typography>
                    <p>BioStock was created to provide free stock images for life science researchers and teachers to easily build high quality figures</p>
                    <p>Our main goals are to:</p>
                    <ul>
                        <li>make this resource freely available to anyone who wants to use it</li>
                        <li>provide users with the opportunity to make requests and provide feedback on images</li>
                        <li>keep images in a consistent style</li>
                        <li>provide flexibility by providing files that can be edited</li>
                    </ul>
                    <p>We welcome any and all feedback.</p>
                    <p>BioStock was started in the Department of Microbiology at the University of British Columbia and we thank the department for their support of this project.</p>                    
                </Grid>
                <Grid item xs={12}>
                    <Divider/>
                </Grid>
                
                <Grid item xs={8}>
                    <Typography variant="h5">
                        <Box fontFamily="Signika">
                            Artist: Craig Kornak
                        </Box>
                    </Typography>
                    <p>Craig is the Undergraduate Program Assistant in the Department of Microbiology at the University of British Columbia. He is an experienced user of Adobe Creative Cloud and has used these skills to create images to supplement teaching materials upon request by the department's educational leadership faculty. In this project he is excited to expand upon the type of images he has been creating and to collaborate with more researchers.</p>
                </Grid>
                <Grid item xs={4}>
                    <Avatar alt="Craig Kornak" src="https://source.unsplash.com/random" className={classes.avatar} />
                </Grid>
                <Grid item xs={12}>
                    <Divider/>
                </Grid>
                <Grid item xs={4}>
                    <Avatar alt="Linda" src="https://source.unsplash.com/random" className={classes.avatar} />
                </Grid>                
                <Grid item xs={8}>
                    <Typography variant="h5">
                        <Box fontFamily="Signika">
                            Scientist: Linda Horianopoulos
                        </Box>
                    </Typography>
                    <p>Linda is a PhD candidate in the Kronstad lab in the Department of Microbiology and Immunology where she studies fungi (in all their glory). Linda is the scientific consultant/expert on style, content and organization as well as providing a large portion of the impetus to bring BioStock to life. Linda also plays a key role in the format, navigation and user experience of the site. </p>
                </Grid>


            </Grid>
        </Container>
    )
}
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import {Link as RouterLink} from 'react-router-dom';

import 'typeface-signika';

const GET_STOCKPHOTOS_WITH_CATEGORY = gql `
    query Photos($category: String!) {
        categories(where:{path_contains: $category}) {
            title
            stockphotos {
                _id
                title
                image {
                    url
                }
            }
        }
    }
`


// Styles:
const useStyles = makeStyles(theme => ({
    categoryButton: {
        height: 160,
        width: 290,
        // backgroundColor: "green"
        '&:hover': {
            // zIndex:1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $buttonTitle': {
                transform: 'scale(1.1)',
                transition: 'all 0.8s ease',
            },
            '& $imageSrc': {
                transform: 'scale(1.1)',
                transition: 'all 0.8s ease',
                

            }
        }
    },
    categoryContainer: {
        backgroundColor: "blue",
    },    
    categoryGrid: {
        backgroundColor: "green",
    },    
    imageGallery: {
        paddingTop: 40,
        paddingBottom: 40,       
        // backgroundColor: "orange",
    },
    imageCard: {
        display: 'flex',
        flexDirection: 'column',
    }, 
    cardMedia: {
        // paddingTop: '56.25%', // 16:9
        paddingTop: '100%', //1:1
    },    
}));


export default function Gallery(props){
    // IMAGES PAGE COMPONENT STATE:
    const classes = useStyles();
    return (

        <div>
            <Query query={GET_STOCKPHOTOS_WITH_CATEGORY} variables={{category: `${props.match.params.category}`}}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <p>Loading</p>;
                        if (error) return <p>Error</p>;
                        const dataToRender = data.categories[0].stockphotos;
                        return (
                            <div>
                                <Container maxWidth='lg'>
                                    <Typography variant="h3" align="center" gutterBottom className={classes.title}>
                                        <Box fontFamily="Signika" fontWeight="600" m={1} pt={0}>
                                            {data.categories[0].title}
                                        </Box>
                                    </Typography>
                                </Container>                                 
                                <Container maxWidth="md" className={classes.imageGallery}>
                                    <Grid container spacing={5}>
                                        {dataToRender.map(photo => (
                                            <Grid key={photo._id} item xs={12} sm={6} md={4}>
                                            {/* <Link component={RouterLink} to='/img/5d3f40db42ee092510093969'> */}
                                            <RouterLink
                                                to={{
                                                    // pathname: '/img/5d3f40db42ee092510093969',
                                                    pathname: `/img/${photo._id}`,
                                                    state: {modal: true}
                                                }}
                                            >
                                            <Card className={classes.imageCard}>
                                                <CardActionArea>
                                                    <CardMedia 
                                                        image={'http://localhost:1337' + photo.image.url}
                                                        title={photo.title}
                                                        className={classes.cardMedia}
                                                    /> 
                                                </CardActionArea>                           
                                            </Card>                                             
                                            </RouterLink>  

                                            </Grid>
                                        ))}                                       
                                    </Grid>
                                </Container>                                 
                            </div>
                        )
                    }
                }
            </Query>
        </div>
       
    )
};


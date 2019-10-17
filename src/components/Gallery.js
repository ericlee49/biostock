import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import {Link as RouterLink} from 'react-router-dom';

import {bioStockHost} from './HostDetails';

import 'typeface-signika';

// const GET_STOCKPHOTOS_WITH_CATEGORY = gql `
//     query Photos($category: String!) {
//         categories(where:{path_contains: $category}) {
//             title
//             stockphotos {
//                 _id
//                 title
//                 image {
//                     url
//                 }
//             }
//         }
//     }
// `

const GET_STOCKPHOTOS_WITH_CATEGORY = gql `
    query Photos($category: JSON) {
        categories(where:$category) {
            title
            stockphotos(sort: "title:asc") {
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
    title: {
        marginTop: '1em',
    },
    gridItem: {
        paddingLeft: '1em',
        paddingRight: '1em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0.5em',
            paddingRight: '0.5em',
        },
    },
    process: {
        margin: theme.spacing(2),
    }
}));

// function loadingCircle(props) {
//     const classes = useStyles();
//     return (
//         <CircularProgress className={classes.progress} />
//     )
// }
 
export function loadingGroup() {
    return (
        <div>
            <Container maxWidth='sm'>
                <CircularProgress />
            </Container>
        </div>
    );
}


export default function Gallery(props){
    // IMAGES PAGE COMPONENT STATE:
    const classes = useStyles();
    const param = props.match.params.category;


    return (
        <div>
            <Query query={GET_STOCKPHOTOS_WITH_CATEGORY} variables={{"category": {"path_contains": param}}}>  
    
                {
                    ({loading, error, data}) => {
                        if (loading) return <CircularProgress className={classes.progress} />;
                        if (error) return <p>Error</p>;
                        const dataToRender = data.categories[0].stockphotos;
                        return (
                            <div>
                                {loadingGroup}
                                <Container maxWidth='lg'>
                                    <Typography variant="h3" align="center" gutterBottom className={classes.title}>
                                        <Box fontFamily="Signika" fontWeight="600" m={1} pt={0}>
                                            {data.categories[0].title}
                                        </Box>
                                    </Typography>
                                </Container>                                 
                                <Container maxWidth="md" className={classes.imageGallery}>
                                    <Grid container>
                                        {dataToRender.map(photo => (
                                            <Grid key={photo._id} item xs={4} sm={4} md={4} className={classes.gridItem}>
                                                <RouterLink
                                                    to={{
                                                        pathname: `/img/${photo._id}`,
                                                        state: {modal: true}
                                                    }}
                                                >
                                                <Card className={classes.imageCard}>
                                                    <CardActionArea>
                                                        <CardMedia 
                                                            image={bioStockHost + photo.image.url}
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


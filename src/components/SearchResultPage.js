import React from 'react';

import {Link as RouterLink} from 'react-router-dom';

import {bioStockHost} from './HostDetails';

import 'typeface-signika';

import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';



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

// const SEARCH_QUERY = gql `
//     query Photos{
//         stockphotos(where:{title_contains: "agar"}) {
//             _id
//             title
//             image {
//                 url
//             }
//         }
//     }
// `

const SEARCH_QUERY = gql `
    query Photos($queryString: JSON) {
        stockphotos(where: $queryString) {
            _id
            title
            image {
                url
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
    }
}));

export default function SearchResultPage(props) {
    const classes = useStyles();
    const param = props.match.params.query

    return (
        <div>
            {/* <Query query={GET_STOCKPHOTOS_WITH_CATEGORY} variables={{category: microbiology}}>   */}
            {/* <Query query={SEARCH_QUERY}>   */}

            <Query query={SEARCH_QUERY} variables={{"queryString": {"title_contains": param}}}>  



                {
                    ({loading, error, data}) => {
                        if (loading) return <p>Loading</p>;
                        if (error) return <p>Error</p>;
                        const dataToRender = data.stockphotos;
                        // console.log(props.match.params);
                        console.log(param);
                        return (
                            <div>
                                <Container maxWidth='lg'>
                                    <Typography variant="h3" align="center" gutterBottom className={classes.title}>
                                        <Box fontFamily="Signika" fontWeight="600" m={1} pt={0}>
                                            {/* {data.categories[0].title} */}
                                            Your Search Results for: '{param}'
                                        </Box>
                                    </Typography>
                                </Container>                                 
                                <Container maxWidth="md" className={classes.imageGallery}>
                                    <Grid container spacing={5}>
                                        {dataToRender.map(photo => (
                                            <Grid key={photo._id} item xs={12} sm={6} md={4}>
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
    );
}
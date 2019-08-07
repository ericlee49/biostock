import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

import ImageDialog2 from './ImageDialog';

import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import 'typeface-signika';

// GraphQL query:
const STOCKPHOTO_QUERY = gql `
    {
        stockphotos {
            _id
            title
            image {
                url
            }
        }
    }
`;

const GET_STOCKPHOTOS_WITH_CATEGORY = gql `
    query Photos($category: String!) {
        categories(where:{title_contains: $category}) {
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

const GET_STOCKPHOTOS_WITH_CATEGORY_2 = gql `
{
        categories(where:{title_contains: "immunology"}) {
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
        backgroundColor: "orange",
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

// Temporary Data:
const images2 = [
    { id: 0, title: 'Nucleus', img:'../assets/nucleus.png',},
    { id: 1, title: 'Nucleus', img:'../assets/nucleus.png',},
    { id: 2, title: 'Nucleus', img:'../assets/nucleus.png',},
    { id: 3, title: 'Nucleus', img:'../assets/nucleus.png',},
    { id: 4, title: 'Nucleus', img:'../assets/nucleus.png',},
    { id: 5, title: 'Nucleus', img:'../assets/nucleus.png',},    
    { id: 6, title: 'Nucleus', img:'../assets/nucleus.png',},
    { id: 7, title: 'Nucleus', img:'../assets/nucleus.png',},
    { id: 9, title: 'Nucleus', img:'../assets/nucleus.png',},
]



// Stateless functional component: Image Card:
function ImageCard(props) {
    const classes = useStyles();
    const {imageLink, title, handleClick} = props;
    return (
        
        <Card className={classes.imageCard}>
            <CardActionArea
                onClick={handleClick}
            >
                <CardMedia 
                    image={imageLink}
                    title={title}
                    className={classes.cardMedia}
                />
            </CardActionArea>                            
        </Card>         
    );
}


export default function ImagesPage(props){
    // IMAGES PAGE COMPONENT STATE:
    const [dialogOpen, setDialogOpen] = React.useState(false);
    // const categories = ["Immunology","Microbiology","Cell Biology","Molecular Biology","Hosts and Model Organisms","Labware"];

    function handleClickOpen() {
        setDialogOpen(true);
    }

    function handleClose() {
        setDialogOpen(false);
    }
    const classes = useStyles();

    const pageCategory = props.match.params.category;
    return (

        <div>
            <Container maxWidth='lg'>
                <Typography variant="h3" align="center" color="textPrimary" gutterBottom className={classes.title}>
                    <Box fontFamily="Signika" fontWeight="600" m={1} pt={0}>
                        {pageCategory.charAt(0).toUpperCase() + pageCategory.slice(1)}
                    </Box>
                </Typography>
            </Container>            
            <Query query={GET_STOCKPHOTOS_WITH_CATEGORY} variables={{category: `${props.match.params.category}`}}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <p>Loading</p>;
                        if (error) return <p>Error</p>;
                        const dataToRender = data.categories[0].stockphotos;
                        console.log(data);
                        // console.log(data.categories[0].stockphotos);
                        // console.log(dataToRender)

                        return (
                            <div>
                                {/* <p>{data.stockphotos[0].title}</p> */}
                                <Container maxWidth="md" className={classes.imageGallery}>
                                    <Grid container spacing={5}>
                                        {dataToRender.map(photo => (
                                            <Grid key={photo._id} item xs={12} sm={6} md={4}>
                                                <ImageCard imageLink={'http://localhost:1337' + photo.image.url} title={photo.title} handleClick={setDialogOpen}/>  

                                                                    
                                            </Grid>
                                        ))}                                       
                                    </Grid>
                                </Container>                                 
                            </div>
                        )
                    }
                }
            </Query>


            
            <ImageDialog2 onClose={handleClose} open={Boolean(dialogOpen)}/>

            {/* <Container maxWidth="md" className={classes.imageGallery}>
                <Grid container spacing={5}>
                    {images2.map(image => (
                        <Grid key={image.id} item xs={12} sm={6} md={4}>
                            <ImageCard imageLink={image.img} title={image.title} handleClick={setDialogOpen}/>  

                                                 
                        </Grid>
                    ))}                                       
                </Grid>
            </Container>     */}
        </div>
       
    )
};


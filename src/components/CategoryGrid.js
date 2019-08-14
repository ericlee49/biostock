import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';

import {Link} from 'react-router-dom';

import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import 'typeface-signika';

// GraphQL query:
const CATEGORY_QUERY = gql `
    {
        categories {
            _id
            title
            path
            background {
                url
            }
        }
    }
`;

// Styles:
const useStyles = makeStyles(theme => ({
    mainContainer: {
        paddingTop: 40,
        paddingBottom: 40,       
    },

    categoryButton: {
        height: 160,
        width: 290,
        '&:hover': {
            '& $imageBackdrop': {
                opacity: 0,
            },
            '& $buttonTitle': {
                transform: 'scale(1.1)',
            },
            '& $imageSrc': {
                transform: 'scale(1.1)',
                transition: 'all 0.25s ease-in',
            }
        }
    },    
    imageSrc: {
        position: 'absolute',
        display: 'inline-block',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        borderRadius: '6px',
    },
    imageSrcWrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        borderRadius: '6px',
        backgroundColor: 'blue',
        border: '4px solid white',
        overflow: 'hidden',

    },
    buttonTitle: {
        position: 'relative',
        color: 'white',  
          
    },

    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'black',
        // Initial Opacity, before hover:
        opacity: 0.2,
        borderRadius: '6px',
    }
}));

// function handleStringToPath(title) {
//     var path = title.toLowerCase();
//     path = path.replace(/\s+/g, '');
//     return path;
// }

//Stateless functional component: Categories Button Grid Component:
export default function CategoryGrid(){
    const classes=useStyles();
    // const imageCategories = ["Immunology","Microbiology","Cell Biology","Molecular Biology","Hosts and Model Organisms","Labware"];
    return (
        <Container maxWidth="md" className={classes.mainContainer}>
            <Query query={CATEGORY_QUERY}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <p>Loading</p>;
                        if (error) return <p>Error</p>;
                        const categoriesToRender = data.categories;
                        return (
                            <Grid container spacing={1} justify="center">
                            {categoriesToRender.map(category => (
                                <Grid key={category._id} item>
                                    <ButtonBase
                                        focusRipple
                                        className={classes.categoryButton}
                                        component={React.forwardRef((props, ref) => (
                                        <Link innerRef={ref} to={"/gallery/" + category.path} {...props} />))}
                                    >
                                        <span className={classes.imageSrcWrapper}>
                                            <span 
                                                className={classes.imageSrc}
                                                style={{
                                                    backgroundImage: `url( ${'http://localhost:1337' + category.background.url} )`
                                                }}
                                            />
                                        </span>
             
                                        <span className={classes.imageBackdrop}/>
                                        <span >
                                            <Typography
                                                className={classes.buttonTitle}
                                                variant="h6"
                                            >
                                                <Box fontFamily="Signika" fontWeight="600" m={1} pt={0}>
                                                    {category.title}
                                                </Box>
                                            </Typography>
                                        </span>
            
                                    </ButtonBase>
                                </Grid>
                            ))}                
                            </Grid>                            
                        )
                    }
                }
            </Query>

            {/* <Grid className={classes.gridContainer} container spacing={1} justify="center">
                {imageCategories.map(value => (
                    <Grid key={value} item>
                        <ButtonBase
                            focusRipple
                            className={classes.categoryButton}
                            component={React.forwardRef((props, ref) => (
                            <Link innerRef={ref} to="/immunology" {...props} />))}
                        >
                            <span className={classes.imageSrcWrapper}>
                                <span 
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url('https://source.unsplash.com/random')`
                                    }}
                                />
                            </span>
 
                            <span className={classes.imageBackdrop}/>
                            <span >
                                <Typography
                                    className={classes.buttonTitle}
                                >
                                    {value}
                                </Typography>
                            </span>

                        </ButtonBase>
                    </Grid>
                ))}                
            </Grid> */}
        </Container>

    );
}
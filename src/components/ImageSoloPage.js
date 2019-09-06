import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/SaveAlt';

import {strapiHost} from './HostDetails';


import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import 'typeface-signika';

//GraphQL query:
const GET_IMAGE = gql `
 query Photo($imageId: ID!){
        stockphoto(id: $imageId) {
            title
            image {
                url
            }
            vectorGraphicPackage {
                url
            }
        }
    }
`;

// MaterialUI Hook API styles
const useStyles = makeStyles(theme => ({
    mainContainer: {
        // alignItems: "center",
        textAlign: "center",
    },
    button: {
        margin: theme.spacing(1),
        width: "25em",
    },
    imageTitle: {
        paddingTop: "1em",
        paddingBottom: "0.5em",
    },
    stockPhoto: {
        maxWidth: "100%",
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    }
}));

export default function ImageSoloPage(props){
    
    const classes = useStyles();
    //params match from router:
    const imageId = props.match.params.id

    return (

            <Container maxWidth="xs" className={classes.mainContainer}>
            <Query query={GET_IMAGE} variables={{imageId: imageId}}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <p>Loading</p>;
                        if (error) return <p>Error</p>;
                        return (
                            <div>
                                <Typography variant="h3" align="center" className={classes.imageTitle}>
                                    <Box fontFamily="Signika">
                                    {data.stockphoto.title}
                                    </Box>
                                </Typography>
                                <img src={strapiHost + data.stockphoto.image.url} className={classes.stockPhoto} alt="StockPhoto" />
                                <Button variant="outlined" color="primary" className={classes.button} >
                                    PhotoShop Package 
                                    <SaveIcon className={classes.rightIcon} />
                                </Button>
                               
                                    <a href={strapiHost + data.stockphoto.vectorGraphicPackage.url}>
                                    <Button variant="outlined" color="primary" className={classes.button}>
                                        Vector Graphic Package
                                        <SaveIcon className={classes.rightIcon} />
                                        </Button>   
                                    </a>
                                                                             
                            </div>   
                        )
                    }    
                }
            </Query>
            </Container>
    )
}
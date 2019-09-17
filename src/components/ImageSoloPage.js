import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/SaveAlt';

import {bioStockHost} from './HostDetails';


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
    },
    downloadLink: {
        textDecoration: "none",
    },
    stockPhotoDiv: {
        marginBottom: theme.spacing(8),
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
                        console.log(data);
                        return (
                            <div className={classes.stockPhotoDiv}>
                                <Typography variant="h3" align="center" className={classes.imageTitle}>
                                    <Box fontFamily="Signika">
                                    {data.stockphoto.title}
                                    </Box>
                                </Typography>
                                <img src={bioStockHost + data.stockphoto.image.url} className={classes.stockPhoto} alt="StockPhoto" />
                                { (data.stockphoto.vectorGraphicPackage === null) ? <p>no available Photoshop package </p> : (
                                    <a href={bioStockHost + data.stockphoto.vectorGraphicPackage.url} className={classes.downloadLink} download>
                                        <Button variant="outlined" color="primary" className={classes.button}>
                                            Photoshop Package
                                            <SaveIcon className={classes.rightIcon} />
                                        </Button>  
                                    </a>                                    
                                )}
                                { (data.stockphoto.vectorGraphicPackage === null) ? <p>no available PNG package </p> : (
                                    <a href={bioStockHost + data.stockphoto.vectorGraphicPackage.url} className={classes.downloadLink} download>
                                        <Button variant="outlined" color="primary" className={classes.button}>
                                            PNG Package
                                            <SaveIcon className={classes.rightIcon} />
                                        </Button>  
                                    </a>                                    
                                )}
                                { (data.stockphoto.vectorGraphicPackage === null) ? <p>no available vector package </p> : (
                                    <a href={bioStockHost + data.stockphoto.vectorGraphicPackage.url} className={classes.downloadLink} download>
                                        <Button variant="outlined" color="primary" className={classes.button}>
                                            Vector Graphics Package
                                            <SaveIcon className={classes.rightIcon} />
                                        </Button>  
                                    </a>                                    
                                )}

                            </div>   
                        )
                    }    
                }
            </Query>
            </Container>
    )
}
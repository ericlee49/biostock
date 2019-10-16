// Modal that pops up when a stock photo is selected from the Gallery

import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import 'typeface-signika';

import {bioStockHost} from './HostDetails';

import SaveIcon from '@material-ui/icons/SaveAlt';

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
            pngPackage {
                url
            }
            psdPackage {
                url
            }
        }
    }
`;

const useStyles = makeStyles(theme => ({

    dialogStyle: {
        // height: '90vh'
    },
    containerDivStyle: {
        backgroundColor: '#bac8de',
        textAlign: "center",
        margin: "2em"

    },
    gridContainer: {
        backgroundColor: '#bac8de',

    },
    centerImage: {
        // display: "block",
        // marginLeft: "auto",
        // marginRight: "auto",
        // verticalAlign: "middle",
        width: "80%",
        // backgroundColor: "red"

    },
    imageTitle: {
        marginBottom: "0.5em",
    },
    button: {
        margin: theme.spacing(1),
        width: '20em'
    },
    downloadLink: {
        textDecoration: 'none',
    },
    rightSaveIcon: {
        marginLeft: '0.25em',
    }

}));

export default function ImageModal(props) {
    //params match from router
    const imageId = props.match.params.id

    const classes = useStyles();
    // const {onClose, open} = props;
    const [open, setOpen] = React.useState(true);

    // function handleClose() {
    //     setOpen(false);
    // }

    let handleClose = () => {
        setOpen(false);
        // e.stopPropgation();
        props.history.goBack();
    }
    return (
        <Dialog 
            open={open}
            fullWidth={true}
            maxWidth="xs"
            onClose={handleClose}
            className={classes.dialogStyle}
        >
            <Query query={GET_IMAGE} variables={{imageId: imageId}}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error!</p>
                        return (
                            <Grid  container>
                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        direction="column"
                                        alignItems="center"
                                    >
                                        <img src={bioStockHost + data.stockphoto.image.url} className={classes.centerImage} alt="StockPhoto"/>
                                    </Grid>
                                </Grid>

                                <Grid item xs={12} className={classes.gridContainer}>
                                    <div className={classes.containerDivStyle}>
                                        <Typography variant="h4" align="center" className={classes.imageTitle}>
                                            <Box fontFamily="Signika">
                                            {data.stockphoto.title}
                                            </Box>
                                        </Typography>
                                        { (data.stockphoto.psdPackage === null) ? <p>no available Photoshop package </p> : (
                                            <a href={bioStockHost + data.stockphoto.psdPackage.url} className={classes.downloadLink} download>
                                                <Button variant="outlined" color="primary" className={classes.button}>
                                                    <Box fontFamily="Signika">
                                                        photoshop package
                                                    </Box>
                                                    <SaveIcon className={classes.rightSaveIcon} />
                                                </Button>  
                                            </a>                                    
                                        )}
                                        { (data.stockphoto.pngPackage === null) ? <p>no available PNG package </p> : (
                                            <a href={bioStockHost + data.stockphoto.pngPackage.url} className={classes.downloadLink} download>
                                                <Button variant="outlined" color="primary" className={classes.button}>
                                                <Box fontFamily="Signika">
                                                    PNG Package
                                                </Box>
                                                    <SaveIcon className={classes.rightSaveIcon} />
                                                </Button>  
                                            </a>                                    
                                        )}
                                        { (data.stockphoto.vectorGraphicPackage === null) ? <Box fontFamily="Signika">No Vector Package Available </Box> : (
                                            <a href={bioStockHost + data.stockphoto.vectorGraphicPackage.url} className={classes.downloadLink} download>
                                                <Button variant="outlined" color="primary" className={classes.button}>
                                                <Box fontFamily="Signika">
                                                    Vector Graphics Package
                                                </Box>    
                                                    <SaveIcon className={classes.rightSaveIcon} />
                                                </Button>  
                                            </a>                                    
                                        )}
                                    </div>                                                
                                </Grid>
                            </Grid>                              
                        )
                    }
                }          
            </Query>        

        </Dialog>
    );
}



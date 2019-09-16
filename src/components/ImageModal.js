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

import {strapiHost} from './HostDetails';

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

const useStyles = makeStyles(theme => ({
    listStyle: {
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
    centerGrid: {
        // verticalAlign: "middle",
        // minHeight: '50vh',
        // justifyContent: "center",
    },
    button: {
        margin: theme.spacing(1),
        width: '20em'
    },
    downloadLink: {
        textDecoration: 'none',
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
        >
            <Query query={GET_IMAGE} variables={{imageId: imageId}}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error!</p>
                        console.log("HERE IS DATA");
                        console.log(data);
                        return (
                            <Grid  container>
                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        direction="column"
                                        alignItems="center"
                                        className={classes.centerGrid}
                                    >
                                        <img src={strapiHost + data.stockphoto.image.url} className={classes.centerImage} alt="StockPhoto"/>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} className={classes.listStyle}>
                                    <List >
                                        <ListItem>
                                            <Typography variant="h4">
                                                <Box fontFamily="Signika">
                                                    {data.stockphoto.title}
                                                </Box>
                                                
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            { (data.stockphoto.vectorGraphicPackage === null) ? <p>No Photoshop package available</p> : (
                                                <a href={strapiHost + data.stockphoto.vectorGraphicPackage.url} className={classes.downloadLink} download>
                                                    <Button variant="outlined" color="primary" className={classes.button}>
                                                        <Box fontFamily="Signika">
                                                            Photoshop Package
                                                        </Box>
                                                    </Button>  
                                                </a> 
                                                )
                                            }                                                                    
                                        </ListItem>
                                        <ListItem>
                                            { (data.stockphoto.vectorGraphicPackage === null) ? <p>No Photoshop package available</p> : (
                                                <a href={strapiHost + data.stockphoto.vectorGraphicPackage.url} className={classes.downloadLink} download>
                                                    <Button variant="outlined" color="primary" className={classes.button}>
                                                        <Box fontFamily="Signika">
                                                            PNG Package Download
                                                        </Box>
                                                    </Button>  
                                                </a> 
                                                )
                                            }                         
                                        </ListItem>                                        
                                        <ListItem>
                                            { (data.stockphoto.vectorGraphicPackage === null) ? <p>No Photoshop package available</p> : (
                                                <a href={strapiHost + data.stockphoto.vectorGraphicPackage.url} className={classes.downloadLink} download>
                                                    <Button variant="outlined" color="primary" className={classes.button}>
                                                        <Box fontFamily="Signika">
                                                            Vector Package Download
                                                        </Box>
                                                    </Button>  
                                                </a> 
                                                )
                                            }                         
                                        </ListItem>
                                    </List>                
                                </Grid>
                            </Grid>                              
                        )
                    }
                }          
            </Query>        

        </Dialog>
    );
}



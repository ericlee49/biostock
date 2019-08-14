import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


import {Query} from 'react-apollo';
import gql from 'graphql-tag';

//GraphQL query:
const GET_IMAGE = gql `
 query Photo($imageId: ID!){
        stockphoto(id: $imageId) {
            title
            image {
                url
            }
        }
    }
`;

const useStyles = makeStyles(theme => ({
    listStyle: {
        backgroundColor: '#bdcafc',
    },
    centerImage: {
        // display: "block",
        // marginLeft: "auto",
        // marginRight: "auto",
        // verticalAlign: "middle",
        width: "80%",
        backgroundColor: "red"

    },
    centerGrid: {
        // verticalAlign: "middle",
        // minHeight: '50vh',
        // justifyContent: "center",
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
                        return (
                            <Grid  container>
                                <Grid item xs={12}>
                                    <Grid
                                        container
                                        direction="column"
                                        alignItems="center"
                                        className={classes.centerGrid}
                                    >
                                        <img src={"http://localhost:1337" + data.stockphoto.image.url} className={classes.centerImage}></img>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} className={classes.listStyle}>
                                    <List >
                                        <ListItem>
                                            <Typography variant="h4">
                                                {data.stockphoto.title}
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText
                                                primary="Single-line item"
                                                secondary='Secondary text'
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <Button color="primary">
                                                PNG Package Download
                                            </Button>                        
                                        </ListItem>
                                        <ListItem>
                                            <Button color="primary">
                                                PSD Package Download
                                            </Button>                        
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



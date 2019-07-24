import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

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
        verticalAlign: "middle",
        minHeight: '50vh',
        justifyContent: "center",
    }

}));

export default function ImageDialog2(props) {
    const classes = useStyles();
    const {onClose, open} = props;

    function handleClose() {
        onClose();
    }
    return (
        <Dialog 
            open={open}
            fullWidth={true}
            maxWidth="md"
            onClose={handleClose}
        >
            <Grid  container>
            <Grid item xs={12} md={9}>
            <Grid
                container
                direction="column"
                alignItems="center"
                className={classes.centerGrid}
            >
                <img src={require('../assets/nucleus.png')} className={classes.centerImage}></img>
            </Grid>
                
                
            </Grid>
            <Grid item xs={12} md={3} className={classes.listStyle}>
                <List >
                    <ListItem>
                        <Typography variant="h4">
                            Nucleus
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Single-line item"
                            secondary='Secondary text'
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Single-line item"
                            secondary='Secondary text'
                        />
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
        </Dialog>
    );
}

ImageDialog2.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};


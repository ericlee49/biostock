import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Box from '@material-ui/core/Box';

import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

import 'typeface-signika';

// import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';


const CREATE_REQUEST = gql `
    mutation CreateRequest($firstname: String!, $lastname: String!, $email: String!, $description: String!) {
        createRequest(input: {
            data: {
                firstname: $firstname,
                lastname: $lastname,
                email: $email,
                description: $description,
                completed: false
            }
        }) {
            request {
                firstname
                lastname
                email
                description
                completed
            }
        }
    }
`;

const useStyles = makeStyles({
    okButton: {
        textDecoration: 'none',
        textTransform: 'none',

    },

    linkText: {
        textDecoration: 'none',
        color: '#318ce7'
    },
    submitButton: {
        backgroundColor: '#769ede',
    },
});

function ConfirmationDialog(props) {
    const {open, onClose} = props;
    const classes = useStyles();

    let handleDialogClose = () => {
        onClose();
    }

    return (
        <Dialog
            open={open}
            maxWidth="sm"
            onClose={handleDialogClose}
        >
            <DialogTitle id="confirmation-dialog-title">{"Request Received!"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Your request has been received.  We will get in touch soon! Thanks
                </DialogContentText>                
            </DialogContent>
            <DialogActions>
                <Button color="primary" className={classes.okButton} >
                    <Link to="/"className={classes.linkText}>
                        Okay!
                    </Link>
                </Button> 
                
            </DialogActions>
        </Dialog>
    )
}

//custom hook
function useFormInput (initialValue) {
    const [value, setValue] = useState(initialValue);
    const handleChange = event => {
        setValue(event.target.value);
        console.log(value);
    }
    return {
        value,
        onChange: handleChange,
    };
};

export default function Requests() {
    const [confimrationDialogOpen, setConfirmationDialogOpen] = React.useState(false);

    //Inputs using custom useFormInput hook
    const firstname = useFormInput('');
    const lastname = useFormInput('');
    const email = useFormInput('');
    const description = useFormInput('');
    const classes = useStyles();


    function handleClickOpen() {
        setConfirmationDialogOpen(true);
    }

    function handleClose() {
        setConfirmationDialogOpen(false);
    }

    function sendOffEmail() {
        let data = new FormData();
        data.append('to', 'eric.lee@ubc.ca');
        data.append('subject', 'New BioStock Request');

        const body = `${firstname.value} ${lastname.value} has sent you a request.  The description: ${description.value}`

        // data.append('text', description.value);
        data.append('text' , body);

        let request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:1337/email');
        request.send(data);
        console.log("SENDING EMAIL");
    }

    return (
        <div>
        <Box pt={10}>
        <Container  maxWidth="sm">
            <ConfirmationDialog open={confimrationDialogOpen} onClose={handleClose}/>
            <Typography variant="h4">
                <Box fontFamily="Signika">
                Send us a Request!
                </Box>
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        name="firstname"
                        margin="normal"
                        fullWidth
                        label="First Name"
                        {...firstname}
                    />                    
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        name="lastname"
                        margin="normal"
                        fullWidth
                        label="Last Name"
                        {...lastname}
                    />                    
                </Grid>
                <Grid item sm={12}>
                    <TextField
                        variant="outlined"
                        name="email"
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        {...email}
                    />                    
                </Grid>
                <Grid item sm={12}>
                    <TextField
                        variant="outlined"
                        multiline
                        margin="normal"
                        rows="4"
                        required
                        fullWidth
                        label="Description"
                        {...description}
                    /> 
                    <Box fontFamily="Signika">
                        <p>Please Email <a href="mailto:craig.kornak@ubc.ca?Subject=BioStock%20Request" target="_top">Craig</a> if you have any images you wish to send</p>
                    </Box>
                </Grid>
                <Mutation
                    mutation={CREATE_REQUEST}
                    variables={{
                        firstname: firstname.value,
                        lastname: lastname.value,
                        email: email.value,
                        description: description.value
                    }}
                    onCompleted={handleClickOpen}
                >
                    {(createRequest) => (
                        <Grid item sm={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary" 
                                onClick={() => {
                                    createRequest();
                                    sendOffEmail();
                                }}
                                className={classes.submitButton}                       
                            >
                                <Box fontFamily="Signika">
                                    Submit Request
                                </Box>
                            </Button>
                        </Grid>
                    )}

                </Mutation>
            </Grid>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={sendOffEmail}
            >
                SUBMIT EMAIL TEST
            </Button>

        </Container>
        </Box>
        </div>
    )
}
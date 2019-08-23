import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Box from '@material-ui/core/Box';

// Forms:
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput'


import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

const CREATE_PHOTO_REQUEST = gql `
    mutation CreatePhotoRequest($firstname: String!, $lastname: String!, $email: String!, $description: String!) {
        createPhotoRequest(input: {
            data: {
                firstname: $firstname,
                lastname: $lastname,
                email: $email,
                description: $description,
            }
        }) {
            photorequest {
                firstname
                lastname
                email
                description
            }
        }
    }
`;

// const useStyles = makeStyles(theme => ({

// }))

function ConfirmationDialog(props) {
    const {open, onClose} = props;
    return (
        <Dialog
            open={open}
            maxWidth="sm"
            onClose={onClose}
        >
            <DialogTitle id="confirmation-dialog-title">{"Request Received!"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Your request has been received.  We will get in touch soon! Thanks
                </DialogContentText>                
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={onClose}>
                    OK
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
    const testInput = useFormInput('');

    //Inputs using custom useFormInput hook
    const firstname = useFormInput('');
    const lastname = useFormInput('');
    const email = useFormInput('');
    const description = useFormInput('');

    function handleClickOpen() {
        setConfirmationDialogOpen(true);
        console.log(testInput.value);
    }

    function handleClose() {
        setConfirmationDialogOpen(false);
    }
    


    return (
        <Box pt={10}>
        <Container component="main" maxWidth="sm">
            <ConfirmationDialog open={confimrationDialogOpen} onClose={handleClose}/>
            <Typography component="h1" variant="h5">
                Send us a Request!
            </Typography>
            <form noValidate>
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
                        <p>Please Email <a href="mailto:craig.kornak@ubc.ca?Subject=BioStock%20Request" target="_top">Craig</a> if you have any images you wish to send</p>                   
                    </Grid>

                    <Grid item sm={12}>
                        <TextField
                            variant="outlined"
                            name="test"
                            margin="normal"
                            required
                            fullWidth
                            label="Test"
                            {...testInput}
                        />                
                    </Grid>
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleClickOpen}
                    >
                        Submit
                    </Button>
                </Grid>

            </form>
        </Container>
        </Box>
    )
}
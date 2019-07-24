import React from 'react';
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

export default function Requests() {
    const [confimrationDialogOpen, setConfirmationDialogOpen] = React.useState(false);

    function handleClickOpen() {
        setConfirmationDialogOpen(true);
    }

    function handleClose() {
        setConfirmationDialogOpen(false);
    }    
    return (
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
                        />                    
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            name="lastname"
                            margin="normal"
                            fullWidth
                            label="Last Name"
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
                        /> 
                        <p>Please Email <a href="mailto:craig.kornak@ubc.ca?Subject=BioStock%20Request" target="_top">Craig</a> if you have any images you wish to send</p>                   
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
    )
}
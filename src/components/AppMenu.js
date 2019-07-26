import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
// import Link from '@material-ui/core/Link';
import { Link, NavLink } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';



// const useStyles = makeStyles(theme => ({
//     toolbar: {
//     },
//     toolbarLink: {

//     },  
//     toolbarTitle: {
//     }, 
//     searchBar: {

//     },       
// }));

const styles = theme => ({
    toolbar: {
        // display: 'flex',
        // justifyContent: 'flex-end',
        overflowX: 'auto',
        backgroundColor: '#bdcafc'
    },
    toolbarLink: {
        //spacing(top, sides)
        padding: theme.spacing(1, 2),
        // flexShrink: 0,
    },  
    toolbarTitle: {
        flexGrow: 1,
        // backgroundColor:'orange'
    },   
    searchBar: {
        paddingBottom: theme.spacing(3),
    },  
    navigation: {
        paddingRight: theme.spacing(2),
    },
    logoLink: {
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            color: 'red',
        },
    }
});

class AppMenu extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>

            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" className={classes.toolbarTitle}>
                    {/* <Link href='/'>
                        BioStock
                    </Link> */}
                    <Link className={classes.logoLink} to="/">                    
                    <Box fontFamily="Signika" fontWeight="500" m={1}>
                        BioStock
                    </Box>
                    </Link> 
                </Typography>
                <nav className={classes.navigation}>
                    {/* <Link className={classes.toolbarLink}>Tutorials</Link>
                    <Link href='/requests' className={classes.toolbarLink}>Requests</Link>
                    <Link className={classes.toolbarLink}>About</Link>  */}
                    <NavLink to='/' className={classes.toolbarLink}>Tutorials </NavLink>
                    <NavLink to='/' className={classes.toolbarLink}>About </NavLink>
                    <NavLink to='/requests' className={classes.toolbarLink}>Requests </NavLink>
                </nav>
                <TextField
                        id="standard-search"
                        label="Search"
                        type="search"
                        className={classes.searchBar}
                        margin="normal"
                />
            </Toolbar>            


        </div>            
        )
    }
}

export default withStyles(styles)(AppMenu)

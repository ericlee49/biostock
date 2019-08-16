import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { Link, NavLink } from 'react-router-dom';
import { Container } from '@material-ui/core';

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
        // overflowX: 'auto',
        backgroundColor:'orange',
        backgroundColor: '#bac8de'
    },
    toolbarLink: {
        //spacing(top, sides)
        float: "right",
        textDecoration: 'none',
        padding: theme.spacing(1, 2),
        fontFamily: "Signika",
        color: "black",
        '&:hover': {
            color: 'white',
            textDecoration: "underline"
        },
        // flexShrink: 0,
    },  
    toolbarTitle: {
        flexGrow: 1,
        float: "left",
        
        
    },   
    searchBar: {
        paddingBottom: theme.spacing(3),
    },  
    navigation: {
        float: "right",
        paddingRight: theme.spacing(2),
    },
    logoLink: {
        backgroundColor: 'red',
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            color: 'white',
            fontSize: "1.1em"
        },
    },
    redColor: {
        backgroundColor: 'red',
    }
});

class AppMenu extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" className={classes.redColor}>
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
                    {/* <NavLink to='/soon' className={classes.toolbarLink}>                    
                        <Box fontFamily="Signika" fontWeight="500" >
                            TUTORIALS
                        </Box> 
                    </NavLink>
                    <NavLink to='/soon' className={classes.toolbarLink}>
                        <Box fontFamily="Signika" fontWeight="500" >
                            ABOUT
                        </Box>                     
                    </NavLink>
                    <NavLink to='/requests' className={classes.toolbarLink}>
                        <Box fontFamily="Signika" fontWeight="500" >
                            REQUESTS
                        </Box>    
                    </NavLink> */}
                    <NavLink to='/soon' className={classes.toolbarLink}>                    
                        TUTORIALS                      
                    </NavLink>
                    <NavLink to='/about' className={classes.toolbarLink}>
                        ABOUT
                    </NavLink>
                    <NavLink to='/requests' className={classes.toolbarLink}>
                        REQUESTS
                    </NavLink>                    
                </nav>
            </Toolbar>            


        </div>            
        )
    }
}

export default withStyles(styles)(AppMenu)

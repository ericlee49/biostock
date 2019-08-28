import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { Link, NavLink } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    title: {
        // backgroundColor: "red",
    },
    toolbarStyle: {
        backgroundColor: '#bac8de'
    },
    mobileMenuIcon: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    mobileMenu: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
    desktopNavGroup: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    grow: {
        flexGrow: 1,
    },
    navigation: {
        paddingRight: theme.spacing(2),
    },
    toolbarLink: {
        //spacing(top, sides)
        float: "right",
        textDecoration: 'none',
        padding: theme.spacing(1, 2),
        fontFamily: "Signika",
        color: "black",
        '&:hover': {
            color: 'grey',
            textDecoration: "underline"
        },
        // flexShrink: 0,
    },
    logoLink: {
        // backgroundColor: 'red',
        textDecoration: 'none',
        color: 'black',
        '&:hover': {
            color: 'white',
            fontSize: "1.1em"
        },
    },      
}))

export default function AppMenu() {
    const classes = useStyles();

    //STATES:
    const [anchorEl, setAnchorEl] = React.useState(null);



    const renderMenu = (
        <Menu
            open={Boolean(anchorEl)}
            anchorEl = {anchorEl}
            anchorOrigin={{vertical:'top', horizontal: 'right'}}
            onClose={handleClose}
            className={classes.mobileMenu}
        >
            <MenuItem onClick={handleClose}>
                <NavLink to='/requests' className={classes.toolbarLink}>                    
                    <Box fontFamily="Signika" fontWeight="500" >
                        REQUESTS
                    </Box> 
                </NavLink>            
            </MenuItem>
            <MenuItem onClick={handleClose}>
                 <NavLink to='/about' className={classes.toolbarLink}>                    
                    <Box fontFamily="Signika" fontWeight="500" >
                        ABOUT
                    </Box> 
                </NavLink>            
            </MenuItem>
            <MenuItem onClick={handleClose}>                     
                <NavLink to='/soon' className={classes.toolbarLink}>                    
                    <Box fontFamily="Signika" fontWeight="500" >
                        TUTORIALS
                    </Box> 
                </NavLink>
            </MenuItem>
            
        </Menu>
    );

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
        console.log(event);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolbarStyle}>
                    <Typography className={classes.title} variant="h5" noWrap>
                        <Link className={classes.logoLink} to="/">                    
                            <Box fontFamily="Signika" fontWeight="500" m={1}>
                                BioStock
                            </Box>
                        </Link> 
                    </Typography>
                    {/* Push the rest of the menu to the right */}
                    <div className={classes.grow}/>
                    <div className={classes.desktopNavGroup}>
                        <nav className={classes.navigation}>
                     {/* <Link className={classes.toolbarLink}>Tutorials</Link>
                     <Link href='/requests' className={classes.toolbarLink}>Requests</Link>
                     <Link className={classes.toolbarLink}>About</Link>  */}
                     <NavLink to='/soon' className={classes.toolbarLink}>                    
                         <Box fontFamily="Signika" fontWeight="500" >
                             TUTORIALS
                         </Box> 
                     </NavLink>
                     <NavLink to='/about' className={classes.toolbarLink}>
                         <Box fontFamily="Signika" fontWeight="500" >
                             ABOUT
                         </Box>                     
                     </NavLink>
                     <NavLink to='/requests' className={classes.toolbarLink}>
                         <Box fontFamily="Signika" fontWeight="500" >
                             REQUESTS
                         </Box>    
                     </NavLink>
                     {/* <NavLink to='/soon' className={classes.toolbarLink}>                    
                         TUTORIALS                      
                     </NavLink>
                     <NavLink to='/about' className={classes.toolbarLink}>
                         ABOUT
                     </NavLink>
                     <NavLink to='/requests' className={classes.toolbarLink}>
                         REQUESTS
                     </NavLink>                     */}
                 </nav>
                    </div>
                    <IconButton 
                        onClick={handleClick} 
                        className={classes.mobileMenuIcon}
                        color="inherit"    
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    )
}

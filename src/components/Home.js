import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import BioStockHeader from './Header';
import {Link} from 'react-router-dom';


// Styles:
const useStyles = makeStyles(theme => ({
    categoryButton: {
        height: 160,
        width: 290,
        // backfaceVisibility: 'hidden',
        // backgroundColor: "green"
        '&:hover': {
            // zIndex:1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $buttonTitle': {
                transform: 'scale(1.1)',
                // transition: 'all transform 0.8s',
            },
            '& $imageSrc': {
                transform: 'scale(1.1)',
                transition: 'all 0.25s ease-in',
                

            }
        }
    },  
    categoryButtonContainer: {
        paddingTop: 40,
        paddingBottom: 40,       
        backgroundColor: "red",
    },
    g2: {
        backgroundColor: "purple",
    },    
  

    // NEW IMAGED BUTTON:
    imageSrc: {
        position: 'absolute',
        display: 'inline-block',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        borderRadius: '6px',
        // backgroundImage: "url(https://source.unsplash.com/random)",
    },
    imageSrcWrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        borderRadius: '6px',
        backgroundColor: 'blue',
        border: '1px solid white',
        overflow: 'hidden',
        // backgroundImage: "url(https://source.unsplash.com/random)",
    },
    buttonTitle: {
        position: 'relative',
        color: 'white',  
          
    },

    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'black',
        opacity: 0.4,
        borderRadius: '6px',
    }
}));

// Temporary Data:
const categories = ["Immunology","Microbiology","Cell Biology","Molecular Biology","Hosts and Model Organisms","Labware"];

//Stateless functional component: Categories Button Grid Component:
function CategoryButtonsGrid(){
    const classes=useStyles();
    const imageCategories = categories
    return (
        <Container maxWidth="md" className={classes.categoryButtonContainer}>
            <Grid className={classes.g2} container spacing={1} justify="center">
                {imageCategories.map(value => (
                    <Grid key={value} item>
                        <ButtonBase
                            focusRipple
                            className={classes.categoryButton}
                            component={React.forwardRef((props, ref) => (
                            <Link innerRef={ref} to="/immunology" {...props} />))}
                        >
                            <span className={classes.imageSrcWrapper}>
                                <span 
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url('https://source.unsplash.com/random')`
                                    }}
                                />
                            </span>
 
                            <span className={classes.imageBackdrop}/>
                            <span >
                                <Typography
                                    className={classes.buttonTitle}
                                >
                                    {value}
                                </Typography>
                            </span>

                        </ButtonBase>
                    </Grid>
                ))}                
            </Grid>
        </Container>
        // </Grid> 
    );
}

export default function Home(){
    return (
        <div>
            <BioStockHeader/>
            <CategoryButtonsGrid/>
        </div>
       
    )
};


import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';


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

// MaterialUI Hook API styles
const useStyles = makeStyles(theme => ({
    mainContainer: {
        backgroundColor: "green",
    },
    stockPhoto: {
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
    }
}));

export default function ImageSoloPage(props){
    
    const classes = useStyles();
    //params match from router:
    const imageId = props.match.params.id

    return (

            <Container maxWidth="sm" className={classes.mainContainer}>
            <Query query={GET_IMAGE} variables={{imageId: imageId}}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <p>Loading</p>;
                        if (error) return <p>Error</p>;
                        console.log(data);
                        return (
                            <div>
                                <Typography variant="h3">{data.stockphoto.title}</Typography>
                                <img src={"http://localhost:1337" + data.stockphoto.image.url} className={classes.stockPhoto}></img>
                            </div>
                            
                        )
                    
                    }    
                }
            </Query>
            <p>Hello World</p>
            </Container>
    )
}
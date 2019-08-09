import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import {Query} from 'react-apollo';
import gql from 'graphql-tag';


const GET_IMAGE = gql `
    query Image($id: ID!) {
        stockphoto(id: "5d3f40db42ee092510093969") {
            title
            image {
                url
            }
        }
    }
`;

export default function ImageSoloPage(props){
    //params match from router:
    const imageId = props.match.params.id

    return (
        <div>
            <Container maxWidth="lg">
            <Query query={GET_IMAGE} variables = {{id: `${ImageBitmapRenderingContext}`}}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <p>Loading</p>;
                        if (error) return <p>Error</p>;
                        console.log(data);
                        return (
                            <div>
                                Hello    
                            </div>
                        )
                    
                    }    
                }
            </Query>
            </Container>
        </div>
    )
}
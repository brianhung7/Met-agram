import React from 'react';
import { Typography, Card, CardMedia, Zoom } from '@mui/material';

const Art = ({content}) => {

    return(
        <>
            <Card className="art">
                <CardMedia>
                    <Typography> {content.title} </Typography>
                    <Typography> {content.artist} </Typography>
                </CardMedia>
                <CardMedia image={content.image} component='img' alt="Met Museum" />
            </Card>
        </>
    )
}

export default Art;
import React from 'react';
import { Typography, Card, CardMedia } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const artDesign = {
    border: '1px solid grey', 
    borderRadius: '12px',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
    width: '60%',
}

const Art = ({content, comments, setComments, like, setLike}) => {


    return(
        <>
            <Card sx={artDesign}>
                <CardMedia>
                    <Typography variant='h6'> {content.title} </Typography>
                    <Typography>By: {content.artist} </Typography>
                </CardMedia>
                <CardMedia image={content.image} component='img' alt="Met Museum" />
                {like ? <FavoriteIcon fontSize="large" cursor="pointer" onClick={() => setLike(false)}/> : 
                <FavoriteIcon fontSize="large" cursor="pointer" sx={{ color: 'red' }} onClick={() => setLike(true)}/> }
            </Card>
        </>
    )
}

export default Art;
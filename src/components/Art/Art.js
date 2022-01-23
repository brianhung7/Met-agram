import React from 'react';
import { Typography, Card, CardMedia } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Message from '../Message/Message';
import { artDesign } from './ArtStyles';



const Art = ({content, messages, setMessages, like, setLike}) => {


    return(
        <>
            <Card sx={artDesign}>
                <CardMedia>
                    <Typography variant='h6'> {content.title} </Typography>
                    <Typography>By: {content.artist} </Typography>
                </CardMedia>
                <CardMedia image={content.image} component='img' alt="Met Museum" />
                {like ? <FavoriteIcon fontSize="large" cursor="pointer" onClick={() => setLike(false)} sx={{ color: 'red' }}/> : 
                <FavoriteIcon fontSize="large" cursor="pointer" onClick={() => setLike(true)}/> }
                <Message messages={messages} setMessages={setMessages}  />
            </Card>
        </>
    )
}

export default Art;
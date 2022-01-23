import React from 'react';
import Art from '../Art/Art';
import { CircularProgress, Container, Button, Typography } from '@mui/material';
import { centerStyle, leftButtonStyle, rightButtonStyle, errorStyle } from './ContentStyles';

const{useState, useEffect} = React;

const Content = () => {
    const [content, setContent] = useState(null)
    const [page, setPage] = useState(436121)
    const [error, setError] = useState(null)
    const [like, setLike] = useState(false)
    const [messages, setMessages] = useState([])

    // const api = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${page}`

    //Error/exception handling for our fetch request
    const checkErrors = (res) => {
        if(!res.ok){
            throw Error(res.statusText)
        }
        return res
    }

    //Changes which api 'page' to grab data from
    const updatePage = (input) => {
        let currentPage = page;
        setContent(null)
        setError(null)
        if(input === 'decrement' && currentPage > 2){
            currentPage--
        } else if (input === 'increment' && currentPage < 500000){
            currentPage++
        } else {
            currentPage = 436121 //default value
        }
        setPage(currentPage)
    }

    useEffect(() => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${page}`)
            .then(checkErrors)
            .then(response => response.json())
            .then(data => {
                let info = {
                    'artist': data.artistDisplayName,
                    'image': data.primaryImage,
                    'title': data.title,
                }
                setContent(info)
                setError(null)
                setLike(false)
                setMessages([])
            })
            .catch((error) => {
                console.log("Fetch request error", error);
                console.log("Page: ", page)
                setError(error)
            })
    },[page])


    return (
        <Container sx={{my:10}} align='center'>
            <Button variant="contained" style={leftButtonStyle} onClick={() => updatePage('decrement')}>Prev</Button>
            {content ? <Art content={content} like={like} setLike={setLike} messages={messages} setMessages={setMessages}/> : 
            error ? <><Typography variant='h5' style={errorStyle}>Sorry Error: {error.message}. Try another artpiece! </Typography> </> : 
            <CircularProgress style={centerStyle}/>}
            <Button variant="contained" style={rightButtonStyle} onClick={() => updatePage('increment')}>Next</Button>
        </Container>
    )
}

export default Content
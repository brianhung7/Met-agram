import React from 'react';
import Art from './Art';
import { CircularProgress, Container, Button, Typography } from '@mui/material';

const{useState, useEffect} = React;

const centerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%),'
}

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
        <Container sx={{my:10}} align="center">
            <Button variant="contained" style={{
                position: 'fixed',
                top: '50%',
                left: '10%',
                transform: 'translate(-50%, -50%)'
            }} onClick={() => updatePage('decrement')}>Prev</Button>
            {content ? <Art content={content} like={like} setLike={setLike} messages={messages} setMessages={setMessages}/> : 
            error ? <><Typography variant='h5'>{error.message} Try another artpiece! </Typography> </> : 
            <CircularProgress style={centerStyle}/>}
            <Button variant="contained" style={{
                position: 'fixed',
                top: '50%',
                left: '85%',
                transform: 'translate(-50%, -50%)'
            }} onClick={() => updatePage('increment')}>Next</Button>
        </Container>
    )
}

export default Content
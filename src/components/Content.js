import React from 'react';
import Art from './Art';
import { CircularProgress, Container, Button, Typography } from '@mui/material';
const{useState, useEffect} = React;


const Content = () => {
    const [content, setContent] = useState(null)
    const [page, setPage] = useState(436121)
    const [error, setError] = useState(null)

    const api = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${page}`

    const checkErrors = (res) => {
        if(!res.ok){
            throw Error(res.statusText)
        }
        return res
    }

    const fetchData = async () => {
        await fetch(api)
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
            })
            .catch((error) => {
                console.log(error);
                console.log(page)
                setError(error)
            })
    }

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
        fetchData();
    },[page])


    return (
        <Container sx={{my:10}} align="center">
            <Button variant="contained" style={{
                position: 'fixed',
                top: '50%',
                left: '10%',
                transform: 'translate(-50%, -50%)'
            }} onClick={() => updatePage('decrement')}>Prev</Button>
            {/* {content && !error ? <Art content={content} /> : <CircularProgress />}
            {error ? <>{error.message}</> : <></>} */}
            {content ? <Art content={content} /> : error ? <><Typography variant='h5' justifySelf='center'>{error.message} Try another artpiece! </Typography> </> : <CircularProgress />}
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
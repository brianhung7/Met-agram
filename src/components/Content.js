import React from 'react';
import Art from './Art';
import { CircularProgress, Container } from '@mui/material';
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
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData();
    },[page])


    return (
        <Container sx={{my:10}} align="center">
            {content ? <Art content={content} /> : <CircularProgress />}
        </Container>
    )
}

export default Content
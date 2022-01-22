import React from 'react';
import Art from './Art';
import { CircularProgress } from '@mui/material';
const{useState, useEffect} = React;


const Content = () => {
    const [content, setContent] = useState(null)
    const [page, setPage] = useState(436121)

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
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData();
    },[page])


    return (
        <>
            {content ? <Art content={content} /> : <CircularProgress />}
        </>
    )
}

export default Content
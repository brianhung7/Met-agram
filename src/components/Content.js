import React from 'react';

const{useState, useEffect} = React;


const Content = () => {
    const [content, setContent] = useState(null)

    const api = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/436121'

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
                setContent(data)
                console.log(data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData();

    },[])


    return (
        <>
            Yay!
        </>
    )
}

export default Content
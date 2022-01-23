import React from "react";
import { CardMedia, Typography, Box, TextField, Button } from "@mui/material";
import AddCommentIcon from '@mui/icons-material/AddComment';
import { formStyle } from "./MessageStyles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const {useState} = React;

const Comment = ({messages, setMessages}) => {
    const [text, setText] = useState('')

    const addMessage = (event) => {
        //Stop page from refreshing
        event.preventDefault()
        //make temp message array and push new text in then update
        let tempMessages = [...messages]
        tempMessages.push(text)
        setMessages(tempMessages)
        //resetting text state and input field to empty
        setText('')
        event.target[0].value = ''
    }

    const deleteComment = (index) =>{
        let tempMessages = [...messages]
        //Removing selected message from array
        tempMessages.splice(index, 1)
        setMessages(tempMessages)
    }

    return (
        <CardMedia>
            {messages?.map((comment, index) => (
                <CardMedia sx={{display:'flex', justifyContent:'center'}}>
                    <AccountCircleIcon />
                    <Typography sx={{fontWeight:'bold'}}>
                        MetLover  
                    </Typography>
                    <Typography>
                       : {comment}
                    </Typography>
                    <DeleteOutlineIcon sx={{ color: 'red' }} cursor="pointer" onClick={() => deleteComment(index)}/>
                </CardMedia>
            ))}
            <Box component="form" onSubmit={addMessage} sx={formStyle}>
                <TextField id="outlined-basic" label="Leave a Message!" variant="outlined" onInput={(event) => setText(event.target.value)}/>
                <Button disabled={text === ''}endIcon={<AddCommentIcon />} type='submit' variant='contained'>Send</Button>
            </Box>
        </CardMedia>
    )
}

export default Comment;
import React from "react";
import { CardMedia, Typography, Box, TextField, Button } from "@mui/material";
import AddCommentIcon from '@mui/icons-material/AddComment';
import { formStyle } from "./MessageStyles";
const {useState} = React;

const Comment = ({messages, setMessages}) => {
    const [text, setText] = useState('')

    const updateMessages = (event) => {
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
    return (
        <CardMedia>
            {messages?.map((comment) => (
                <CardMedia sx={{display:'flex', justifyContent:'center'}}>
                    <Typography sx={{fontWeight:'bold'}}>
                        MetLover  
                    </Typography>
                    <Typography>
                       : {comment}
                    </Typography>
                </CardMedia>
            ))}
            <Box component="form" onSubmit={updateMessages} sx={formStyle}>
                <TextField id="outlined-basic" label="Leave a Message!" variant="outlined" onInput={(event) => setText(event.target.value)}/>
                <Button endIcon={<AddCommentIcon />} type='submit' variant='contained'>Send</Button>
            </Box>
        </CardMedia>
    )
}

export default Comment;
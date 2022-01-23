import React from "react";
import { CardMedia, Typography, Box, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, Tooltip } from "@mui/material";
import AddCommentIcon from '@mui/icons-material/AddComment';
import { formStyle, editStyle, deleteStyle } from "./MessageStyles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
const {useState} = React;

const Comment = ({messages, setMessages}) => {
    const [text, setText] = useState('')
    const [updatedText, setUpdatedText] = useState('')
    const [open, setOpen] = useState(false)
    const [messageIndex, setMessageIndex] = useState(null)

    const handleClickOpen = (string, idx) => {
        setOpen(true)
        setMessageIndex(idx)
        setUpdatedText(string)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

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

    const deleteMessage = (index) =>{
        let tempMessages = [...messages]
        //Removing selected message from array
        tempMessages.splice(index, 1)
        setMessages(tempMessages)
    }

    const updateMessage = () => {
        let tempMessages = [...messages]
        tempMessages[messageIndex] = updatedText
        setMessages(tempMessages)
        handleClose()
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
                    <Tooltip title="Edit">
                        <EditIcon sx={editStyle} variant="outlined" cursor="pointer" onClick={() => handleClickOpen(comment, index)} />
                    </Tooltip>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Update Your Message</DialogTitle>
                        <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Edit your message"
                            value = {updatedText}
                            fullWidth
                            variant="standard"
                            onInput={(event) => setUpdatedText(event.target.value)}
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={updateMessage}>Update</Button>
                        </DialogActions>
                    </Dialog>
                    <Tooltip title="Delete">
                        <DeleteOutlineIcon title="Unlike" sx={deleteStyle} cursor="pointer" onClick={() => deleteMessage(index)}/>
                    </Tooltip>
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
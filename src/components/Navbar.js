import React from "react";
import { AppBar, Typography } from "@mui/material";

const navStyling = {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    py: 2,
    bgcolor: '#DC143C',
}

const Navbar = () => {

    return (
        <AppBar sx={navStyling}>
            <Typography variant='h5'>The Met presents over 5,000 years of art</Typography>
        </AppBar>
    )
}


export default Navbar;
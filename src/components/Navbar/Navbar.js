import React from "react";
import { AppBar, Typography } from "@mui/material";
import { navStyling } from "./NavbarStyles";

const Navbar = () => {
    return (
        <AppBar sx={navStyling}>
            <Typography variant='h5'>The Met presents over 5,000 years of art</Typography>
        </AppBar>
    )
}


export default Navbar;
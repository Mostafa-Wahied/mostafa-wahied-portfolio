import { AppBar, Toolbar, Box, Container, Grid, Typography } from "@mui/material";
import "./index.css"

export const Footer = () => {
    return (

        <AppBar position="static" sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "#fefefe",
            // paddingTop: "1rem",
            // paddingBottom: "1rem",
            bottom: "0",
            alignItems: "center"
        }}>
            <Toolbar>
                <Typography color="grey.600" variant="overline">
                    {`© Mostafa Wahied ${new Date().getFullYear()}`}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;

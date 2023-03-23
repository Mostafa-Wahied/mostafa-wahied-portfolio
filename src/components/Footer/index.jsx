import { Box, Container, Grid, Typography } from "@mui/material";
import "./index.css"

export const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "grey.200",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                position: "fixed",
                bottom: "0"
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="grey.600" variant="overline">
                            {`© Mostafa Wahied ${new Date().getFullYear()}`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;

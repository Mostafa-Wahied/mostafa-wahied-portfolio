import { AppBar, Toolbar, Typography, Link, IconButton, Tooltip } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import "./index.css"

export const Footer = () => {
    return (

        <AppBar position="static" sx={{
            width: "100%",
            height: "auto",
            backgroundColor: "#fefefe",
            bottom: "0",
            alignItems: "center"
        }}>

            {/* <Toolbar> */}
                <Typography color="grey.600" variant="overline" sx={{p: 2}}>
                    Designed & built by Mostafa Wahied
                </Typography>
            {/* </Toolbar> */}
            <Toolbar sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '20%',
            }}>

                <Link
                    href='https://github.com/Mostafa-Wahied'
                    target="_blank">
                    <Tooltip title="GitHub">
                        <IconButton
                            size="large"
                            aria-label="GitHub"
                        >
                            <GitHubIcon />
                        </IconButton>
                    </Tooltip>
                </Link>
                <Link
                    href='https://www.linkedin.com/in/mostafa-wahied-seattle/'
                    target="_blank">
                    <Tooltip title="LinkedIn">
                        <IconButton
                            size="large"
                            aria-label="LinkedIn">
                            <LinkedInIcon />
                        </IconButton>
                    </Tooltip>
                </Link>
                <Link
                    href='https://drive.google.com/file/d/1e-aiBw-VkXSFyuruK-RBf2rsFcqCUXBs/view?usp=share_link'
                    target="_blank">
                    <Tooltip title="Resume">
                        <IconButton
                            size="large"
                            aria-label="Resume">
                            <DescriptionIcon />
                        </IconButton>
                    </Tooltip>
                </Link>
            </Toolbar>

            <Toolbar>
                <Typography color="grey.600" variant="overline">
                    {`© Mostafa Wahied ${new Date().getFullYear()}`}
                </Typography>
            </Toolbar>
        </AppBar>

    );
};

export default Footer;

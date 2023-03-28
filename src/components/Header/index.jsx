import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import logo from '../../assets/mw-logo.png';


const pages = ['Home', 'About', 'Projects', 'Contact'];

function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                width: "100%",
                boxShadow: 'none',
                backgroundColor: '#fefefe',
                color: 'black',
                pt: 2,
                paddingX: { sx: 0, sm: 4 },
                fontFamily: 'Montserrat',
            }}
            elevation={0}
        >
            <Container maxWidth>
                <Toolbar disableGutters sx={{ paddingLeft: 0, paddingRight: 0, width: "100%", }}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <a href="/">
                            <img src={logo} alt="Logo" border="0" width="60px" height="60px" />
                        </a>
                    </Box>
                    {/* smaller screens menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <IconButton
                                    size="large"
                                    aria-label="GitHub"
                                    onClick={() => window.open('https://github.com/Mostafa-Wahied', '_blank')}
                                >
                                    <GitHubIcon />
                                </IconButton>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <IconButton
                                    size="large"
                                    aria-label="LinkedIn"
                                    onClick={() => window.open('https://www.linkedin.com/in/mostafa-wahied-seattle/', '_blank')}
                                >
                                    <LinkedInIcon />
                                </IconButton>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <IconButton
                                    size="large"
                                    aria-label="Resume"
                                    onClick={() => window.open('https://docs.google.com/document/d/1_lK_VUy20syt8nbd04T3VDXdAhX7--J5/edit?usp=sharing&ouid=108483175537272506859&rtpof=true&sd=true', '_blank')}
                                >
                                    <DescriptionIcon />
                                </IconButton>
                            </MenuItem>
                        </Menu>
                    </Box>
                    {/* Logo for smaller screens */}
                    <Box sx={{ display: { xs: 'md', md: 'none' }, mr: 1 }}>
                        <a href="/">
                            <img src={logo} alt="Logo" border="0" width="60px" height="60px" />
                        </a>
                    </Box>

                    {/* Bigger screen icons */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: 50 }, justifyContent: 'flex-end' }}>
                        <IconButton
                            size="large"
                            aria-label="GitHub"
                            onClick={() => window.open('https://github.com/Mostafa-Wahied', '_blank')}
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="LinkedIn"
                            onClick={() => window.open('https://www.linkedin.com/in/mostafa-wahied-seattle/', '_blank')}
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="Resume"
                            onClick={() => window.open('https://docs.google.com/document/d/1_lK_VUy20syt8nbd04T3VDXdAhX7--J5/edit?usp=sharing&ouid=108483175537272506859&rtpof=true&sd=true', '_blank')}
                        >
                            <DescriptionIcon />
                        </IconButton>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
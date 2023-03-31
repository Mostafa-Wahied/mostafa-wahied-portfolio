import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Menu, Container, Tooltip, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import logo from '../../assets/mw-logo.png';


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
                // boxShadow: 'none',
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
                                <Tooltip title="GitHub">
                                    <IconButton
                                        size="large"
                                        aria-label="GitHub"
                                        onClick={() => window.open('https://github.com/Mostafa-Wahied', '_blank')}
                                    >
                                        <GitHubIcon />
                                    </IconButton>
                                </Tooltip>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Tooltip title="LinkedIn">
                                    <IconButton
                                        size="large"
                                        aria-label="LinkedIn"
                                        onClick={() => window.open('https://www.linkedin.com/in/mostafa-wahied-seattle/', '_blank')}
                                    >
                                        <LinkedInIcon />
                                    </IconButton>
                                </Tooltip>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Tooltip title="Resume">
                                    <IconButton
                                        size="large"
                                        aria-label="Resume"
                                        onClick={() => window.open('https://drive.google.com/file/d/1e-aiBw-VkXSFyuruK-RBf2rsFcqCUXBs/view?usp=share_link', '_blank')}
                                    >
                                        <DescriptionIcon />
                                    </IconButton>
                                </Tooltip>
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
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
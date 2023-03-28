import React, { useState } from 'react';
import { Box, Container, Grid, Typography, useMediaQuery, Button } from '@mui/material';
import HeroButton from '../HeroButton';
import portfolioImage from '../../assets/original.jpg';
import ScrollDown from '../ScrollDown';
import "./index.css"

const gradient = 'linear-gradient(to right, #121FCF 0%, #CF1512 100%)';

const Hero = () => {
    const [loading, setLoading] = useState(true);

    const isLargeScreen = useMediaQuery('(min-width: 960px)');

    return (
        <>
            <Container sx={{
                paddingX: { sx: 0, md: 24 },
                fontFamily: 'Montserrat',
                height: { xs: '100vh', md: '100vh' },
            }}
                maxWidth
            >
                <Grid container columnSpacing={20} sx={{ pt: { xs: 3, md: 25 } }}>
                    <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' }, marginTop: { xs: 5, md: -5 } }}>
                        <Box>
                            <Typography
                                variant='h6'
                                sx={{
                                    marginBottom: -1,
                                    fontFamily: 'Montserrat',
                                }}
                            >
                                Hello, I'm
                            </Typography>
                            <Typography
                                variant={{ xs: 'h3', md: 'h2' }}
                                sx={{
                                    backgroundImage: gradient,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontSize: { xs: '2.2rem', md: '4rem' },
                                    marginX: { xs: 0, md: -0.5 },
                                }}
                            >
                                Mostafa Wahied
                            </Typography>
                            <Typography
                                variant={{ xs: 'h4', md: 'h3' }}
                                sx={{
                                    display: 'block', fontSize: { xs: '1.6rem', md: '2.2rem' },
                                    marginTop: { xs: 0, md: -1 },
                                    lineHeight: 1.3
                                }}
                            >
                                I solve digital problems with code
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: 3 }}>
                            <HeroButton id="about" label="About" bg={gradient} />
                            <HeroButton id="projects" label="Projects" bg={gradient} />
                            <HeroButton id="contact" label="Contact" bg={gradient} rightBorderWidth="2px" />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={5} sx={{ marginTop: { xs: 5, md: -10 }, paddingLeft: { sm: 0, md: 5 } }}>

                        <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                            <div className="image-container">
                                <img className="portfolio-image" src={portfolioImage} alt="portfolio-img" border="0" />
                            </div>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

export default Hero;

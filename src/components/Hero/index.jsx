import React from 'react'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import Spline from '@splinetool/react-spline';

const gradient = 'linear-gradient(to right, #121FCF 0%, #CF1512 100%)';

const Hero = () => {
    const isLargeScreen = useMediaQuery('(min-width: 960px)');

    return (
        <>
            <Container sx={{
                paddingX: { sx: 0, md: 8 },
                fontFamily: 'Montserrat',
            }} maxWidth>
                <Grid container columnSpacing={0} sx={{ pt: { xs: 3, md: 18 } }}>
                    <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' }, marginTop: { xs: 5, md: 0 } }}>
                        <Box>
                            <Typography
                                variant='h6'
                                sx={{ marginBottom: -1 }}
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
                                    display: 'block', fontSize: { xs: '1.6rem', md: '2.5rem' },
                                    marginTop: { xs: 0, md: -2 },
                                }}
                            >
                                I solve digital problems with code
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ marginTop: { xs: 5, md: -10 } }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            {isLargeScreen ? (
                                <Spline
                                    scene="https://prod.spline.design/DR0jwlu-IhV5M0Tb/scene.splinecode"
                                    style={{ width: 500, height: 500 }}
                                />
                            ) : (
                                <Spline
                                    scene="https://prod.spline.design/DR0jwlu-IhV5M0Tb/scene.splinecode"
                                    style={{ width: 300, height: 300 }}
                                />
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

export default Hero;

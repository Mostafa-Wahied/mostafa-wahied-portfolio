import React, { useState } from 'react'
import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import Spline from '@splinetool/react-spline';
import "./index.css"
import ScrollDown from '../ScrollDown';
// import codeBG from '../../assets/code-bg.png';
import codeBG from '../../assets/code-bg-edited.png';

const About = ({ scrolledToAbout }) => {
    const [loading, setLoading] = useState(true);
    const isLargeScreen = useMediaQuery('(min-width: 960px)');

    console.log(codeBG)

    return (
        <Box
            id="about"
            className={scrolledToAbout ? 'about-expanded' : 'about-collapsed'}
            sx={{
                backgroundColor: '#000000',
                backgroundImage: `url(${codeBG})`,
                backgroundSize: '50%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transition: 'all 1.5s ease-in-out',
                margin: '0 auto',
                padding: { xs: "10px", md: '50px' },
                borderRadius: scrolledToAbout ? '0' : '50px',
                width: scrolledToAbout ? '100%' : '80%',
                fontFamily: 'Montserrat',
                marginTop: 0,
                height: { xs: '100vh', md: '100vh' },
            }}
        >
            <Container sx={{
                paddingX: { sx: 0, md: 8 },
                fontFamily: 'Montserrat',
            }}
                maxWidth
            >
                <Typography
                    variant={{ xs: 'h3', md: 'h2' }}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontSize: { xs: '2.2rem', md: '4rem' },
                        fontFamily: 'monospace',
                        fontWeight: '500',
                        color: '#F2F7FB',
                        textTransform: 'uppercase',
                        position: 'relative',
                        top: { xs: 30, md: 35 },
                    }}
                >
                    Tech Stack
                </Typography>
                <Grid container columnSpacing={0} sx={{ pt: { xs: 0, md: 29 }, gap: { xs: 3, sm: 0 } }}>
                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' }, marginTop: { xs: 5, md: 0 } }}>
                        <Box>
                            <Typography

                            >
                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <Typography variant="h5"
                                            sx={{
                                                fontSize: { xs: '1rem', md: '1.2rem' },
                                                color: 'white',
                                                position: "relative",
                                                right: 20,
                                                opacity: 0.22,
                                                fontFamily: "monospace",
                                            }}
                                        >
                                            &lt;h3&gt;
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant={{ xs: 'h4', md: 'h3' }}
                                            sx=
                                            {{
                                                display: 'block',
                                                fontSize: { xs: '1rem', md: '1.3rem' },
                                                color: '#F2F7FB',
                                                fontFamily: 'Montserrat',
                                            }}
                                        >
                                            I am a Full Stack Developer with a focus on backend development, leveraging my expertise in building scalable and performant applications.
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h5" sx={{
                                            fontSize: { xs: '1rem', md: '1.2rem' },
                                            color: 'white',
                                            position: "relative",
                                            right: 20,
                                            opacity: 0.22,
                                            fontFamily: "monospace",
                                        }}>
                                            &lt;/h3&gt;
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ marginTop: { xs: 0, md: -10 }, paddingLeft: { sm: 0, md: 5 } }}>

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            {loading && <Box>Loading...</Box>}

                            <>
                                {isLargeScreen ? (
                                    <Spline
                                        onLoad={() => setLoading(false)}
                                        scene="https://prod.spline.design/DR0jwlu-IhV5M0Tb/scene.splinecode"
                                        style={{ width: 500, height: 500 }}
                                    />
                                ) : (
                                    <Spline
                                        onLoad={() => setLoading(false)}
                                        scene="https://prod.spline.design/DR0jwlu-IhV5M0Tb/scene.splinecode"
                                        style={{ width: 300, height: 300 }}
                                    />
                                )}
                            </>
                        </Box>

                    </Grid>
                </Grid>
            </Container>

            <Box sx={{ display: { xs: "none", sm: 'flex' }, justifyContent: 'center', }} >
                <ScrollDown />
            </Box>

        </Box>

    )
}

export default About;

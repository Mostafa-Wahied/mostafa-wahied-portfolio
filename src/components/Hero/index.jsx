import React from 'react';
import { Box, Container, Grid, Typography, Tooltip } from '@mui/material';
import HeroButton from '../HeroButton';
import portfolioImage from '../../assets/original.jpg';
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion.js'
import "./index.css"
import ScrollDown from '../ScrollDown';

const gradient = 'linear-gradient(to right, #121FCF 0%, #CF1512 100%)';
const gradient2 = 'linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)';

const Hero = () => {

    return (
        <>
            <motion.section
                variants={staggerContainer("", 2)}
                initial='hidden'
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}

            >
                <Container id="projects"
                    sx={{
                        px: { sx: 0, md: 30 },
                        pt: { xs: 25, md: 27 },
                        // fontFamily: 'Montserrat',
                        height: '100vh',
                    }}
                    maxWidth
                >
                    {/* <Container sx={{
                    paddingX: { sx: 0, md: 24 },
                    fontFamily: 'Montserrat',
                    height: { xs: '100vh', md: '100vh' },
                }}
                    maxWidth
                > */}
                    {/* <Grid container columnSpacing={20} sx={{ pt: { xs: 0, md: 25 } }}>
                        <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' }, marginTop: { xs: 5, md: -5 } }}> */}
                    <Box sx={{
                        px: { xs: 2, md: 0 },
                    }}>
                        <motion.div variants={fadeIn("", "", 0.5, 1)}>
                            <Typography
                                variant='h6'
                                sx={{
                                    marginBottom: -1,
                                    pl: 0.2,
                                    fontFamily: 'Montserrat',
                                    color: 'grey.800',
                                }}
                            >
                                Hello, I'm
                            </Typography>
                        </motion.div>
                        <motion.div variants={fadeIn("", "", 1, 1)}>
                            <Typography
                            className="hero-name"
                                variant={{ xs: 'h3', md: 'h2' }}
                                sx={{
                                    backgroundImage: gradient2,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontSize: { xs: '2.2rem', md: '4.3rem' },
                                    fontFamily: "Montserrat",
                                    fontWeight: 'bold',
                                    marginX: { xs: 0, md: -0.5 },
                                }}
                            >
                                Mostafa Wahied
                            </Typography>
                        </motion.div>
                        <motion.div variants={fadeIn("", "", 1.5, 1)}>
                            <Typography
                                variant={{ xs: 'h4', md: 'h3' }}
                                sx={{
                                    display: 'block',
                                    fontSize: { xs: '1.1rem', md: '2.2rem' },
                                    fontWeight: '600',
                                    marginTop: { xs: 0, md: -1 },
                                    lineHeight: 1.3,
                                    color: 'grey.800',
                                }}
                            >
                                I build digital solutions with code
                            </Typography>
                        </motion.div>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: { xs: 'center', md: 'flex-start' },
                        marginTop: 3
                    }}>
                        <motion.div variants={fadeIn("up", "spring", 2, 1)}>
                            <HeroButton id="about" label="About" bg={gradient2} />
                            <HeroButton id="projects" label="Projects" bg={gradient2} />
                            <HeroButton id="contact" label="Contact" bg={gradient2} rightBorderWidth="2px" />
                        </motion.div>
                    </Box>
                    {/* </Grid> */}

                    {/* <Grid item xs={12} md={5} sx={{ marginTop: { xs: 5, md: -10 }, paddingLeft: { sm: 0, md: 5 } }}>
                            <motion.div variants={fadeIn("left", "spring", 1.75, 1)}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                                    <div className="image-container">
                                        <img className="portfolio-image" src={portfolioImage} alt="portfolio-img" border="0" />
                                    </div>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid> */}

                </Container>
                {/* Scroll down icon */}
                <Box sx={{ display: { xs: "flex", sm: 'flex' }, justifyContent: 'center', }} >
                    <Tooltip title="Scroll Down">
                        <ScrollDown />
                    </Tooltip>
                </Box>

            </motion.section>
        </>

    )
}

export default Hero;

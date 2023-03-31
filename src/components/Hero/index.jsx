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
                <Container sx={{
                    paddingX: { sx: 0, md: 24 },
                    fontFamily: 'Montserrat',
                    height: { xs: '100vh', md: '100vh' },
                }}
                    maxWidth
                >
                    <Grid container columnSpacing={20} sx={{ pt: { xs: 0, md: 25 } }}>
                        <Grid item xs={12} md={7} sx={{ textAlign: { xs: 'center', md: 'left' }, marginTop: { xs: 5, md: -5 } }}>
                            <Box>
                                <motion.div variants={fadeIn("", "", 0.5, 1)}>
                                    <Typography
                                        variant='h6'
                                        sx={{
                                            marginBottom: -1,
                                            fontFamily: 'Montserrat',
                                        }}
                                    >
                                        Hello, I'm
                                    </Typography>
                                </motion.div>
                                <motion.div variants={fadeIn("", "", 0.75, 1)}>
                                    <Typography
                                        variant={{ xs: 'h3', md: 'h2' }}
                                        sx={{
                                            backgroundImage: gradient2,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            fontSize: { xs: '2.2rem', md: '4rem' },
                                            marginX: { xs: 0, md: -0.5 },
                                        }}
                                    >
                                        Mostafa Wahied
                                    </Typography>
                                </motion.div>
                                <motion.div variants={fadeIn("", "", 1, 1)}>
                                    <Typography
                                        variant={{ xs: 'h4', md: 'h3' }}
                                        sx={{
                                            display: 'block',
                                            fontSize: { xs: '1.6rem', md: '2.2rem' },
                                            marginTop: { xs: 0, md: -1 },
                                            lineHeight: 1.3
                                        }}
                                    >
                                        I solve digital problems with code
                                    </Typography>
                                </motion.div>
                            </Box>
                            <Box sx={{ marginTop: 3 }}>
                                <motion.div variants={fadeIn("up", "spring", 2.2, 1)}>
                                    <HeroButton id="about" label="About" bg={gradient2} />
                                    <HeroButton id="projects" label="Projects" bg={gradient2} />
                                    <HeroButton id="contact" label="Contact" bg={gradient2} rightBorderWidth="2px" />
                                </motion.div>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={5} sx={{ marginTop: { xs: 5, md: -10 }, paddingLeft: { sm: 0, md: 5 } }}>
                            <motion.div variants={fadeIn("left", "spring", 1.75, 1)}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                                    <div className="image-container">
                                        <img className="portfolio-image" src={portfolioImage} alt="portfolio-img" border="0" />
                                    </div>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>

                </Container>
                {/* Scroll down icon */}
                <Box sx={{ display: { xs: "none", sm: 'flex' }, justifyContent: 'center', }} >
                    <Tooltip title="Scroll Down">
                            <ScrollDown />
                    </Tooltip>
                </Box>

            </motion.section>
        </>

    )
}

export default Hero;

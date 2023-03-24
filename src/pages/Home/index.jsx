import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box, Container, Grid, Typography } from '@mui/material'
import Spline from '@splinetool/react-spline';

const gradient = 'linear-gradient(to right, #121FCF 0%, #CF1512 100%)';

const Home = () => {
    return (
        <>
            <Box sx={{ backgroundImage: '#fefefe', minHeight: '100vh' }}>
                <Header />
                <Container sx={{ paddingX: { sx: 0, sm: 0 } }} maxWidth>
                    <Grid container columnSpacing={0} sx={{ pt: { xs: 3, sm: 22 }, paddingX: { sx: 0, sm: 8 } }}>

                        <Grid item xs={12} md={7} sx={{ marginTop: { xs: 5, sm: 0 } }}>
                            <Box>
                                <Typography variant="h2" sx={{ whiteSpace: 'nowrap' }}>
                                    I am{" "}<span>

                                        <Typography variant="h2" style={{ backgroundImage: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline' }}>
                                            Mostafa Wahied.
                                        </Typography>
                                    </span>
                                </Typography>
                                <Typography variant="h3" sx={{ whiteSpace: 'wrap' }}>
                                    I solve digital problems with code.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={5} sx={{ marginTop: { xs: 5, sm: -15 } }}>
                            <Box>
                                <Spline
                                    scene="https://prod.spline.design/DR0jwlu-IhV5M0Tb/scene.splinecode"
                                    style={{ width: 500, height: 500 }}
                                />
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
                <Footer />
            </Box>
        </>

    )
}

export default Home

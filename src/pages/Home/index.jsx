import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box, Typography } from '@mui/material'

const gradient = 'linear-gradient(to right, #ff0000, #00ff00)';

const Home = () => {
    return (
        <div>
            <Header />
            <Box>

                <Typography variant="h2" style={{ backgroundImage: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Hello, World!
                </Typography>
            </Box>
            <Footer />
        </div>
    )
}

export default Home

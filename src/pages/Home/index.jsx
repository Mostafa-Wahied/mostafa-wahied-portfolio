import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box } from '@mui/material'
import Hero from '../../components/Hero';
import About from '../../components/About';
import { Element, scroller } from 'react-scroll'
import Projects from '../../components/Projects';
import "./index.css"
import AboutCOPY from '../../components/About/AboutCOPY';

const Home = () => {

    return (
        <>
            <Box sx={{
                backgroundColor: '#F2F7FB',
                minHeight: '100vh',
                fontFamily: 'Montserrat',
            }}>
                <Header />
                <Hero />
                <Element name="about">
                    <About />
                </Element>
                <Projects />
                <Element name="aboutCOPY">
                    <AboutCOPY />
                </Element>
                <Hero />
                <Footer />
            </Box>
        </>

    )
}

export default Home

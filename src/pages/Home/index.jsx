import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box } from '@mui/material'
import Hero from '../../components/Hero';
import About from '../../components/About';
import { Element, scroller } from 'react-scroll'
import Projects from '../../components/Projects';

const Home = () => {
    const [scrolledToAbout, setScrolledToAbout] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector('#about')
            if (aboutSection) {
                const isScrolledToAbout = window.scrollY >= aboutSection.offsetTop - window.innerHeight / 2
                setScrolledToAbout(isScrolledToAbout)
                console.log(isScrolledToAbout ? 'scrolled to about section' : 'scrolled back up')
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <Box sx={{
                backgroundColor: '#F2F7FB', minHeight: '100vh',
                fontFamily: 'Montserrat',
            }}>
                <Header />
                <Hero />
                <Element name="about">
                    <About scrolledToAbout={scrolledToAbout} />
                </Element>
                <Projects />
                <Footer />
            </Box>
        </>

    )
}

export default Home

import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import "./index.css"
import ScrollDown from '../ScrollDown';


const AboutCOPY = () => {
    const [scrolledToAbout, setScrolledToAbout] = useState(false)
    const [scale, setScale] = useState(0.8)
    const [borderRadius, setBorderRadius] = useState(50)

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector('#aboutCOPY')
            if (aboutSection) {
                const scrollPosition = window.scrollY
                // this controls how far down the page the user has to scroll before the about section is expanded
                const aboutPosition = aboutSection.offsetTop - window.innerHeight
                const maxScale = 1
                if (scrollPosition >= aboutPosition) {
                    const distance = scrollPosition - aboutPosition
                    const maxDistance = window.innerHeight * 3
                    const newScale = Math.max(0.8, Math.min(distance / maxDistance + 0.8, maxScale))
                    setScale(newScale)
                    setBorderRadius(Math.round(50 - 50 * (newScale - 0.8) / (maxScale - 0.8)))
                    setScrolledToAbout(true)
                } else {
                    setScale(0.8)
                    setBorderRadius(50)
                    setScrolledToAbout(false)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    console.log(`${borderRadius}px`)
    return (
        <Box
            id="aboutCOPY"
            sx={{
                transform: `scale(${scale})`,
                backgroundColor: '#000000',
                transition: 'all 0.5s ease-out',
                margin: '0 auto',
                padding: { xs: "10px", md: '50px' },
                borderRadius: `${borderRadius}px`,
                fontFamily: 'Montserrat',
                marginTop: 0,
                height: { xs: '100vh', md: '100vh' },
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            />

            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <Typography sx={{ color: "white" }}>AboutCOPY</Typography>

                <Box sx={{ display: { xs: "none", sm: 'flex' }, justifyContent: 'center', }} >
                    <ScrollDown />
                </Box>
            </Box>
        </Box>

    )
}

export default AboutCOPY;

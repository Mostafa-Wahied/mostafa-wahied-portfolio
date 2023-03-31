import { Button } from '@mui/material';
import React, { useState } from 'react'

const gradient2 = 'linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)';

function HeroButton({ label, id, bg, rightBorderWidth }) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);


    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        const yOffset = -100; // adjust this value to change the scroll position
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
            top: y, behavior: 'smooth'
        });
    }
    return (
        <>
            <Button
                id='background'
                onClick={() => handleNavClick(id)}
                sx={{
                    fontSize: "1.1rem",
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    borderTopWidth: '2px',
                    borderRightWidth: rightBorderWidth,
                    borderBottomWidth: '2px',
                    borderLeftWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: '#12c2e9',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0px',
                    padding: { xs: "0px 10px", sm: "0px 15px", lg: '0px 40px' },
                    color: '#12c2e9',
                    opacity: 0.9,
                    transition: 'all 0.3s ease',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: hovered ? '100%' : '0%',
                        height: '100%',
                        background: bg,
                        zIndex: -1,
                        transition: 'all 0.3s ease',
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        zIndex: 2,
                        transition: 'all 0.3s ease',
                    },
                    '&:hover::before': {
                        width: '100%',
                    },
                    '&:hover::after': {
                        opacity: 0,
                        color: '#000',
                    },
                    '&:hover': {
                        color: '#fff',
                    },
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {label}
            </Button>
        </>
    )
}

export default HeroButton

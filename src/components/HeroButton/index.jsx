import { Button } from '@mui/material';
import React, { useState } from 'react'

function HeroButton({ label, id, bg, rightBorderWidth }) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);


    const handleNavClick = (id) => {
        console.log("Clicked")
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return (
        <>
            <Button
                id='background'
                onClick={() => handleNavClick(id)}
                sx={{
                    fontSize: "1rem",
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    borderTopWidth: '2px',
                    borderRightWidth: rightBorderWidth,
                    borderBottomWidth: '2px',
                    borderLeftWidth: '2px',
                    borderStyle: 'solid',
                    borderColor: '#121FCF',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0px',
                    padding: { xs: "2px 15px", sm: "3px 15px", lg: '3px 35px' },
                    color: '#121FCF',
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
                        color: '#000', // add this line to change the color of the text
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

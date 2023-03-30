import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const handleScrollClick = () => {
    const element = document.getElementById("about");
    const yOffset = -100; // adjust this value to change the scroll position
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

function ScrollDown() {
    return (
        <Box className='home__scroll'
            sx={{
                position: 'absolute',
                bottom: '0',
            }}
        >
            <Button className='home__scroll-button--flex'
                onClick={() => handleScrollClick()}
                sx={{
                    '&:hover': { backgroundColor: 'transparent' },
                }}
            >
                <div className='svg-container'>
                    <svg width="32px" height="32px" version="1.1" viewBox="0 0 700 700"
                        xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path class="wheel"
                                d="m350.18 560c-102.97 0-186.79-83.82-186.79-186.79v-186.43c0-102.96 83.82-186.79 186.79-186.79 102.97 0 186.79 83.82 186.79 186.79v186.79c0 102.97-83.82 186.79-186.79 186.79zm0-528.93c-85.984 0-155.71 69.73-155.71 155.71v186.79c0 85.625 69.73 155.71 155.71 155.71 85.988 0 155.71-69.73 155.71-155.71l0.003907-186.79c-0.36328-85.984-70.094-155.71-155.72-155.71z" />
                            <path class="mouse"
                                d="m350.18 435.71c-8.6719 0-15.535-6.8633-15.535-15.535v-62.141c0-8.6719 6.8633-15.535 15.535-15.535 8.6719 0 15.535 6.8633 15.535 15.535v62.141c0 8.6719-6.8633 15.535-15.535 15.535z" />
                        </g>
                    </svg>
                </div>
                <span className='home__scroll-name'>
                    <Typography
                        variant='overline'
                        sx={{
                            fontSize: '0.8rem',
                            fontFamily: 'Montserrat',
                            fontWeight: '400',
                        }}
                    >
                        Scroll Down
                        <ArrowDownwardIcon sx={{
                            fontSize: '0.9rem',
                            marginLeft: '0.4rem',
                            marginBottom: '0.2rem',
                        }} />
                    </Typography>
                </span>
            </Button>
        </Box>
    )
}

export default ScrollDown

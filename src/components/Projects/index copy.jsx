import { Box, Container } from '@mui/material'
import React from 'react'

const gradient = 'linear-gradient(to right, #121FCF 0%, #CF1512 100%)';
const gradient2 = 'linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)';


const Projects = () => {
    return (
        <Box
            sx={{
                height: { xs: '100vh', md: '100vh' },
                position: 'relative',
                isolation: 'isolate',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    //   bottom: 0,
                    left: 0,
                    width: '100vw',
                    height: { xs: '80vh', md: '80vh' },
                    backgroundColor: 'black',
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%)',
                    zIndex: -1,
                },
            }}
        >
            {/* your section content */}
            <Container sx={{
                paddingX: { sx: 0, md: 24 },
                fontFamily: 'Montserrat',
                height: { xs: '80vh', md: '80vh' },
                position: 'relative',
                isolation: 'isolate',

                "&:before": {
                    content: '""',
                    backgroundImage: gradient2,
                    position: 'absolute',
                    zIndex: -1,
                    inset: 0,
                    transform: 'skewY(-5deg)',
                }
            }}
                maxWidth
            >

            </Container>
        </Box>
    )
}

export default Projects

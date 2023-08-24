import React from 'react'
import { Box, Button, Container, Typography, Card, CardContent, CardMedia, CardActions, CardActionArea, Grid, Tooltip, Chip, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion'
import { fadeIn, textVariant, staggerContainer } from '../../utils/motion.js'
import { projects } from '../../constants'
import { codesandboxIcon } from "../..//assets"

const gradient = 'linear-gradient(to right, #121FCF 0%, #CF1512 100%)';
const gradient2 = 'linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)';

const ProjectCard = ({
    index,
    name,
    description,
    image,
    technologies,
    github,
    live,
    codesandbox
}) => {

    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Card
                sx={{
                    '&:hover .MuiCardMedia-root': {
                        transform: 'scale(1.1)',
                    },
                }}
            >
                <CardMedia component="img" image={image} alt='project_image'
                    sx={{
                        padding: 1,
                        transition: 'transform 0.3s',
                    }}
                />
                <CardContent
                    sx={{
                        borderTop: '0.5px solid', borderColor: 'rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    {/* <Typography variant="subtitle1" color="text.primary" sx={{mt: 1.2, }}>
                        Technologies Used:
                    </Typography> */}
                    {/* Display technologies used here */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                        {technologies.map((tech) => (
                            <Chip label={tech} sx={{ m: 0.5 }} />
                        ))}
                    </Box>
                </CardContent>
                <CardActions>
                    <Box sx={{ flexGrow: 1 }} />
                    {github !== "" &&
                        <Tooltip title="GitHub">
                            <IconButton onClick={() => window.open(github, '_blank')}>
                                <GitHubIcon sx={{ color: 'black' }} />
                            </IconButton>
                        </Tooltip>
                    }
                    {live !== "" &&
                        <Tooltip title="Live Demo">
                            <IconButton onClick={() => window.open(live, '_blank')}>

                                <LaunchIcon sx={{ color: 'black' }} />
                                {/* <ArrowOutwardIcon sx={{ color: 'black' }} /> */}
                            </IconButton>
                        </Tooltip>
                    }
                    {codesandbox !== "" &&
                        <Tooltip title="CodeSandBox">
                            <IconButton onClick={() => window.open(codesandbox, '_blank')}>
                                <img src={codesandboxIcon} alt="codesandbox" width={22} height={22} />
                            </IconButton>
                        </Tooltip>
                    }
                </CardActions>
            </Card>
        </motion.div >
    )
}

const Projects = () => {

    return (
        <>
            <Container id="projects"
                sx={{
                    paddingX: { sx: 0, md: 40 },
                    marginY: { xs: 5, md: 10 },
                    fontFamily: 'Montserrat',
                    // height: { md: '100vh' },
                }}
                maxWidth
            >
                <motion.section
                    variants={staggerContainer()}
                    initial='hidden'
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <motion.div variants={textVariant(0.2)}>
                        <Typography
                            variant={{ xs: 'h3', md: 'h2' }}
                            sx={{
                                fontSize: { xs: '2rem', md: '3rem' },
                                fontFamily: "Montserrat",
                                fontWeight: '600',
                                color: 'grey.800',
                                textTransform: 'uppercase',
                                // backgroundImage: gradient2,
                                // WebkitBackgroundClip: 'text',
                                // WebkitTextFillColor: 'transparent',
                                paddingY: { xs: 0, md: 2 },
                            }}
                        >
                            Projects
                        </Typography>
                    </motion.div>

                    <Box sx={{
                        paddingTop: { xs: 2, md: 2 },
                    }}>
                        <Grid container spacing={3}>
                            {projects.map((project, index) => {
                                return (
                                    <Grid item xs={12} md={6}>
                                        {/* 
                                        <ProjectCard
                                            key={index}
                                            index={index}
                                            name={project.name}
                                            description={project.description}
                                            image={project.image}
                                            github={project.github}
                                            live={project.live}
                                        /> */}
                                        <ProjectCard key={`project-${index}`} index={index} {...project} />
                                    </Grid>
                                )
                            })
                            }
                        </Grid>
                    </Box>

                </motion.section>
            </Container >
        </>
    )
}

export default Projects

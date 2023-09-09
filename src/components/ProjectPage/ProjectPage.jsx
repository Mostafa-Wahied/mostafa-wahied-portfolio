// ProjectPage.jsx

import { useParams } from "react-router-dom";
import { projectPages } from "../../constants/projectPages.js";
import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";
import { Box, Card, CardContent, CardMedia, Chip, Container, Grid, IconButton, Slider, Typography } from "@mui/material";
import { useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectPage = () => {

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    useEffect(() => {
        try {
            window.scrollTo({ top: 0, behavior: 'instant' });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, []);

    const { name } = useParams();
    console.log(projectPages[name]);
    const project = projectPages.find(project => project.name === name);
    console.log(project === undefined);

    if (project !== undefined) {
        return (
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "100vh",
                        backgroundColor: "#F2F7FB",
                        fontFamily: "Montserrat",
                        // padding: "2rem",
                    }}
                >
                    <Header />
                    <Container id="projects"
                        sx={{
                            paddingX: { sx: 0, md: 40 },
                            marginY: { xs: 5, md: 10 },
                            fontFamily: 'Montserrat',
                            pt: "4rem",
                            // height: { md: '100vh' },
                        }}
                        maxWidth
                    >

                        <div className="project-page" style={{ flex: "1 0 auto" }}>
                            {/* Hero section */}
                            {/* Title */}
                            {/* make the title  h2 and bold */}
                            <Typography variant="h2" sx={{
                                fontWeight: "400", fontFamily: "Roboto",
                                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                                px: { xs: "1rem", sm: "1rem", md: "1rem", lg: "15rem" },
                            }} gutterBottom>
                                {project.name}
                            </Typography>
                            {/* Links */}
                            {project.live &&
                                <Box sx={{ px: { xs: "1rem", sm: "1rem", md: "1rem", lg: "15rem" }, }}>
                                    <IconButton onClick={() => window.open(project.live, '_blank')}
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                opacity: 0.8,
                                            }
                                        }}
                                    >
                                        Visit the live site
                                        <LaunchIcon />
                                    </IconButton>
                                </Box>
                            }
                            {project.github &&
                                <Box sx={{ px: { xs: "1rem", sm: "1rem", md: "1rem", lg: "15rem" }, }}>
                                    <IconButton onClick={() => window.open(project.github, '_blank')}
                                        sx={{
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                opacity: 0.8,
                                            }
                                        }}
                                    >
                                        GitHub
                                        <LaunchIcon />
                                    </IconButton>
                                </Box>
                            }

                            {/* Description */}
                            <Typography
                                sx={{
                                    fontSize: { xs: "1.05rem", md: "1.5rem" },
                                    mt: { xs: "1.5rem", sm: "1.5rem", md: "2rem" },
                                    mb: { xs: "2rem", sm: "2.5rem", md: "5rem" },
                                    px: { xs: "1rem", sm: "1rem", md: "1rem", lg: "15rem" },
                                }}
                                variant="body1" gutterBottom>
                                {project.description}
                            </Typography>
                            {/* Hero Image */}
                            {/* <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginTop: "2rem",
                                    backgroundColor: "#fefefe",
                                    py: { xs: "1.5rem", sm: "2rem", md: "5rem" },
                                }}
                            >
                                <img
                                    src={project.mainImage}
                                    alt={project.name}
                                    style={{
                                        width: "80%", height: "auto",
                                        border: '12px solid #444', // Add a border to create a frame-like appearance
                                        borderRadius: '18px', // Adjust the border radius as needed
                                        maxWidth: '100%', // Ensure the image fits within the container
                                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                                    }}
                                /> */}
                            {/* Technologies */}
                            {/* <Grid container spacing={2} sx={{ marginTop: "2rem", justifyContent: "center" }}>
                                    {project.technologies.map((tech) => (
                                        <Grid item key={tech}>
                                            <Chip label={tech} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box> */}


                            {/* Main Image */}
                            {project.mainImage &&
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                        // mt: "5rem
                                    }}
                                >
                                    <img src={project.mainImage} alt={project.name} style={{
                                        width: "90%", height: "auto",
                                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                                    }} />
                                </Box>
                            }
                            {/* Challenge */}
                            <Typography variant="h4" gutterBottom sx={{
                                mt: { xs: "2rem", sm: "2rem", md: "5rem" },
                                px: { xs: "1rem", sm: "1rem", md: "1rem", lg: "15rem" },
                            }}>
                                Challenge
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: "1.05rem", md: "1.5rem" },
                                    mt: { xs: "1.5rem", sm: "1.5rem", md: "2rem" },
                                    mb: { xs: "5rem", sm: "2.5rem", md: "5rem" },
                                    px: { xs: "1rem", sm: "1rem", md: "1rem", lg: "15rem" },
                                }}
                                variant="body1" gutterBottom>
                                {project.challenge}
                            </Typography>
                            {/* Sketches
                            <Grid item xs={12} sx={{ mb: "1rem", px: { xs: "1rem", sm: "1rem", md: "1rem", lg: "15rem" } }}>
                                <img
                                    src={project.sketchImages[0]}
                                    style={{
                                        width: '100%',
                                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                                    }}
                                />
                            </Grid>

                            <Grid container spacing={2} sx={{ px: { xs: "1rem", sm: "1rem", md: "1rem", lg: "15rem" } }}>
                                <Grid item xs={6}>
                                    <img
                                        src={project.sketchImages[1]}
                                        style={{
                                            width: '100%',
                                            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <img
                                        src={project.sketchImages[2]}
                                        style={{
                                            width: '100%',
                                            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                                        }}
                                    />
                                </Grid>
                            </Grid> */}

                            {/* gif image */}
                            {project.gifImage &&
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mt: "5rem",
                                        mb: "7rem",
                                    }}
                                >
                                    <img src={project.gifImage} alt={project.name} style={{
                                        width: "90%", height: "auto",
                                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                                    }} />
                                </Box>
                            }

                            {/* Video */}
                            {!project.gifImage && project.video &&
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                        // mt: "5rem
                                    }}
                                >
                                    <video src={project.video} autoPlay loop muted
                                        style={{
                                            width: "90%", height: "auto",
                                            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                                        }} />
                                </Box>
                            }



                            {/* Solution */}
                            <Typography variant="h4" gutterBottom sx={{
                                mt: { xs: "2rem", sm: "2rem", md: "5rem" },
                                px: { xs: "1rem", sm: "1rem", md: "1rem", lg: "15rem" },
                            }}>
                                Solution
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: "1.05rem", md: "1.5rem" },
                                    mt: { xs: "1.5rem", sm: "1.5rem", md: "2rem" },
                                    mb: { xs: "5rem", sm: "2.5rem", md: "5rem" },
                                    px: { xs: "1rem", sm: "1rem", md: "1rem", lg: "15rem" },
                                }}
                                variant="body1" gutterBottom>
                                {project.solution}
                            </Typography>
                            {/* Screenshots */}
                            {project.screenshots.length > 0 &&
                                <Grid container spacing={2} sx={{
                                    my: "2rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    // mx: 'auto',
                                    px: { xs: "1rem", sm: "1rem", md: "1rem", lg: "3rem" },
                                }}>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            my: "0rem",
                                            backgroundColor: "#fefefe",
                                            p: { xs: "1.5rem", sm: "2rem", md: "5rem" },
                                        }}
                                    >
                                        <Grid item xs={12} sx={{ mb: "1rem" }}>
                                            <img
                                                src={project.screenshots[0]}
                                                style={{
                                                    width: "100%", height: "auto",
                                                    border: '12px solid #444', // Add a border to create a frame-like appearance
                                                    borderRadius: '18px', // Adjust the border radius as needed
                                                    maxWidth: '100%', // Ensure the image fits within the container
                                                    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                                                }}
                                            />
                                        </Grid>
                                    </Box>

                                    <Grid container spacing={4}>
                                        <Grid item xs={6}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginTop: "2rem",
                                                    backgroundColor: "#fefefe",
                                                    px: { xs: "1.5rem", sm: "2rem", md: "5rem" },
                                                    py: { xs: "8rem" }
                                                }}
                                            >
                                                <img
                                                    src={project.screenshots[1]}
                                                    style={{
                                                        width: "100%", height: "auto",
                                                        border: '12px solid #444', // Add a border to create a frame-like appearance
                                                        borderRadius: '18px', // Adjust the border radius as needed
                                                        maxWidth: '100%', // Ensure the image fits within the container
                                                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                                                    }}
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginTop: "2rem",
                                                    backgroundColor: "#fefefe",
                                                    px: { xs: "1.5rem", sm: "2rem", md: "5rem" },
                                                    py: { xs: "8rem" }
                                                }}
                                            >
                                                <img
                                                    src={project.screenshots[2]}
                                                    style={{
                                                        width: "100%", height: "auto",
                                                        border: '12px solid #444', // Add a border to create a frame-like appearance
                                                        borderRadius: '18px', // Adjust the border radius as needed
                                                        maxWidth: '100%', // Ensure the image fits within the container
                                                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                                                    }}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            }

                            {/* Screenshots 2 */}
                            {/* {project.screenshots.map((screenshot) => (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginTop: "2rem",
                                            backgroundColor: "#fefefe",
                                            p: { xs: "1.5rem", sm: "2rem", md: "5rem" },
                                        }}
                                    >

                                        <Grid item xs={12} key={screenshot}>
                                            <img
                                                src={screenshot}
                                                alt={screenshot}
                                                style={{
                                                    width: "100%", height: "auto",
                                                    border: '12px solid #444', // Add a border to create a frame-like appearance
                                                    borderRadius: '18px', // Adjust the border radius as needed
                                                    maxWidth: '100%', // Ensure the image fits within the container
                                                    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                                                }}
                                            />
                                        </Grid>
                                    </Box>
                                ))} */}
                            {/* </Grid> */}
                            {/* Impact */}
                            {project.impact &&
                                <>
                                    <Typography variant="h4" gutterBottom sx={{
                                        mt: { xs: "2rem", sm: "2rem", md: "5rem" },
                                        px: { xs: "1rem", sm: "1rem", md: "1rem", lg: "15rem" },
                                    }}>
                                        Impact
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "1.05rem", md: "1.5rem" },
                                            mt: { xs: "1.5rem", sm: "1.5rem", md: "2rem" },
                                            mb: { xs: "5rem", sm: "2.5rem", md: "5rem" },
                                            px: { xs: "1rem", sm: "1rem", md: "1rem", lg: "15rem" },
                                        }}
                                        variant="body1" gutterBottom>
                                        {project.impact}
                                    </Typography>
                                </>
                            }
                            {/* Links */}



                        </div>
                    </Container>
                    <Footer style={{ flexShrink: 0 }} />
                </Box>
            </motion.div >

        );
    } else {
        // render default content or show an error message
        return (
            <div className="project-page">
                <h1>Project not found</h1>
            </div>
        );
    }

}

export default ProjectPage;


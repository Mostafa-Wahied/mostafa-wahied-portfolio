import React, { useState, useRef } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion'
import { staggerContainer, textVariant, fadeIn } from '../../utils/motion.js'
import emailjs from "@emailjs/browser";
import wavingHand from '../../assets//waving-hand.png';

const gradient = 'linear-gradient(to right, #121FCF 0%, #CF1512 100%)';
const gradient2 = 'linear-gradient(45deg, #12c2e9, #c471ed, #f64f59)';

const Contact = () => {
    const formRef = useRef();

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        error: false,
    });

    // use a change handler to update the state object
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    // use a submit handler to validate and send the form data
    const handleSubmit = (event) => {
        event.preventDefault();
        // validate the form data
        const { name, email, message } = form;
        if (!name || !email || !message) {
            setForm((prevForm) => ({
                ...prevForm,
                error: true,
            }));
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                error: false,
            }));
            // send the form data using emailjs
            emailjs
                .send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                        from_name: form.name,
                        to_name: 'Mostafa Wahied',
                        from_email: form.email,
                        to_email: 'mostafawahied@gmail.com',
                        message: form.message,
                    },
                    // formRef.current,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        // do something on success
                        alert('Message sent successfully!');
                        setForm({
                            name: '',
                            email: '',
                            message: '',
                            error: false,
                        },
                            (error) => {
                                console.log(error.text);
                                // do something on error
                                alert('Message failed to send!');
                            }
                        );
                    })
        };
    };

    return (
        <>
            <Container id="contact"
                sx={{
                    paddingX: { xs: 0, md: 26 },
                    paddingY: { xs: 5, md: 15 },
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
                    <motion.div
                        variants={textVariant()}>
                        <Typography variant='h3'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            Say Hi
                            <Box component="span"
                                sx={{
                                    position: 'relative',
                                    top: -6,
                                    left: 7,
                                }}
                            >
                                <img
                                    src={wavingHand}
                                    alt="portfolio-img"
                                    border="0"
                                    width={40}
                                    height={40}
                                />
                            </Box>
                        </Typography>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", "spring", 0.75, 0.75)}>
                        {/* FORM */}
                        <Box
                            component="form"
                            ref={formRef}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                maxWidth: 600,
                                margin: '0 auto',
                                padding: 4,
                            }}
                            onSubmit={handleSubmit}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                label="Your name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                error={form.error && !form.name}
                                helperText={form.error && !form.name ? 'Please enter your name' : ''}
                                sx={{ width: '100%', marginBottom: 2 }}
                            />
                            <TextField
                                label="Your email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                error={form.error && !form.email}
                                helperText={form.error && !form.email ? 'Please enter your email' : ''}
                                sx={{ width: '100%', marginBottom: 2 }}
                            />
                            <TextField
                                label="Let me know how can I help"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                error={form.error && !form.message}
                                helperText={form.error && !form.message ? 'Please enter your message' : ''}
                                multiline
                                rows={4}
                                sx={{ width: '100%', marginBottom: 2 }}
                            />
                            <Button type="submit" variant="contained" color="primary">
                                Submit
                            </Button>
                        </Box>
                    </motion.div>

                </motion.section>
            </Container >
        </>

    )
}

export default Contact;

import { Container, Typography, Box, Grid, Paper, Link, Stack, Avatar } from '@mui/material';
import Navbar from '../component/Navbar';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import BugReportIcon from '@mui/icons-material/BugReport';

const About = () => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
            <Navbar />
            <Container maxWidth="md" sx={{ py: 8 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>
                        About Rivet
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
                        A modern, professional invoice generator designed for freelancers and small businesses who value speed and aesthetics.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper sx={{ p: 4, height: '100%', borderRadius: 4 }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                The Mission
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph>
                                Rivet was built to bridge the gap between "clunky business software" and "modern web aesthetics." We believe that even a billing document should look elite.
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                This is a mobile-first, production-grade tool that ensures you get paid in style.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper sx={{ p: 4, height: '100%', borderRadius: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                                Get in Touch
                            </Typography>
                            <Stack spacing={3}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)' }}>
                                        <EmailIcon />
                                    </Avatar>
                                    <Box>
                                        <Typography variant="body2" sx={{ opacity: 0.8 }}>Email Me</Typography>
                                        <Link href="mailto:thecornfrog@gmail.com" color="inherit" sx={{ fontWeight: 600, textDecoration: 'none' }}>
                                            thecornfrog@gmail.com
                                        </Link>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)' }}>
                                        <GitHubIcon />
                                    </Avatar>
                                    <Box>
                                        <Typography variant="body2" sx={{ opacity: 0.8 }}>Source Code</Typography>
                                        <Link href="https://github.com/cornfrog" target="_blank" color="inherit" sx={{ fontWeight: 600, textDecoration: 'none' }}>
                                            github.com/cornfrog
                                        </Link>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)' }}>
                                        <BugReportIcon />
                                    </Avatar>
                                    <Box>
                                        <Typography variant="body2" sx={{ opacity: 0.8 }}>Found a Bug?</Typography>
                                        <Link href="mailto:thecornfrog@gmail.com" target="_blank" color="inherit" sx={{ fontWeight: 600, textDecoration: 'none' }}>
                                            Email me to report an issue
                                        </Link>
                                    </Box>
                                </Box>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
};

export default About;

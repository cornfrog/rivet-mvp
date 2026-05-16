import { useState } from 'react';
import { Box, Typography, IconButton, Container, Collapse, Stack, Button, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Link as RouterLink, useLocation } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const theme = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { label: 'Invoice Generator', path: '/' },
        { label: 'About Rivet', path: '/about' },
    ];

    return (
        <Box 
            component="nav" 
            sx={{ 
                position: 'sticky', 
                top: 0, 
                zIndex: 1100,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                borderBottom: isOpen ? 'none' : '1px solid',
                borderColor: 'divider',
                transition: 'background-color 0.3s ease',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: { xs: 64, md: 80 } }}>
                    <Box 
                        component={RouterLink} 
                        to="/" 
                        onClick={closeMenu}
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            textDecoration: 'none', 
                            color: 'text.primary', 
                            gap: 1.5 
                        }}
                    >
                        <Box sx={{ 
                            width: 40, 
                            height: 40, 
                            bgcolor: 'primary.main', 
                            borderRadius: 2, 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(15, 23, 42, 0.2)'
                        }}>
                            <ReceiptIcon sx={{ color: 'white', fontSize: 24 }} />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
                            Rivet
                        </Typography>
                    </Box>

                    <IconButton 
                        onClick={toggleMenu} 
                        sx={{ 
                            width: 48,
                            height: 48,
                            borderRadius: 3, 
                            bgcolor: isOpen ? 'primary.main' : 'grey.50',
                            color: isOpen ? 'white' : 'text.primary',
                            '&:hover': { 
                                bgcolor: isOpen ? 'primary.dark' : 'grey.200',
                                transform: 'scale(1.05)'
                            },
                            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    >
                        {isOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </Box>
            </Container>

            <Collapse in={isOpen} timeout={{ enter: 400, exit: 300 }} unmountOnExit>
                <Box 
                    sx={{ 
                        borderBottom: '1px solid', 
                        borderColor: 'divider', 
                        bgcolor: 'background.paper',
                        pb: 6,
                        pt: 2,
                        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
                    }}
                >
                    <Container maxWidth="lg">
                        <Stack spacing={1}>
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Button
                                        key={link.path}
                                        component={RouterLink}
                                        to={link.path}
                                        onClick={closeMenu}
                                        fullWidth
                                        sx={{
                                            justifyContent: 'space-between',
                                            py: 2.5,
                                            px: 4,
                                            fontSize: '1.25rem',
                                            fontWeight: isActive ? 800 : 600,
                                            borderRadius: 4,
                                            color: isActive ? 'primary.main' : 'text.primary',
                                            bgcolor: isActive ? 'grey.50' : 'transparent',
                                            '&:hover': {
                                                bgcolor: 'grey.50',
                                                color: 'primary.main',
                                                paddingLeft: 6,
                                            },
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&::after': {
                                                content: isActive ? '"→"' : '""',
                                                fontSize: '1.5rem',
                                                opacity: isActive ? 1 : 0,
                                                transition: 'opacity 0.2s ease'
                                            }
                                        }}
                                    >
                                        {link.label}
                                    </Button>
                                );
                            })}
                        </Stack>

                        <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid', borderColor: 'divider', textAlign: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                                Need help? <Button variant="text" component={RouterLink} to="/about" onClick={closeMenu} sx={{ fontWeight: 700 }}>Contact Support</Button>
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Collapse>
        </Box>
    );
};

export default Navbar;

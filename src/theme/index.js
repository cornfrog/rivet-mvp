import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0f172a', // Slate 900
            light: '#334155',
            dark: '#020617',
            contrastText: '#fff',
        },
        secondary: {
            main: '#3b82f6', // blue 500
            light: '#60a5fa',
            dark: '#2563eb',
            contrastText: '#fff',
        },
        background: {
            default: '#f1f5f9', // Slate 100
            paper: '#ffffff',
        },
        text: {
            primary: '#0f172a',
            secondary: '#475569',
        },
        error: {
            main: '#ef4444',
            lighter: '#fef2f2',
        },
        divider: '#e2e8f0',
    },
    typography: {
        fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
        h3: {
            fontWeight: 800,
            letterSpacing: '-0.04em',
        },
        h4: {
            fontWeight: 800,
            letterSpacing: '-0.03em',
        },
        h5: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
        },
        h6: {
            fontWeight: 700,
            letterSpacing: '-0.01em',
        },
        subtitle1: {
            fontWeight: 600,
        },
        body1: {
            lineHeight: 1.6,
        },
    },
    shape: {
        borderRadius: 16,
    },
    shadows: [
        'none',
        '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        // ... (rest are defaults or could be further customized)
        ...Array(20).fill('none')
    ],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 700,
                    borderRadius: 12,
                    padding: '8px 20px',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-1px)',
                    },
                },
                containedPrimary: {
                    backgroundColor: '#0f172a',
                    '&:hover': {
                        backgroundColor: '#1e293b',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                fullWidth: true,
            },
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 12,
                        backgroundColor: '#f8fafc',
                        '& fieldset': {
                            borderColor: '#e2e8f0',
                        },
                        '&:hover fieldset': {
                            borderColor: '#cbd5e1',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#3b82f6',
                        },
                    },
                },
            },
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    '&:before': { display: 'none' },
                    marginBottom: 16,
                    border: '1px solid #e2e8f0',
                    boxShadow: 'none',
                    '&.Mui-expanded': {
                        margin: '0 0 16px 0',
                        borderColor: '#cbd5e1',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(8px)',
                    color: '#0f172a',
                },
            },
        },
    },
});

export default theme;

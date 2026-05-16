import { CircularProgress, Typography, Backdrop } from '@mui/material';

const LoadingOverlay = ({ open, message = 'Generating PDF...' }) => {
    return (
        <Backdrop
            sx={{
                color: '#fff',
                zIndex: (theme) => theme.zIndex.drawer + 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
            open={open}
        >
            <CircularProgress color="inherit" />
            <Typography variant="h6">{message}</Typography>
        </Backdrop>
    );
};

export default LoadingOverlay;

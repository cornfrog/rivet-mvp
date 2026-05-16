import { Box, Typography, Button } from '@mui/material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

const EmptyState = ({ title, message, onAction, actionLabel }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 4,
                textAlign: 'center',
                backgroundColor: 'grey.50',
                borderRadius: 2,
                border: '2px dashed',
                borderColor: 'grey.300',
            }}
        >
            <ReceiptLongIcon sx={{ fontSize: 60, color: 'grey.400', mb: 2 }} />
            <Typography variant="h6" gutterBottom color="text.primary">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {message}
            </Typography>
            {onAction && (
                <Button variant="outlined" onClick={onAction}>
                    {actionLabel}
                </Button>
            )}
        </Box>
    );
};

export default EmptyState;

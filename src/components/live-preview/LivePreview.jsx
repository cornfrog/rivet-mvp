import { Box, Typography, Card, CardContent, Divider, Stack } from '@mui/material';

const LivePreview = ({ invoice, total }) => {
    return (
        <Card sx={{ boxShadow: 3, borderRadius: 3, overflow: 'hidden' }}>
            <Box sx={{ backgroundColor: 'primary.main', py: 1.5, px: 3 }}>
                <Typography variant="subtitle2" sx={{ color: 'primary.contrastText', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}>
                    Quick Preview
                </Typography>
            </Box>
            <CardContent sx={{ p: 3 }}>
                <Stack spacing={3}>
                    <Box>
                        <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 'bold', display: 'block', mb: 0.5 }}>
                            From
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                            {invoice.company.name.value || 'Your Company'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {invoice.company.email.value}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 'bold', display: 'block', mb: 0.5 }}>
                            Bill To
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                            {invoice.client.name.value || 'Client Name'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {invoice.client.email.value}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                        <Box>
                            <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 'bold', display: 'block' }}>
                                Issue Date
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                {invoice.dates.issueDate.value}
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 'bold', display: 'block' }}>
                                Due Date
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'error.main' }}>
                                {invoice.dates.dueDate.value}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ p: 2.5, backgroundColor: 'grey.50', borderRadius: 2, border: '1px solid', borderColor: 'grey.200' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography variant="body2" color="text.secondary">Items ({invoice.items.length})</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>${total}</Typography>
                        </Box>
                        <Divider sx={{ my: 1.5 }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Total Due</Typography>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                ${total}
                            </Typography>
                        </Box>
                    </Box>
                </Stack>

                <Typography variant="caption" sx={{ display: 'block', mt: 3, textAlign: 'center', color: 'text.secondary', fontStyle: 'italic' }}>
                    Generated on {new Date().toLocaleDateString()}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default LivePreview;

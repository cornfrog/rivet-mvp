import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider } from '@mui/material';

const PDFTemplate = ({ invoice, total, templateRef }) => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: '-9999px',
                width: '0',
                height: '0',
                overflow: 'hidden',
                zIndex: -1,
            }}
        >
            <Box
                ref={templateRef}
                sx={{
                    width: '794px', // A4 width at 96 DPI
                    minHeight: '1123px', // A4 height at 96 DPI
                    padding: '60px',
                    backgroundColor: 'white',
                    color: 'black',
                    fontFamily: 'Roboto, Arial, sans-serif',
                }}
            >
                {/* Header: Company Info */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 8 }}>
                    <Box>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1, letterSpacing: -1 }}>
                            INVOICE
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            #INV-{new Date().getFullYear()}-{Math.floor(Math.random() * 1000).toString().padStart(3, '0')}
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                            {invoice.company.name.value || 'Your Company'}
                        </Typography>
                        <Typography variant="body2">{invoice.company.address.value}</Typography>
                        <Typography variant="body2">{invoice.company.email.value}</Typography>
                        <Typography variant="body2">{invoice.company.phone.value}</Typography>
                    </Box>
                </Box>

                {/* Billing & Date Info */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 8 }}>
                    <Box>
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', mb: 1.5, fontWeight: 'bold' }}>
                            BILL TO:
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {invoice.client.name.value || 'Client Name'}
                        </Typography>
                        <Typography variant="body2" sx={{ maxWidth: '250px' }}>{invoice.client.address.value}</Typography>
                        <Typography variant="body2">{invoice.client.email.value}</Typography>
                        <Typography variant="body2">{invoice.client.phone.value}</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', fontWeight: 'bold' }}>
                                DATE OF ISSUE:
                            </Typography>
                            <Typography variant="body1">{invoice.dates.issueDate.value}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', fontWeight: 'bold' }}>
                                DUE DATE:
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>{invoice.dates.dueDate.value}</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Items Table */}
                <TableContainer component={Box} sx={{ mb: 6 }}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                            <TableRow sx={{ borderBottom: '2px solid', borderColor: 'primary.main' }}>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', pl: 0 }}>Description</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Rate</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>Hours/Qty</TableCell>
                                <TableCell align="right" sx={{ fontWeight: 'bold', fontSize: '1rem', pr: 0 }}>Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {invoice.items.map((item) => (
                                <TableRow key={item.id} sx={{ '&:last-child td': { border: 0 } }}>
                                    <TableCell sx={{ pl: 0, py: 2 }}>{item.description || '-'}</TableCell>
                                    <TableCell align="right">${item.rate || '0.00'}</TableCell>
                                    <TableCell align="right">{item.hours || '0'}</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold', pr: 0 }}>${item.amount || '0.00'}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Totals */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                    <Box sx={{ width: '280px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <Typography variant="body1">Subtotal</Typography>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>${total}</Typography>
                        </Box>
                        <Divider sx={{ my: 2, borderWidth: 1 }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Total</Typography>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>${total}</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Footer */}
            </Box>
        </Box>
    );
};

export default PDFTemplate;

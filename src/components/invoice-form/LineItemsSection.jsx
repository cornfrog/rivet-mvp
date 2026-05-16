import { Box, TextField, Button, Card, CardContent, IconButton } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddIcon from '@mui/icons-material/Add';
import EmptyState from '../common/EmptyState';

const LineItemsSection = ({ items, onAdd, onRemove, onUpdate, errors = {}, touched = {} }) => {
    if (items.length === 0) {
        return (
            <EmptyState
                title="No items added"
                message="Start by adding a line item to your invoice."
                onAction={onAdd}
                actionLabel="Add First Item"
            />
        );
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {items.map((item) => {
                const descKey = `items.${item.id}.description`;
                const rateKey = `items.${item.id}.rate`;
                const hoursKey = `items.${item.id}.hours`;

                return (
                    <Card key={item.id} variant="outlined" sx={{ position: 'relative', overflow: 'visible' }}>
                        <CardContent sx={{ pt: 3 }}>
                            <IconButton
                                size="small"
                                color="error"
                                onClick={() => onRemove(item.id)}
                                sx={{
                                    position: 'absolute',
                                    top: -12,
                                    right: -12,
                                    backgroundColor: 'background.paper',
                                    border: '1px solid',
                                    borderColor: 'grey.300',
                                    '&:hover': { backgroundColor: 'error.lighter' }
                                }}
                            >
                                <DeleteOutlinedIcon fontSize="small" />
                            </IconButton>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <TextField
                                    fullWidth
                                    label="Description"
                                    variant="outlined"
                                    value={item.description}
                                    error={touched[descKey] && !!errors[descKey]}
                                    helperText={touched[descKey] && errors[descKey]}
                                    onChange={(e) => onUpdate(item.id, 'description', e.target.value)}
                                    placeholder="Service or product description"
                                />

                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <TextField
                                        label="Rate ($)"
                                        type="number"
                                        value={item.rate}
                                        error={touched[rateKey] && !!errors[rateKey]}
                                        helperText={touched[rateKey] && errors[rateKey]}
                                        onChange={(e) => onUpdate(item.id, 'rate', e.target.value)}
                                        sx={{ flex: 1 }}
                                    />
                                    <TextField
                                        label="Hours/Qty"
                                        type="number"
                                        value={item.hours}
                                        error={touched[hoursKey] && !!errors[hoursKey]}
                                        helperText={touched[hoursKey] && errors[hoursKey]}
                                        onChange={(e) => onUpdate(item.id, 'hours', e.target.value)}
                                        sx={{ flex: 1 }}
                                    />
                                    <TextField
                                        label="Amount"
                                        disabled
                                        value={item.amount}
                                        sx={{ flex: 1 }}
                                    />
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                );
            })}

            <Button
                fullWidth
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={onAdd}
                sx={{
                    py: 1.5,
                    border: '1px dashed',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                        border: '1px dashed',
                        backgroundColor: 'grey.50',
                    }
                }}
            >
                Add Another Item
            </Button>
        </Box>
    );
};

export default LineItemsSection;

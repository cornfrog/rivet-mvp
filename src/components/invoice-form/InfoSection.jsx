import { Box, TextField } from '@mui/material';

const InfoSection = ({ sectionName, fields, onUpdate, errors = {}, touched = {} }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
            {Object.entries(fields).map(([key, field]) => {
                const fieldKey = `${sectionName}.${key}`;
                const hasError = touched[fieldKey] && !!errors[fieldKey];

                return (
                    <TextField
                        key={key}
                        label={field.label}
                        value={field.value}
                        placeholder={field.placeholder}
                        required={field.required}
                        type={field.type}
                        fullWidth
                        error={hasError}
                        helperText={hasError ? errors[fieldKey] : ''}
                        onChange={(e) => onUpdate(sectionName, key, e.target.value)}
                        onBlur={() => onUpdate(sectionName, key, field.value)} // Trigger touched state
                    />
                );
            })}
        </Box>
    );
};

export default InfoSection;

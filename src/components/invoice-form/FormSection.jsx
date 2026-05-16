import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FormSection = ({ title, children, defaultExpanded = false }) => {
    return (
        <Accordion defaultExpanded={defaultExpanded} sx={{ mb: 2, borderRadius: 2, '&:before': { display: 'none' }, boxShadow: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0 }}>
                {children}
            </AccordionDetails>
        </Accordion>
    );
};

export default FormSection;

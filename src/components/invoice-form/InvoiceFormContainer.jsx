import { useRef } from 'react';
import { Box, Container, Grid, Button, Typography, Tooltip } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import { useInvoiceState } from '../../hooks/useInvoiceState';
import { usePDFGenerator } from '../../hooks/usePDFGenerator';
import FormSection from './FormSection';
import InfoSection from './InfoSection';
import LineItemsSection from './LineItemsSection';
import LivePreview from '../live-preview/LivePreview';
import PDFTemplate from '../live-preview/PDFTemplate';
import LoadingOverlay from '../common/LoadingOverlay';
import { DEFAULT_INVOICE_TEMPLATE } from '../../utils/default_invoice_template';

const InvoiceFormContainer = () => {
    const {
        invoice,
        updateField,
        addItem,
        removeItem,
        updateItem,
        total,
        errors,
        touched,
        isValid
    } = useInvoiceState(DEFAULT_INVOICE_TEMPLATE);

    const { isGenerating, generatePDF } = usePDFGenerator();
    const pdfTemplateRef = useRef(null);

    const handleGeneratePDF = () => {
        if (!isValid) return;
        generatePDF(pdfTemplateRef, `invoice-${invoice.client.name.value || 'client'}.pdf`);
    };

    const generateButtonContent = (
        <Button
            fullWidth
            variant="contained"
            size="large"
            startIcon={isValid ? <PictureAsPdfIcon /> : <ErrorOutlinedIcon />}
            onClick={handleGeneratePDF}
            disabled={isGenerating || !isValid}
            sx={{ 
                py: { xs: 2, md: 1.5 }, 
                borderRadius: 2, 
                fontSize: { xs: '1.1rem', md: '1rem' },
                boxShadow: isValid ? '0 10px 15px -3px rgba(15, 23, 42, 0.2)' : 'none'
            }}
        >
            {isGenerating ? 'Generating...' : isValid ? 'Generate PDF' : 'Fix Errors to Generate'}
        </Button>
    );

    return (
        <Container maxWidth="lg" sx={{ py: { xs: 2, md: 5 } }}>
            <LoadingOverlay open={isGenerating} />
            
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
                            Invoice Generator
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Fill out the details below. All required fields must be completed to generate your PDF.
                        </Typography>
                    </Box>

                    <FormSection title="Your Company Information" defaultExpanded={true}>
                        <InfoSection
                            sectionName="company"
                            fields={invoice.company}
                            onUpdate={updateField}
                            errors={errors}
                            touched={touched}
                        />
                    </FormSection>

                    <FormSection title="Client Information" defaultExpanded={true}>
                        <InfoSection
                            sectionName="client"
                            fields={invoice.client}
                            onUpdate={updateField}
                            errors={errors}
                            touched={touched}
                        />
                    </FormSection>

                    <FormSection title="Invoice Dates" defaultExpanded={true}>
                        <InfoSection
                            sectionName="dates"
                            fields={invoice.dates}
                            onUpdate={updateField}
                            errors={errors}
                            touched={touched}
                        />
                    </FormSection>

                    <FormSection title="Invoice Items" defaultExpanded={true}>
                        <LineItemsSection
                            items={invoice.items}
                            onAdd={addItem}
                            onRemove={removeItem}
                            onUpdate={updateItem}
                            errors={errors}
                            touched={touched}
                        />
                    </FormSection>

                    <Box sx={{ mt: 4, display: { xs: 'block', md: 'none' } }}>
                        {generateButtonContent}
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                    <Box sx={{ position: 'sticky', top: 100 }}>
                        <LivePreview invoice={invoice} total={total} />
                        <Box sx={{ mt: 3 }}>
                            {isValid ? (
                                generateButtonContent
                            ) : (
                                <Tooltip title="Please fill in all required fields and add at least one item.">
                                    <span>{generateButtonContent}</span>
                                </Tooltip>
                            )}
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <PDFTemplate invoice={invoice} total={total} templateRef={pdfTemplateRef} />
        </Container>
    );
};

export default InvoiceFormContainer;

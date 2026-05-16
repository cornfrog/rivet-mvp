import { useState, useCallback } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const usePDFGenerator = () => {
    const [isGenerating, setIsGenerating] = useState(false);

    const generatePDF = useCallback(async (elementRef, filename = 'invoice.pdf') => {
        if (!elementRef.current) return;

        try {
            setIsGenerating(true);
            
            const element = elementRef.current;
            
            // Optimization for A4 aspect ratio and quality
            const canvas = await html2canvas(element, {
                scale: 2, // Higher scale for better quality
                useCORS: true,
                logging: false,
                windowWidth: 800, // Fixed width to ensure consistent rendering
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            // Handle multi-page if height exceeds A4 (optional, but good for production)
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(filename);
            
        } catch (error) {
            console.error('Error generating PDF:', error);
        } finally {
            setIsGenerating(false);
        }
    }, []);

    return {
        isGenerating,
        generatePDF,
    };
};

import { Box } from "@mui/material";
import InvoiceFormContainer from "../components/invoice-form/InvoiceFormContainer";

const InvoiceGenerator = () => {
    return (
        <Box className="invoice-generator-container">
            <InvoiceFormContainer />
        </Box>
    );
};

export default InvoiceGenerator;

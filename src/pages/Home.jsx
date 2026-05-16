import Page from "../component/Page";
import InvoiceGenerator from "../component/InvoiceGenerator";
import Navbar from "../component/Navbar";
import { Box } from "@mui/material";

const Home = () => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <Page>
                <InvoiceGenerator />
            </Page>
        </Box>
    );
};

export default Home;

import { Container } from "@mui/material";

const Page = ({children}) => {
    return (
        <Container
            disableGutters
            maxWidth={false}
        >
            {children}
        </Container>
    );
};

export default Page;
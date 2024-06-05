import { Container } from "@mui/material";
import { Box } from "@mui/system";

export function Page({ children }) {
    return (<>
        <Box
            minHeight={"80vh"}
            paddingTop={"3vh"}
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
        >
            <Container>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"1rem"}
                >
                    {children}
                </Box>
            </Container>
        </Box>
    </>)
}
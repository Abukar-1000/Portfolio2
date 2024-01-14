import { Square } from "./Square";
import Box from '@mui/material/Box';

export function ShadowShape({}) {

    return (
        <Box sx={{display: "hidden"}}>
            <Square />
        </Box>
    );
}
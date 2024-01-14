import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AnimatedText } from './AnimatedText';


export function Title({Text, Subtext}) {

    return (
        <Box>
            <Paper elevation={4} sx={{padding: "2rem"}}>
                <Typography variant="h1">
                    {Text}
                </Typography>

                <AnimatedText componentType={"h4"} charDelay={80} Text={Subtext} AnimateGradient = {true} />
            </Paper>
        </Box>
    )
}
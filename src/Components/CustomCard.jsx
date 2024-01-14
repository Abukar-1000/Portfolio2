import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export function RowEntry({Text, Dimensions, src}) {

    return (
        <Box sx={{display: "block", width: "100%", paddingBottom: "1rem"}}>
            <Grid
                container direction={"row"} justifyContent={"start"} alignItems={"center"}
                xs={12} sm={12} md={12} lg={12}
            >
                <img src={src} width={Dimensions.width} height={Dimensions.height} style={{paddingRight: '1em'}}/>
                <Typography variant="h5">
                        {Text}
                </Typography>
            </Grid>
        </Box>
    );
}


export function CustomCard({Title, children}) {

    return (
        <Box>
            <Paper elevation={6} sx={{backgroundColor: '#fff', maxWidth: "550px", minWidth: "400px", paddingTop: "1rem", paddingBottom: "1rem"}}>
                <Typography variant='h5'>
                    {Title}
                </Typography>
                <Grid
                    container direction={"column"} justifyContent={"center"} alignItems={"center"}
                >
                    <Box>
                        {children}
                    </Box>
                </Grid>
            </Paper>
        </Box>
    );
}
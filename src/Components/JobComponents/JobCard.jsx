import { Box, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';

export function JobCard({ ImgSrc, JobTitle, isCurrent, DateRange, Company, Location }) {

    return (
        <Box
            maxWidth={"500px"}
            >
            <Paper
                elevation={4}
                sx={{
                    padding: "0.75rem",
                    borderRadius: "10px"
                }}
            >
                <Box
                    position={"relative"}
                >
                    <Box
                            display={"flex"}
                            justifyContent={"end"}
                        >
                            {isCurrent && (
                                <Chip 
                                    label="Current"
                                    color="success"
                                    variant="outlined"
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        right: 0
                                    }}
                                />
                            )}
                            {!isCurrent && (
                                <Chip 
                                    label={DateRange}
                                    color="secondary"
                                    variant="outlined"
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        right: 0
                                    }}
                                />
                            )}
                    </Box>
                </Box>
                <Grid container>
                    
                    <Grid sx={2}>
                        <Box
                            sx={{
                                borderRadius: "10px",
                                width: "70px",
                                border: "#ff10 solid 1px"
                            }}
                        >
                            <img width={"100%"} height="100%" src={ImgSrc} alt="Logo"/>
                        </Box>
                    </Grid>
                    
                    <Grid sx={10}>
                        <Box
                            display={"flex"}
                            justifyContent={"start"}
                            alignContent={"start"}
                            padding={"0.5rem"}
                        >

                            <Typography variant="h6">{JobTitle}</Typography>
                        </Box>

                        <Box
                            display={"flex"}
                            justifyContent={"start"}
                            alignContent={"start"}
                        >
                            <Stack
                                direction={"row"}
                                spacing={1}
                            >
                                <Chip icon={<CorporateFareRoundedIcon />} label={Company} color="secondary"/>
                                {
                                    Location === "Remote"? 
                                        (<Chip icon={<CloudRoundedIcon />} label={Location} color="secondary"/>)
                                    :(<Chip icon={<LocationOnIcon />} label={Location} color="secondary"/>)
                                }
                            </Stack>
                        </Box>
                    </Grid>                    
                </Grid>
            </Paper>
        </Box>
    )
}
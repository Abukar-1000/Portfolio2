import { Box, Chip, Fade, Modal, Paper, Slide, Stack, Typography } from "@mui/material";
import { PlayStationLayout } from "../../Shapes/PlayStationLayout";
import { AnimatedText } from "../../../AnimatedText";
import { useEffect, useMemo, useState } from "react";
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import WestSharpIcon from '@mui/icons-material/WestSharp';
import { useNavigate } from "react-router-dom";

function useFloat(interval) {
    const minElevation = 0;
    const maxElevation = 24;
    const [dy, setDy] = useState(1);
    const [elevation, setElevation] = useState(minElevation + 1);

    useEffect(() => {
        const id = setInterval(() => {

            if (elevation < minElevation) {
                setElevation(minElevation)
                setDy(1)
                return;
            }

            if (elevation > maxElevation) {
                setElevation(maxElevation)
                setDy(-1)
                return;
            }
            
            
            let newElevation = ( elevation + (1 * dy) );
            setElevation(old => newElevation);
        }, interval);

        return () => clearInterval(id);
    })

    return elevation;
}

function Infinity() {
    return (
        <Chip
            label={
                <AllInclusiveOutlinedIcon 
                    fontSize="medium"
                    color="secondary"
                />
            }
            variant="outlined"
            sx={{
                marginLeft: "1rem"
            }}
        />
    )
}

function Dialog() {
    const charDelay = 35;
    const charDelay2 = 30;
    const dialogText = 'A Work in Progress: Excellence Cannot Be Rushed';
    const dialogText2 = "This project is being carefully curated to meet the highest standards. Thank you for your patience.";

    const elevation = useFloat(150);
    const offsetDelay = (dialogText.length * charDelay);
    const [showSecondDialog, setShowSecondDialog] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        const id = setTimeout(() => {
            setShowSecondDialog(true);
        }, offsetDelay);

        return () => clearTimeout(id);
    }, []);

    return (

        <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
        >
            <Paper
                minWidth={"30dvw"}
                sx={{
                    padding: "1.6rem",
                    width: {
                        xs: "100dvw",
                        sm: "60dvw",
                        md: "40dvw",
                        xl: "30dvw"
                    },
                }}
                elevation={elevation}
            >
                <Stack 
                    direction={"column"} 
                    sx={{
                        height: "40dvh"
                    }}
                    gap={5}
                >
                    <PlayStationLayout />
                    
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignContent={"center"}
                        flexDirection={"column"}
                        gap={3}
                    >
                        <AnimatedText
                            Text={dialogText}
                            charDelay={charDelay}
                            componentType={"h4"}
                            AnimateGradient={false}
                            endAdornment={ <Infinity /> }
                            useGradient={false}
                        />
                        <Box>
                            <Slide
                                in={showSecondDialog}
                                direction="up"
                            >
                                <Box>
                                    {
                                        showSecondDialog && (
                                            <AnimatedText
                                                Text={dialogText2}
                                                charDelay={charDelay2}
                                                componentType={"h6"}
                                                AnimateGradient={false}
                                            />
                                        )
                                    } 
                                </Box>
                            </Slide>
                        </Box>
                    </Box>
                </Stack>
                <Box
                    display={"flex"}
                    justifyContent={"start"}
                    alignContent={"start"}
                >
                    <Chip 
                        label={
                            <Typography
                                align="center"
                            >
                                View other projects
                            </Typography>
                        }
                        variant="outlined"
                        color="secondary"
                        icon={
                            <WestSharpIcon
                                color="secondary"
                            />
                        }
                        onClick={e => navigate("/")}
                    />
                </Box>
            </Paper>
        </Box>
    );
}

export function ProjectNotAvailable({ timeout = 400 }) {

    const [showText, setShowText] = useState(true);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setShowText(true)
        }, timeout) 

        return () => clearInterval(timerId);
    }, []);

    const MemoizedDialog = ({ showText }) => useMemo((showText) => <Dialog showText={showText}/>, [showText])
    return (
        <Box>

            <Modal 
                open={true}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "column",
                    minHeight: "100dvh",
                }}
                slots={{
                    // backdrop: <></>
                }}    
            >
                <Fade
                    in={true}
                >
                    <Box key={1} sx={{ outline: "none"}}>
                        <MemoizedDialog showText={showText}/>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}


export default ProjectNotAvailable;
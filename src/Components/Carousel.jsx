import { Badge, Box, Button, Chip, Container, Divider, Fade, Link, Paper, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import useCarousel from "../CustomHooks/useCarousel";
import { useEffect, useRef, useState } from "react";

export function ImgSlide({ imgData, status }) {

    let chip = <Chip key = {1} label="success" color="success" variant="outlined" icon={<DoneIcon />}/>;
    if (!imgData.success) {
        chip = <Chip key = {2} label="fail" color="error" variant="outlined" icon={ <ErrorOutlineIcon/> }/>
    }

    if (status === undefined) {
        chip = <></>
    }
    
    return (<>
        <Box
            position={"relative"}
        >
            <Box
                marginTop={"2vh"}
                width={"95%"}                
            >
                <Box
                    display={"flex"}
                    justifyContent={"end"}
                    alignContent={"end"}
                >
                    {chip}
                </Box>
            </Box>

            <Box
                display={"flex"}
                alignContent={"center"}
                justifyContent={"center"}
            >
                <img src={imgData.location}/>
            </Box>
        </Box>
    </>)
}


export function Carousel({ title, items, elevation, interval }) {
    
    let item = useCarousel(items, interval);
    
    return (<>
        <Paper
            elevation={elevation}
            >
            <Box
                padding={"1rem"}
                minHeight={"500px"}
                overflow={"hidden"}
                >
                <Box>
                    <Typography variant="h6" fontWeight={"100"}>{title}</Typography>
                </Box>
                <Divider />
                <Box>
                    {item}
                </Box>
            </Box>

        </Paper>
    </>)
}
export function HiddenContent({ children, messages, btnText, interval, elevation }) {

    let message = useCarousel(messages, interval)
    let [ state, setState ] = useState({
        item: <></>,
        isVisible: false
    });
    
    let codeSectionRef = useRef(null);

    let child = <>
        <Fade
            in={true}
            timeout={1000}
            unmountOnExit
        >
            <Box>
                {children}
            </Box>
        </Fade>
    </>

    const handleVisibility = () => {
        codeSectionRef.current.focus();
        setState({
            item: child,
            isVisible: true
        });
    }

    let dialog = <>
        <Paper
                elevation={elevation}
                >
                <Box
                    minHeight={"300px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    >
                    
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"1rem"}
                            width={"60%"}
                        >
                            <Typography variant="h6" fontWeight={"100"} textAlign={"center"} >{message}</Typography>
                            <Button variant="text" color="secondary" onClick={handleVisibility}>{btnText}</Button>
                        </Box>
                </Box>
            </Paper>
    </>


    if (state.isVisible) {
        dialog = <></>;
    }

    return (<>        
            <Box
                ref={codeSectionRef}
            >
                {dialog}                
                {state.item}
            </Box>
    </>)
}
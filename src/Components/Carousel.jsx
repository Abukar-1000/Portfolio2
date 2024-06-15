import { Badge, Box, Button, Chip, Container, Divider, Fade, Grid, Link, Paper, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import useCarousel from "../CustomHooks/useCarousel";
import { forwardRef, useEffect, useRef, useState } from "react";

export function ImgSlide({ imgData, parentRef, ImgText, status }) {

    let [ state, changeState ] = useState({
        width: 500,
        height: 500
    })

    let imgText =   <Box
                        display={"flex"}
                        alignContent={"center"}
                        justifyContent={"center"}
                    >
                        <Typography variant="subtitle1" fontSize={"1.2rem"}>{ImgText}</Typography>
                    </Box>;

    let chip = <Chip key = {1} label="success" color="success" variant="outlined" icon={<DoneIcon />}/>;
    let imgRef = useRef(null);
    let imgComponent = <img ref={imgRef} className="carouselImg" src={imgData.location}/>;
    let parentRefNotProvided = parentRef === undefined;

    if (!imgData.success) {
        chip = <Chip key = {2} label="fail" color="error" variant="outlined" icon={ <ErrorOutlineIcon/> }/>
    }

    if (status === undefined) {
        chip = <></>
    }

    if (ImgText === undefined) {
        imgText = <></>;
    }

    if (parentRefNotProvided) {
        parentRef = {
            current: null
        }
    }



    useEffect(() => {
        // console.log("parent ref:", parentRef.current);
        if (!parentRefNotProvided) {
            if (imgRef.current.clientWidth > parentRef.current.clientWidth) {
                let heightRatio = imgRef.current.clientHeight / imgRef.current.clientWidth;
                let newHeight = Math.ceil(parentRef.current.clientHeight * heightRatio);
                newHeight += Math.ceil( parentRef.current.clientHeight * (heightRatio - newHeight / parentRef.current.clientWidth) );
        
                changeState({
                    width: parentRef.current.clientWidth,
                    height: newHeight
                })
            }
        }

    }, [parentRef.current])
    
    let slide = <>
        <Fade
            in={true}
            timeout={1000}
            unmountOnExit
        >
            <Box>

                <Box
                    marginTop={"2vh"}
                    width={"95%"}                
                >
                    
                    <Grid container>
                        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>{imgText}</Grid>
                        
                        <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                            <Box
                                display={"flex"}
                                justifyContent={"end"}
                                alignContent={"end"}
                            >
                                {chip}
                            </Box>
                        </Grid>

                    </Grid>
                    
                    

                </Box>

                <Box
                    display={"flex"}
                    alignContent={"center"}
                    justifyContent={"center"}
                >
                    {imgComponent}
                </Box>

            </Box>
        </Fade>
    </>

    return (<>
        <Box
            position={"relative"}
        >
            {slide}
        </Box>
    </>)
}


export const Carousel = forwardRef(({ title, items, elevation, interval }, ref) => {
    
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
                <Box ref={ref}>
                    {item}
                </Box>
            </Box>

        </Paper>
    </>)
});

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
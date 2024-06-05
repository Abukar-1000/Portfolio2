import { Badge, Box, Chip, Divider, Paper, Typography } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import useCarousel from "../CustomHooks/useCarousel";

export function ImgSlide({ imgData, status }) {

    let chip = <Chip key = {1} label="success" color="success" variant="outlined" icon={<DoneIcon />}/>;
    if (!imgData.success) {
        chip = <Chip key = {2} label="fail" color="error" variant="outlined" icon={ <ErrorOutlineIcon/> }/>
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
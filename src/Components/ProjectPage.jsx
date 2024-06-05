import { Box, Chip, Divider, Grid, Paper, Stack, Tabs, Typography } from "@mui/material";
import { useParams } from "react-router-dom"
import TranslateIcon from '@mui/icons-material/Translate';
import { useEffect, useState } from "react";
import useScript from "../CustomHooks/useScript";
import { GeneralTabs } from "./Tabs";

export function LanguageBar({ languages }){
    const alpha = 40;
    return (<>
        <Box
            display={"flex"}
            flexDirection={"row"}
            gap={"3vw"}    
        >
            <Stack direction="row" spacing={1}>
                {
                    languages.map((lang, index) => {
                        let transparentBg = `${lang.bgcolor}${alpha}`;
                        let icon = <TranslateIcon color={lang.txtcolor} />;

                        return <Chip 
                                    key={index}
                                    icon={icon}
                                    label={lang.name} 
                                    sx = {{
                                        color: lang.txtcolor,
                                        backgroundColor: transparentBg
                                    }}
                                />
                    })
                }
            </Stack>
        </Box>
    </>) 
}

export function ProjectTitle({ title }) {

    return (<>
        <Typography variant="h2" fontWeight={"100"}>{title}</Typography>
        <Divider />
    </>)
}

export function ProjectText({ text, title }) {

    return (<>

        <Paper 
            elevation={4}
            sx={{ padding: "1em" }}    
        >
            <Typography variant="h6" fontWeight={"normal"}>{title}</Typography>
                <Typography 
                variant="body1" 
                fontWeight={"100"}
                sx={{
                    lineHeight: "1.6rem"
                }}
            >
                {text} 
            </Typography>
        </Paper>
    </>)
}


export function ProjectSourceCode({ sourceFiles, elevation }){
    
    const tabData = {};
    sourceFiles.forEach(fileObj => {
        tabData[fileObj.name] = fileObj.location;
    }); 

    let [ file, setFile ] = useState(sourceFiles[0].location);
    useScript(
        file,
        ".sourceParent"
    );

    const getCurrentFile = src => {
        setFile(src);
    }

    return (<>
        <Box>
            <Paper
                elevation={elevation}
            >

                <Box
                    padding={"1em"}
                >
                    <Typography variant="h6" fontWeight={"400"}>Source Code</Typography>
                    <Divider />
                </Box>
                {/* Body */}
                <Box>
                    <Grid container>

                        <Grid item md={2} lg={2}>
                            <GeneralTabs 
                                hidePannel={true}
                                getCurrentValue={getCurrentFile}
                                tabData={tabData}
                            />        
                        </Grid>
                        <Grid item md={10} lg={10}>
                            <Box
                                className={"sourceParent"}
                                paddingLeft={"2vw"}
                                paddingRight={"1vw"}
                            >

                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Paper>
        </Box>
    </>)
}
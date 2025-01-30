import { Box, Button, Chip, Divider, Drawer, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Tabs, Typography } from "@mui/material";
import { useParams } from "react-router-dom"
import TranslateIcon from '@mui/icons-material/Translate';
import { useEffect, useRef, useState } from "react";
import useScript from "../CustomHooks/useScript";
import { GeneralTabs } from "./Tabs";
import SourceIcon from '@mui/icons-material/Source';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { ChevronLeft } from "@mui/icons-material";
import SourceFile from "./GitHubComponents/Code/SourceFile";
import Folder from "./GitHubComponents/Code/Folder";

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

const loc = "https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2FAbukar-1000%2FcompVision%2Fblob%2Fmain%2FP4%2FP4Submission%2FSegmentation.m&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"
const testFiles = {
    folderid: 2,
    type: "folder",
    name: "F1",
    files: [
        {
            fileid: 3,
            type: "file",
            name: "segmentation.m",
            location: loc

        },
        {
            fileid: 4,
            type: "file",
            name: "segmentation.m",
            location: loc
        },
        {
            fileid: 5,
            type: "folder",
            name: "F2",
            files: [
                {
                    fileid: 6,
                    type: "file",
                    name: "segmentation.m",
                    location: loc
                },
                {
                    fileid: 7,
                    type: "file",
                    name: "segmentation.m",
                    location: loc
                },
                {
                    fileid: 8,
                    type: "file",
                    name: "segmentation.m",
                    location: loc
                },
                {
                    fileid: 9,
                    type: "folder",
                    name: "F3",
                    files: [
                        {
                            fileid: 10,
                            type: "file",
                            name: "segmentation.m",
                            location: loc
                        },
                        {
                            fileid: 11,
                            type: "file",
                            name: "segmentation.m",
                            location: loc
                        },
                        {
                            fileid: 12,
                            type: "file",
                            name: "segmentation.m",
                            location: loc
                        }
                    ]
                }
            ]
        }
    ]
}
export function ProjectSourceCode({ sourceFiles, elevation }){
    
    const tabData = {};
    sourceFiles.forEach(fileObj => {
        tabData[fileObj.name] = fileObj.location;
    }); 

    let [ file, setFile ] = useState(sourceFiles[0].location);
    const [ drawerOpen, setDrawerOpen ] = useState(false);
    const containerRef = useRef(null);

    useScript(
        file,
        ".sourceParent"
    );

    const getCurrentFile = src => {
        setFile(src);
    }

    console.log(tabData);
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
                <Box 
                    ref={containerRef}
                    sx={{ overflow: "hidden" }}    
                >
                    <Grid container position={"relative"}>
                        {/* File drawer button toggle */}
                        <Box
                            sx={{
                                display: "inline-block",
                                padding: "1rem"
                            }}
                        >
                            <Paper
                                elevation={4}
                            >
                                <Button 
                                    size="medium"
                                    color="secondary"
                                    variant="outlined"
                                    onClick={e => setDrawerOpen(!drawerOpen || false)}
                                    startIcon={
                                        <SourceIcon />
                                    }
                                >
                                    Files
                                </Button>
                            </Paper>
                        </Box>

                        <Drawer
                            open={drawerOpen}
                            elevation={4}
                            sx={{
                                position: 'absolute', 
                                '& .MuiPaper-root': {
                                    position: 'absolute'
                                },
                                '& .MuiDrawer-paper': {
                                    borderTopRightRadius: "5px"
                                }
                            }}
                            
                            container={containerRef.current}
                            ModalProps={{
                                container: containerRef.current,
                                disablePortal: true,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "end",
                                    alignContent: "end"
                                }}
                            >
                                <IconButton onClick={e => setDrawerOpen(false)}>
                                    <ChevronLeft /> 
                                </IconButton>
                            </Box>
                        <Divider />
                            {
                                sourceFiles && sourceFiles?.map(metadata => (
                                    <SourceFile metadata={metadata} setFile={setFile}/>
                                ))
                            }

                            <Folder metadata={testFiles} setFile={setFile}/>
                        </Drawer>
                        {/* <Grid item md={2} lg={2}>
                            <GeneralTabs 
                                hidePannel={true}
                                getCurrentValue={getCurrentFile}
                                tabData={tabData}
                            />        
                        </Grid> */}
                        <Grid item xs={12} lg={10}>
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
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { TransitionGroup } from 'react-transition-group';
import { useState } from 'react';


export function DynamicContainer({spacing, columns, breakpoints, children}) {
    
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}
                spacing={spacing} columns={columns} gap={1}
            >
                {
                    children.map(child => {
                        return <Grid item xs={breakpoints.xs} sm = {breakpoints.sm} md = {breakpoints.md} lg={breakpoints.lg} >{child}</Grid>
                    })
                }
            </Grid>
        </Box>
    );
}


export function ProjectContainer({children}) {

    let delay = 200;
    const computeDelay = index => {
        let offset = index * delay;
        return `${offset}ms`;
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container direction={"row"} justifyContent={"start"} alignItems={"center"}
                spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 , lg: 12 }}
            >
                {
                    children.map((child, index) => {
                        let component = <Grid item xs={12} sm = {12} md = {6} lg={4} >{child}</Grid>;
                        return <>
                                <Fade  in={true} style={{ transitionDelay: computeDelay(index) }}>
                                    {component}
                                </Fade>
                        </>
                    })
                }
            </Grid>
        </Box>
    );
}
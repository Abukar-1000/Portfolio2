import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Triangle } from './Triangle';
import { Square } from './Square';
import { Circle } from './Circle';
import { DynamicContainer } from '../Containers';
import { ShadowShape } from './ShadowShape';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export function PlayStationLayout({}) {

    let isMobile = useMediaQuery(useTheme().breakpoints.down('lg'));

    let [state, setState] = useState({
        variant: isMobile? "fullWidth" : "scrollable",
        content: <>{
            isMobile?
                    <MobileLayout /> :
                    <DesktopLayout />
        }</>
    });

    useEffect(() => {
        setState({
            content: <>{
                isMobile?
                    <MobileLayout /> :
                    <DesktopLayout />
            }</>
        });
    }, [useMediaQuery(useTheme().breakpoints.down('lg'))])



    return (
        <Box>
            {state.content}
        </Box>
    );
}

function DesktopLayout({}) {
    return (
        <DynamicContainer
            spacing={{xs: 1, sm: 1, md: 1, lg: 1}} 
            columns={{xs: 3, sm: 4, md: 12, lg: 12}}
            breakpoints={{xs: 3, sm: 1, md: 3, lg: 3}}
        >
            <Box sx={{height: "22px", width: "22px"}}></Box>
            <Triangle />
            <Box sx={{height: "22px", width: "22px"}}></Box>

            <Box sx={{height: "22px", width: "22px"}}></Box>
            <Box sx={{height: "22px", width: "22px"}}></Box>
            <Box sx={{height: "22px", width: "22px"}}></Box>

            <Square />
            <Box sx={{height: "22px", width: "22px"}}></Box>
            <Circle />
        </DynamicContainer>
    );
}

function MobileLayout({}) {
    return (
        <DynamicContainer
            spacing={{xs: 4, sm: 1, md: 1, lg: 1}} 
            columns={{xs: 12, sm: 4, md: 12, lg: 12}}
            breakpoints={{xs: 3, sm: 1, md: 3, lg: 3}}
        >
            <Triangle />
            <Square />
            <Circle />
        </DynamicContainer>
    );
}
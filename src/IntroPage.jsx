import Box from '@mui/material/Box';
import { Title } from './Title';
import Grid from '@mui/material/Grid';
import { PlayStationLayout } from './Components/Shapes/PlayStationLayout';
import { DynamicContainer } from './Components/Containers';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export function IntroPage({}) {
    
    let isMobile = useMediaQuery(useTheme().breakpoints.down('lg'));
    
    let [state, setState] = useState({
        direction: isMobile? "column" : "row"
    });

    useEffect(() => {
    
        setState({
            direction: isMobile? "column" : "row"
        })
    
    }, [window.innerWidth])
    
    return (
        <Box sx={{
            width: "100vw",
            height: "100vh",
            marginBottom: "1rem"
        }}>
            <Grid 
                sx={{
                    height: "100%",
                    width: "100%",
                }}
                container direction={state.direction} justifyContent={"center"} alignItems={"center"}>
                <PlayStationLayout />
                
                <Title Text={"Abukar Djama"} Subtext={"Software Engineer"} />
            </Grid>
        </Box>
    );
}
import { motion, AnimatePresence } from "framer-motion"; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import { red, pink, lime } from '@mui/material/colors';
import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

export function Project({myTitle, action}) {

    let [state, setState] = useState({
        elevation: 4
    })
    
    const hoverStateEffects = e => {
        setState(prev => {
            return {
                elevation: prev.elevation === 24? 4 : 24,
            }
        });   
    }

    const violetBase = '#7F00FF';
    const violetMain = alpha(violetBase, 0.7);

    const theme = createTheme({
    palette: {
        violet: {
        main: violetMain,
        light: alpha(violetBase, 0.5),
        dark: alpha(violetBase, 0.9),
        contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
    },
    });
    
    return (
        <Button onMouseEnter={hoverStateEffects} onMouseLeave={hoverStateEffects} disableRipple={true} >
            <Paper 
                elevation={state.elevation}
                sx={{ 
                    maxWidth: 345,
                    margin: "2rem"
                }}
                >
                <Card sx={{ 
                    maxWidth: 345,
                    backgroundColor: "#272829"
                }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image="compVisionBg.PNG"
                        alt="green iguana"
                        />
                        <CardContent
                        >
                            <Typography gutterBottom variant="h5" component="div" color={"white"}>
                                {myTitle}
                            </Typography>
                            <Typography variant="body2" color="#f3e5f5">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions>
                        <ThemeProvider theme={theme}>
                            <Button size="medium" variant="contained" color="violet">
                                {action}
                            </Button>
                        </ThemeProvider>
                    </CardActions>
                </Card>
            </Paper>
        </Button>
    );
}
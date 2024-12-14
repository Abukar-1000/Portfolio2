import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';




export function AnimatedText({Text, componentType, charDelay, AnimateGradient, endAdornment=<></>, useGradient=true}) {
    

    let [state, setState] = useState({
        index: 0,
        maxLength: Text.length,
        currentText: "",
        animationComplete: false
    });

    const [finished, setFinished] = useState(false);

    const gradientStyle = useGradient? 'rotateBgGradient' : "";
    useEffect(() => {

        let intervalID = setInterval(() => {
                
            setState(prev => {

                // console.log('gradient', prev.gradientStyle.backgroundImage);
                let newText = prev.currentText + Text[prev.index];
                let newIndex = prev.index + 1;
                let isFinished =  newIndex === prev.maxLength;
                
                if (isFinished) {
                    clearInterval(intervalID);
                    setFinished(true);
                }

                return {
                    ...prev,
                    currentText: newText,
                    index: newIndex,
                    animationComplete: isFinished
                };

            })
        }, charDelay)

        return () => clearInterval(intervalID);
    }, [])

    return (
        <Box>
            <Box
                display={"inline"}
            >
                <Typography 
                    className={gradientStyle} 
                    variant={componentType}
                >
                    {state.currentText}
                    { finished && (endAdornment) }
                </Typography>
            </Box>
        </Box>
    )
}
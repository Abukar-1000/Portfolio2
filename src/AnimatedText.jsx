import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';




export function AnimatedText({Text, componentType, charDelay, AnimateGradient}) {
    

    let [state, setState] = useState({
        index: 0,
        maxLength: Text.length,
        currentText: "",
        animationComplete: false
    });


    useEffect(() => {

        let intervalID = setInterval(() => {
                
            setState(prev => {

                // console.log('gradient', prev.gradientStyle.backgroundImage);
                let newText = prev.currentText + Text[prev.index];
                let newIndex = prev.index + 1;
                let isFinished =  newIndex === prev.maxLength;
                
                if (isFinished) {
                    clearInterval(intervalID)
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
            <Typography className='rotateBgGradient' variant={componentType}>
                {state.currentText}
            </Typography>
        </Box>
    )
}
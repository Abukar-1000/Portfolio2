import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { DynamicContainer } from './Containers';

export function Skill({abbreviation, src, fullText, dimensions}) {

    return (
        <Paper elevation={3} sx={{ maxWidth: "fit-content"}}>
        <Box pt={1} pb={1}>
                <Tooltip title={fullText} placement="left-start"></Tooltip>
                <img src={src} width={dimensions.width} height={dimensions.height}/>
                <br/>
                <Typography variant="P6">
                    {fullText}
                </Typography>
        </Box>
        </Paper>
    );
}
export function Skills({children}) {

    const allotedColumnsForASkill = 2;
    const maxColumnsAllocated = 8;
    return (
        <Paper elevation={6} sx={{backgroundColor: '#fff', maxWidth: "350px"}}>
            <Typography pt={1} variant="h5">Skills</Typography>
            <Box mt={2} pb={2} sx={{ width: '100%' }}>
                    <DynamicContainer
                        spacing={{sm: 1, md: 1}}
                        columns={{xm: maxColumnsAllocated, sm: maxColumnsAllocated, md: maxColumnsAllocated, lg: maxColumnsAllocated}}
                        breakpoints={{xm: allotedColumnsForASkill, sm: allotedColumnsForASkill, md: allotedColumnsForASkill, lg: allotedColumnsForASkill}}
                    >
                        <Skill abbreviation={"CV"} src={"IcompVision.png"} fullText={"Computer Vision"} dimensions={{width: 35, height: 35}} />
                        <Skill abbreviation={"CV"} src={"IcompVision.png"} fullText={"Computer Vision"} dimensions={{width: 35, height: 35}} />
                        <Skill abbreviation={"CV"} src={"IcompVision.png"} fullText={"Computer Vision"} dimensions={{width: 35, height: 35}} />
                        <Skill abbreviation={"CV"} src={"IcompVision.png"} fullText={"Computer Vision"} dimensions={{width: 35, height: 35}} />
                        <Skill abbreviation={"CV"} src={"IcompVision.png"} fullText={"Computer Vision"} dimensions={{width: 35, height: 35}} />
                        <Skill abbreviation={"CV"} src={"IcompVision.png"} fullText={"Computer Vision"} dimensions={{width: 35, height: 35}} />
                        <Skill abbreviation={"CV"} src={"IcompVision.png"} fullText={"Computer Vision"} dimensions={{width: 35, height: 35}} />
                        <Skill abbreviation={"CV"} src={"IcompVision.png"} fullText={"Computer Vision"} dimensions={{width: 35, height: 35}} />

                    </DynamicContainer>
            </Box>
        </Paper>
    );
}
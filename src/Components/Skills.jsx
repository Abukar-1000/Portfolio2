import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { DynamicContainer } from './Containers';
import skillMap from '../Mappings/SkillMaps';


export function Skill({abbreviation, src, fullText, dimensions, icon=undefined}) {

    return (
        <Paper elevation={3} sx={{
            width: {
                xs: "22dvw",
                xl: "18dvh"
            },
            height: {
                xs: "7.5dvh",
                md: "6.5dvh",
                lg: "7dvh"
            }
        }}>
            <Box 
                sx={{
                    height: "100%",
                    width: "100%",
                    display: {
                        md: "flex"                        
                    },
                    justifyContent: {
                        md: "center"
                    },
                    alignContent: {
                        md: "center"
                    },
                    flexDirection: {
                        md: "column"
                    }
                }}
            >
                <Box
                    sx={{
                        
                    }}
                >
                    <Tooltip title={fullText} placement="left-start"></Tooltip>
                    { icon && icon }
                    { !icon && <img src={src} width={dimensions.width} height={dimensions.height}/> }
                    <br/>
                    <Typography variant="P6">
                        {fullText}
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
}
export function Skills({children}) {

    const allotedColumnsForASkill = 3;
    const maxColumnsAllocated = 10;
    return (
        <Paper elevation={6} sx={{backgroundColor: '#fff', maxWidth: "fit-content"}}>
            <Typography pt={1} variant="h5">Skills</Typography>
                <Box mt={2} pb={2} sx={{ width: '100%' }}>
                        <DynamicContainer
                            spacing={{xs: 1, sm: 1, md: 1, lg: 1, xl: 1}}
                            columns={{xm: maxColumnsAllocated, sm: maxColumnsAllocated, md: maxColumnsAllocated, lg: maxColumnsAllocated}}
                            breakpoints={{xm: allotedColumnsForASkill, sm: allotedColumnsForASkill, md: allotedColumnsForASkill, lg: allotedColumnsForASkill}}
                        >
                            {
                                skillMap.map(skill => (
                                    <Skill
                                        abbreviation={skill.abbreviation}
                                        icon={skill.icon}
                                        fullText={skill.fullText}
                                        dimensions={{
                                            width: 35,
                                            height: 35
                                        }}
                                    />
                                ))
                            }
                        </DynamicContainer>
                </Box>
        </Paper>
    );
}
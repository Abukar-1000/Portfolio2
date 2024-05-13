import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box, colors } from '@mui/material';

class GradeStyle {

    constructor(grade) {
        this.grade = grade;
        let {background, foreground} = this.#calculateBgColor();
        this.bgColor = background;
        this.fgColor = foreground;

        console.log(`colors are ${this.bgColor}\t${this.fgColor}`);
    }

    #calculateBgColor() {
        const COLORS = {};
        if (!this.grade) {
            COLORS.background = "rgb(160, 231, 149, 0.35)";
            COLORS.foreground = "rgb(12, 88, 0, 1)";
        }

        this.grade = this.grade.toUpperCase();
        if (this.grade.includes("A")) {
            COLORS.background = "rgb(160, 231, 149, 0.35)";
            COLORS.foreground = "rgb(12, 88, 0, 1)";
        } else if (this.grade.includes("B")) {
            COLORS.background = "rgb(219, 231, 149, 0.35)";
            COLORS.foreground = "rgb(132, 135, 3, 1)";
        } else if (this.grade.includes("C")) {
            COLORS.background = "rgb(219, 231, 149, 0.35)";
            COLORS.foreground = "rgb(132, 135, 3, 1)";
        }

        return COLORS;
    }
}

export function Grade({grade}){
    let gradeStyle = new GradeStyle(grade);
    return (<>
        <Box >
            <Paper square={false} elevation={1} sx={{
                    padding: "1em",
                    backgroundColor: gradeStyle.bgColor
                }}>

                    <Typography variant="subtitle1" sx={{
                        color: gradeStyle.fgColor
                    }}>
                        {grade}
                    </Typography>
            </Paper>
        </Box>    
    </>)
}
export function Course({name, type, grade}){

    if (name.length > 15) {
        name = name.slice(0, 14) + "...";
    }

    return (<>
        <Box 
            sx={{
                maxWidth: "20vw",
        }}>
            <Paper             
            square={false} elevation={5} sx={{
                padding: "1em"
            }}>
                <Grid alignItems={"center"} container spacing={3}>
                    
                    <Grid item xs={6}>
                        <Typography variant="subtitle1">
                            {name}
                        </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography variant="subtitle1">
                            {type}
                        </Typography>
                    </Grid>

                    <Grid item xs={3}>
                        <Grade grade={grade} />
                    </Grid>

                </Grid>
            </Paper>
        </Box>
    </>)
}
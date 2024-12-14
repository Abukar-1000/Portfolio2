import Grid from '@mui/material/Grid'
import { Skills } from './Skills';
import { CustomCard, RowEntry } from './CustomCard';
import { DynamicContainer } from './Containers';


export function AcademicInfo({}) {

    const maxColumnsAllocated = 10;
    const allotedColumnsForASkill = 4;
    const GPA = 3.88;

    return (
        <DynamicContainer
        spacing={{sm: 1, md: 1}}
        columns={{xm: maxColumnsAllocated, sm: maxColumnsAllocated, md: maxColumnsAllocated, lg: maxColumnsAllocated}}
        breakpoints={{xm: maxColumnsAllocated, sm: maxColumnsAllocated, md: 6, lg: allotedColumnsForASkill}}
        >
            <Skills />

            <CustomCard Title={""}>
                <RowEntry src={"university.png"} Text={"Purdue University Indianapolis"} Dimensions={{width: 35, height: 35}}/>
                <RowEntry src={"data-science.png"} Text={"Computer Science B.S."} Dimensions={{width: 35, height: 35}}/>
                <RowEntry src={"geometry.png"} Text={"Mathematics Minor"} Dimensions={{width: 35, height: 35}}/>
                <RowEntry src={"diploma.PNG"} Text={"Expected: May 2025"} Dimensions={{width: 35, height: 35}}/>
                <RowEntry src={"GPA.PNG"} Text={`GPA: ${GPA}/4.0`} Dimensions={{width: 35, height: 30}}/>
            </CustomCard>

        </DynamicContainer>
    );
}
import { Grid, useMediaQuery, useTheme } from "@mui/material"
import { JobCard } from "./JobCard"


export function JobSection(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

    const jobs = [
        {
          ImgSrc: "AlFajirLogo.png",
          JobTitle: "Software Engineer",
          IsCurrent: false,
          DateRange: "Nov 2022 – Dec 2023",
          Company: "Al-Fajir",
          Location: "Indianapolis, Indiana"
        },
        {
          ImgSrc: "IULogo.png",
          JobTitle: "Software Engineer",
          IsCurrent: false,
          DateRange: "Dec 2023 – Aug 2024",
          Company: "IU Bloomington",
          Location: "Remote"
        },
        {
          ImgSrc: "SpotLogo.png",
          JobTitle: "Software Engineer",
          IsCurrent: true,
          DateRange: "Aug 2024 – Current",
          Company: "Spot Inc.",
          Location: "Indianapolis, Indiana"
        },
    ]

    return (
      <Grid
        container={isMobile? false: true} 
        gap={{
          sx: 1,
          sm: 1,
          md: 2
        }} 
        width={"100%"}
        paddingLeft={{
          sx: "none",
          sm: "none",
          md: "1rem"
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          paddingBottom: "2rem"
        }}
      >
        {jobs.map((jobs, i) => (
            <Grid 
                sx={12} sm={12} md={6} lg={4} xl={3}
                paddingTop={isMobile? "0.5rem": "none"}
            >
                <JobCard 
                key={i} 
                JobTitle={jobs.JobTitle} 
                isCurrent={jobs.IsCurrent} 
                ImgSrc={jobs.ImgSrc}
                DateRange={jobs.DateRange}
                Company={jobs.Company}  
                Location={jobs.Location}  
                />
            </Grid>
        ))}
      </Grid>
    )
}
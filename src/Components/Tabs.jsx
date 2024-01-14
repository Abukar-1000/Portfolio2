import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
};
}


export function TabContainer({content, children}) {

    let isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

    let [state, setState] = useState({
        variant: isMobile? "fullWidth" : "scrollable",
        content: <>{
            isMobile?
                <MobileTabContainer content={content} /> :
                <ComputerTabContainer content={content} />
        }</>
    });

    useEffect(() => {
        setState({
            content: <>{
                isMobile?
                    <MobileTabContainer content={content} /> :
                    <ComputerTabContainer content={content} />
            }</>
        });
    }, [useMediaQuery(useTheme().breakpoints.down('sm'))])

    return (
        <>
            {state.content}
        </>
    );
}


function ComputerTabContainer({content}) {
    const [state, setState] = useState({
        value: 0
    });

    const handleChange = (event, newValue) => {
        setState(prev => {
            return {
                ...prev,
                value: newValue
            }
        });
    };

    const tabOptions = content.map( projectData => {
        return <Tab label={projectData.field} {...a11yProps(projectData.key)} />
    })

    const tabPannels = content.map(projectData => {
        return <>
            <TabPanel value={state.value} index={projectData.key}>
                {projectData.projects}
            </TabPanel>
        </>
    })

  return (
    <Box
        mt={2}
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', maxWidth: "100%"}}
    >
    <Tabs
        orientation= "vertical"
        variant="scrollable"
        value={state.value}
        textColor='secondary'
        indicatorColor='secondary'
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', minWidth: "200px" }}
    >
        {tabOptions}
    </Tabs>
        {state.divider}
        {tabPannels}
    </Box>
  );
}


function MobileTabContainer({content}) {

    const [state, setState] = useState({
        value: 0
    });

    const handleChange = (event, newValue) => {
        setState(prev => {
            return {
                ...prev,
                value: newValue
            }
        });
    };

    const tabOptions = content.map( projectData => {
        return <Tab label={projectData.field} {...a11yProps(projectData.key)} />
    })

    const tabPannels = content.map(projectData => {
        return <>
            <TabPanel value={state.value} index={projectData.key}>
                {projectData.projects}
            </TabPanel>
        </>
    })

  return (
    <Box sx={{ maxWidth: { xs: window.innerWidth }, bgcolor: 'background.paper' }}>
        <Box sx={{ maxWidth: { xs: "100%" }, bgcolor: 'background.paper' }}>
        
            <Tabs
                value={state.value}
                onChange={handleChange}
                variant="scrollable"
                allowScrollButtonsMobile
                aria-label="scrollable auto tabs example"
            >
                {tabOptions}
            </Tabs>
        </Box>
        {tabPannels}
    </Box>
  );
}
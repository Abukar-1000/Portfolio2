import LinkedCameraRoundedIcon from '@mui/icons-material/LinkedCameraRounded';
import WifiTetheringRoundedIcon from '@mui/icons-material/WifiTetheringRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import DeveloperBoardRoundedIcon from '@mui/icons-material/DeveloperBoardRounded';
import WysiwygRoundedIcon from '@mui/icons-material/WysiwygRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import SettingsSystemDaydreamRoundedIcon from '@mui/icons-material/SettingsSystemDaydreamRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import PieChartOutlineRoundedIcon from '@mui/icons-material/PieChartOutlineRounded';


// optional for DS
import AlignVerticalBottomRoundedIcon from '@mui/icons-material/AlignVerticalBottomRounded';

const skillMap = [
    {
        abbreviation: "CV",
        icon: <LinkedCameraRoundedIcon 
                    fontSize='large'
                    color="secondary"
                />,
        fullText: "Computer Vision"
    },

    {
        abbreviation: "NET",
        icon: <WifiTetheringRoundedIcon 
                fontSize='large'
                color="secondary"
            />,
        fullText: "Computer Networking"
    },

    {
        abbreviation: "SWE",
        icon: <TerminalRoundedIcon
                fontSize='large'
                color="secondary"
            />,
        fullText: "Software Engineering"
    },

    {
        abbreviation: "SD",
        icon: <WebhookRoundedIcon
                fontSize='large'
                color="secondary"
            />,
        fullText: "Software Design"
    },

    {
        abbreviation: "ARCH",
        icon: <DeveloperBoardRoundedIcon
                fontSize='large'
                color="secondary"
            />,
        fullText: "Software Architecture"
    },

    {
        abbreviation: "FEND",
        icon: <ViewQuiltRoundedIcon
                fontSize='large'
                color="secondary"
            />,
        fullText: "Frontend Development"
    },

    {
        abbreviation: "BEND",
        icon: <DeveloperBoardRoundedIcon
                fontSize='large'
                color="secondary"
            />,
        fullText: "Backend Development"
    },

    {
        abbreviation: "DB",
        icon: <DnsRoundedIcon
                fontSize='large'
                color="secondary"
            />,
        fullText: "Database Systems"
    },

    {
        abbreviation: "OS",
        icon: <SettingsSystemDaydreamRoundedIcon
                fontSize='large'
                color="secondary"
            />,
        fullText: "Opperating Systems"
    },

    {
        abbreviation: "DS",
        icon: <SettingsSystemDaydreamRoundedIcon
                fontSize='large'
                color="secondary"
            />,
        fullText: "Data Science"
    },

    {
        abbreviation: "VC",
        icon: <AccountTreeRoundedIcon
                fontSize='large'
                color="secondary"
            />,
        fullText: "GIT Version Control"
    },

    {
        abbreviation: "QA",
        icon: <InfoRoundedIcon
                fontSize='large'
                color="secondary"
            />,
        fullText: "Quality Assurance"
    },

    {
        abbreviation: "PM",
        icon: <ManageAccountsRoundedIcon
                fontSize='large'
                color="secondary"
            />,
        fullText: "Project Management"
    },
]

export default skillMap;
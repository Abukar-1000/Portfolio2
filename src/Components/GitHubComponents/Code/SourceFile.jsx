import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export default function SourceFile({ metadata, setFile, hideFile, isSubFile=false }) {
    const name = metadata?.name || "file";
    const location = metadata?.location || "";
    const id = metadata?.fileid;
    const isVisible =  !hideFile || true;

    if (metadata && isVisible) {
        return (
            <ListItem 
                key={id} 
                disablePadding
                onClick={e => setFile(location)}
                sx={{ pl: isSubFile? 4: "auto" }}
            >
                <ListItemButton>
                    <ListItemIcon>
                        <DescriptionOutlinedIcon color="secondary"/>
                    </ListItemIcon>
                    <ListItemText primary={name} />
                </ListItemButton>
            </ListItem>
        );
    }

    return <></>;
}
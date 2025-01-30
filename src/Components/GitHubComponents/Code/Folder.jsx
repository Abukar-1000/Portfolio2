import { Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import SourceFile from "./SourceFile";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export default function Folder({ metadata, setFile, isSubFolder=false }) {
    const type = metadata?.type || false;
    const name = metadata?.name;
    const [ open, setOpen ] = useState(false);

    if (type === "file") {
        return <SourceFile metadata={metadata} setFile={setFile} isSubFile={true}/>
    }

    if (type === "folder") {
        return (
            <>
                <List
                    sx={{ pl: isSubFolder? 4 : "auto" }}
                >
                    <ListItemButton 
                        onClick={e => setOpen(!open)}
                    >
                        <ListItemIcon>
                            <FolderOutlinedIcon color="secondary"/>
                        </ListItemIcon>
                        <ListItemText primary={name} />
                        { open? <ExpandLess color="secondary"/> : <ExpandMore color="secondary"/>}
                    </ListItemButton>
                    
                    <Collapse in={open}>
                        {
                            metadata?.files && (
                                metadata?.files?.map(fileMetadata => (
                                    <Folder metadata={fileMetadata} setFile={setFile} isSubFolder={true}/>
                                ))
                            )
                        }
                    </Collapse>
                </List>
            </>
        );
    }
    
    return <></>;
}
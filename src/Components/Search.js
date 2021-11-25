import "./Search.css";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
    return (
        <div className="Search-wrapper">
            <TextField  id="outlined-basic" label="Search" variant="outlined" sx={{width: 450}} />
            <IconButton>
                <SearchIcon />
            </IconButton>
        </div>
    )
}
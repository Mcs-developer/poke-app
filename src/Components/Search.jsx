import "./Search.css";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from "react";
import { AppContext } from "../App";

export default function Search() {
    const appContext = useContext(AppContext);

    function handleOnChange(event) {
        appContext.changeText(event.target.value);
    }

    return (
        <div className="Search-wrapper">
            <TextField onChange={handleOnChange} id="outlined-basic" label="Search" variant="outlined" sx={{ width: 450 }} />
            <IconButton onClick={appContext.makeSearch}>
                <SearchIcon />
            </IconButton>
        </div>
    )
}
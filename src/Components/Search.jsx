import "./Search.css";
import { TextField } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../Context/AppProvider";


export default function Search() {
    const { searchText, setSearchText } = useContext(AppContext);

    function handleOnChange(event) {
        setSearchText(event.target.value);
    }

    return (
        <div className="Search-wrapper">
            <TextField value={searchText} onChange={handleOnChange} id="outlined-basic" label="Search" variant="outlined" sx={{ width: 450 }} />
        </div>
    )
}
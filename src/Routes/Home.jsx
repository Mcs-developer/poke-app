import "./Home.css"
import Search from "../Components/Search";
import List from "../Components/List";
import { useContext } from "react";
import { AppContext } from "../Context/AppProvider";

function Home() {
    const { pokemons } = useContext(AppContext);
    
    return (
        <div className="Home-wrapper">
            <Search />
            <div className="poke-list-wrapper">
                <List pokemons={pokemons} ></List>
            </div>
        </div>
    );
}

export default Home;
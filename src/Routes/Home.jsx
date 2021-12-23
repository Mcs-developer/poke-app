import "./Home.css"
import Search from "../Components/Search";
import List from "../Components/List";

function Home() {
    
    return (
        <div className="Home-wrapper">
            <Search />
            <div className="poke-list-wrapper">
                <List></List>
            </div>
        </div>
    );
}

export default Home;
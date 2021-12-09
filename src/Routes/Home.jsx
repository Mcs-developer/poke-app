import "./Home.css"
import Search from "../Components/Search";

function Home() {
    return (
        <div className="Home-wrapper">
            <Search />
            <div className="poke-list-wrapper">
            </div>
        </div>
    );
}

export default Home;
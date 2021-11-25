import "./App.css";
import Home from "./Routes/Home";
import Favorites from "./Routes/Favorites";
import { Routes, Route } from "react-router-dom";
import ButtonAppBar from "./Components/AppBar";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

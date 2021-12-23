import "./App.css";
import Home from "./Routes/Home";
import Favorites from "./Routes/Favorites";
import { Routes, Route } from "react-router-dom";
import ButtonAppBar from "./Components/AppBar";
import React, { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppProvider";
import Spinner from "./Components/Spinner";

function App() {
  const { setPokemons, isLoading, setIsLoading } = useContext(AppContext);
  

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const data = require('./poke_response.json');

      setPokemons(data.results);
      setIsLoading(false);
    }, 2000);
  }, [setIsLoading, setPokemons]);

  return (
    <div>
       {isLoading && (
        <Spinner></Spinner>
      )}
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
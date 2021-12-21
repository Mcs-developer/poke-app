import "./App.css";
import Home from "./Routes/Home";
import Favorites from "./Routes/Favorites";
import { Routes, Route } from "react-router-dom";
import ButtonAppBar from "./Components/AppBar";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context/AppProvider";

function App() {
  const { getPokeList, isLoading, setIsLoading } = useContext(AppContext);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      getPokeList();
    }, 2000);
  },[]);

  return (
    <div>
      <ButtonAppBar />
      {isLoading && (
        <div>
          Spinner
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
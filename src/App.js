import "./App.css";
import Home from "./Routes/Home";
import Favorites from "./Routes/Favorites";
import { Routes, Route } from "react-router-dom";
import ButtonAppBar from "./Components/AppBar";
import React, { useState } from "react";

export const AppContext = React.createContext({
  searchText: '',
  isLoading: false
});

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const setIsLoadingApp = (value) => {
    setIsLoading(() => value);
  }

  const changeText = (text) => {
    setSearchText(() => text);
  }

  const makeSearch = () => {
    fetch('https://pokeapi.co/api/v2/')
  }

  return (
    <AppContext.Provider value={{ changeText, makeSearch }}>
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
    </AppContext.Provider>
  );
}

export default App;
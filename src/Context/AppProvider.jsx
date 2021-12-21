import React, { useState } from "react";
export const AppContext = React.createContext();

function AppProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState('');

    const getPokeList = () => {
        console.log('doing request...');
    }

    const providerValue = {
        isLoading,
        setIsLoading,
        searchText,
        setSearchText,
        getPokeList
    };

    return (
        <AppContext.Provider value={providerValue} >
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;
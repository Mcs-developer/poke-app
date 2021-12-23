import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppProvider";

function List() {
    const { searchText, pokemons } = useContext(AppContext);
    const [pokemonListFiltered, setPokemonList] = useState(pokemons);

    useEffect(() => {
        const listFiltered = searchText !== '' ? pokemons.filter(p => p.name.includes(searchText)) : pokemons.slice();
        setPokemonList(listFiltered);
    }, [searchText, pokemons]);

    return (
        <ul>
            {
                pokemonListFiltered.map((pokemon, index) =>
                    <li key={index}>{pokemon.name}</li>
                )
            }
        </ul>
    )
}

export default List;
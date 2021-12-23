import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppProvider";

function List(props) {
    const { searchText } = useContext(AppContext);
    const list = props.pokemons;
    const [pokemonListFiltered, setPokemonList] = useState([]);

    useEffect(() => {
        setPokemonList(list.filter(p => p.name.includes(searchText)));
    }, [searchText]);

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
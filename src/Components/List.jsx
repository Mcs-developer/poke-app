function List(props) {
    const list = props.pokemons;

    return (
        <ul>
            {
                list.map((pokemon, index) =>
                    <li key={index}>{pokemon.name}</li>
                )
            }
        </ul>
    )
}

export default List;
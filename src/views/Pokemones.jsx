import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
    const [pokemones, setPokemones] = useState([]);
    const [pokemonSelect, setPokemonSelect] = useState("");
    const navigate = useNavigate();
    const url = "https://pokeapi.co/api/v2/pokemon";

    const getData = async () => {
        const res = await fetch(url);
        const {results} = await res.json();
        setPokemones(results);
    }

    const pokemonDetail = async () => {
        if (pokemonSelect) navigate(`/pokemones/${pokemonSelect}`);
        else alert("Debe seleccionar un pokemon");
      };

    useEffect(() =>{
        getData();
    }, [])

    return(
        <div className="mt-5 text-center">
            <h1>
                Selecciona un pokemón
            </h1>
          <div className="w-50 mx-auto">
            <select
             id="selectPokemon"
             value={pokemonSelect}
             className="form-select text-center"
             onChange={({ target }) => setPokemonSelect(target.value)}
             >
            <option
            value=""
            disabled
            >
                Pokemons
            </option>
            {pokemones.map(({name}, id ) =>(
                <option
                key={id}
                value={name}
                >
                    {name}
                </option>
            ))}
            </select>
            <Button
          onClick={pokemonDetail}
          variant="dark"
          className="mt-3"
        >
          Ver Detalles
        </Button>
          </div>
        </div>
    );
};
export default Pokemones;
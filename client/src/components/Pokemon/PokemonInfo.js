import PokemonImage from "../PokemonImage";
import PokemonData from "./PokemonData";
import Types from "../Types";
import StatsContainer from "../StatsContainer";

const PokemonInfo = ({ pokemon }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-2/12 text-center">
        <p className="text-slate-900 text-2xl">{String(pokemon.nationalPokedexNumber).padStart(3, 0)}</p>
        <p className="text-slate-900 text-4xl">{pokemon.name}</p>
      </div>
      <div className="flex flex-row m-10 w-full justify-center items-center">
        <div className="w-1/5">
          {<StatsContainer 
            hp={pokemon.hp}
            attack={pokemon.attack}
            defense={pokemon.defense}
            specialAttack={pokemon.specialAttack}
            specialDefense={pokemon.specialDefense}
            speed={pokemon.speed}
          />}
        </div>
        <div className="flex w-1/3 justify-center items-center">
          <div className="flex h-72 w-72 justify-center items-center">
            <PokemonImage 
              pokemonUrl={pokemon.pictureUrl}
              name={pokemon.name}
              isLegendary={pokemon.isLegendary}
              isMythical={pokemon.isMythical}
            />
          </div>
        </div>
        <div className="w-1/5">
          <PokemonData 
            height={pokemon.height}
            wheight={pokemon.weight}
            abilities={pokemon.abilities}
            types={pokemon.types}
            description={pokemon.description}
          />
        </div>
      </div>
      <div className="w-2/3">
        <Types 
          types={pokemon.types}
        />
      </div>
    </div>
  );
};

export default PokemonInfo;
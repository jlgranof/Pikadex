const PokemonData = ({
  height,
  wheight, 
  abilities,
  description
}) => {
  return (
    <div className="w-full flex flex-col m-10">
      <div className="m-3">
        <p className="text-xl">{description}</p>
      </div>
      <div className="flex flex-col m-3">
        <p className="text-xl">Height: {height}</p>
        <p className="text-xl">Weight: {wheight}</p>
      </div>
      <div className="flex flex-col m-3">
        <p className="text-2xl">Abilities</p>
        <p className="text-xl">{abilities}</p>
      </div>
    </div>
  );
};

export default PokemonData;
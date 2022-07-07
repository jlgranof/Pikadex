import clsx from 'clsx';

const PokemonImage = ({
  pokemonUrl,
  name,
  isLegendary,
  isMythical
}) => {
  let color;
  if (isLegendary) color ='bg-amber-400'
  else if (isMythical) color = 'bg-indigo-700'
  else color = 'bg-black'

  let span = 'absolute rounded-full bg-white top-0 left-0 h-52 w-52'

  return (
    <div className="m-2.5 rounded-full bg-white relative h-52 w-52">
      <div className={clsx(color, 'rounded-full absolute h-48 top-1.5 left-1.5 z-10')}>
        <img className='w-full h-52' src={pokemonUrl} alt={name}/>
      </div>
      <span className={clsx(span, 'blur-sm')}></span>
      <span className={clsx(span, 'blur-md')}></span>
      <span className={clsx(span, 'blur-xl')}></span>
      <span className={clsx(span, 'blur-3xl')}></span>
    </div>
  );
};

export default PokemonImage;
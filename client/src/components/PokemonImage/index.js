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

  let span = 'absolute rounded-full bg-white top-0 left-0 h-full w-full'


  return (
    <div className="flex rounded-full bg-white relative h-5/6 w-5/6 justify-center">
      <div className={clsx(color, 'flex rounded-full absolute z-10 h-full w-full justify-center')} >
        <img className='w-full h-full' src={pokemonUrl} alt={name}/>
      </div>
      <span className={clsx(span, 'blur-sm')}></span>
      <span className={clsx(span, 'blur-md')}></span>
      <span className={clsx(span, 'blur-xl')}></span>
      <span className={clsx(span, 'blur-3xl')}></span>
    </div>
  );
};

export default PokemonImage;
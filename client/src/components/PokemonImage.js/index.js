import clsx from 'clsx';

const PokemonImage = ({
  pokemonUrl,
  name,
  isLegendary,
  isMythical,
  type
}) => {
  let color;
  if (isLegendary) color ='bg-amber-400'
  else if (isMythical) color = 'bg-indigo-700'
  else color = 'bg-black'

  let span = 'absolute rounded-full bg-white top-0 left-0'

  const size = [
    {
      first: 'h-80 w-80',
      second: 'h-72',
      third: 'h-80'
    },
    {
      first: 'h-52 w-52',
      second: 'h-48',
      third: 'h-52'
    }
  ]


  return (
    <div className={clsx(size[type].first, "m-2.5 mb-3.5 rounded-full bg-white relative")}>
      <div className={clsx(color, size[type].second, 'rounded-full absolute top-1.5 left-1.5 z-10')}>
        <img className={clsx(size[type].third, 'w-full')} src={pokemonUrl} alt={name}/>
      </div>
      <span className={clsx(span, size[type].first, 'blur-sm')}></span>
      <span className={clsx(span, size[type].first, 'blur-md')}></span>
      <span className={clsx(span, size[type].first, 'blur-xl')}></span>
      <span className={clsx(span, size[type].first, 'blur-3xl')}></span>
    </div>
  );
};

export default PokemonImage;
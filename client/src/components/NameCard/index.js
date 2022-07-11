const NameCard = ({
  nationalPokedexNumber,
  name,
  types, 
  level=null
}) => {
  return (
    <div className="bg-gradient-to-bl from-slate-700 to-slate-300 info-container-clip rounded-2xl border-t-4 border-b-2 border-x-2 text-white text-xl h-full">
      {level && <p className="p-1">Level: {level}</p>}
      {!level && <div className="p-2"></div>}
      <p className='m-1.5 p-1 text-2xl'>{String(nationalPokedexNumber).padStart(3, 0)}</p>
      <h1 className='m-2.5 p-1 text-3xl uppercase drop-shadow-lg'>{name}</h1>
      <div className="flex flex-row justify-around text-black">
        {types.map(type => <p key={type.type.name} className='text-2xl'>{type.type.name}</p>)}
      </div>
    </div>
  );
};

export default NameCard;
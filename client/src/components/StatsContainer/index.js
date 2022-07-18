const StatsContainer = ({
  hp,
  attack,
  defense,
  specialAttack,
  specialDefense,
  speed
}) => {
  return (
    <div className='flex flex-col'>
      <p>Stats</p>
      <p>HP: {hp}</p>
      <p>Attack: {attack}</p>
      <p>Defense: {defense}</p>
      <p>Special Attack: {specialAttack}</p>
      <p>Special Defense: {specialDefense}</p>
      <p>Speed: {speed}</p>
      <p>Total: {hp + attack + defense + specialAttack + specialDefense + speed}</p>
    </div>
  );
};

export default StatsContainer;
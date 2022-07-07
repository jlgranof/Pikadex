const Header = () => {
  return (
    <div className="flex justify-between bg-black p-3 mb-3 items-center header">
      <div className="text-white text-2xl">Pokedex</div>
      <div className="text-white text-2xl">Leaderboard</div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <img src='https://cdn.icon-icons.com/icons2/853/PNG/128/Pokemon_Go-16_icon-icons.com_67643.png' alt='Pikadex'/>
          <h1 className="text-white text-2xl">The Pikadex</h1>
        </div>
      </div>
      <div className="text-white text-2xl">User/Login</div>
      <div className="text-white text-2xl">Logout/Signup</div>
    </div>
  );
};

export default Header;
const UserInfo = ({
  currentUser,
  user
}) => {
  const date = new Date(user.joined)

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col w-3/5 items-center m-10 border-slate-500 border-2 rounded-3xl'>
        {currentUser && <button 
          className='m-2 bg-white w-5/12 rounded-xl'
        >Edit</button>}
          <img 
            className='w-7/12 py-2'
            src={user.avatarUrl} 
            alt={user.username}
          />
      </div>

      <div className='flex flex-col text-center'>
        <p className='m-2 text-3xl'>{user.username}</p>
        <p className='m-2 text-xl'>{user.email}</p>
      </div>

      <div className='flex text-center m-10 text-xl'>
        <p>User Since: {date.toLocaleDateString()}</p>
      </div>

      <div className='flex flex-col text-center m-10 text-xl'>
        <p>Number of Pokedexes: </p>
        <p>Total Number of Pokemon: </p>
      </div>
    </div>
  );
};

export default UserInfo;
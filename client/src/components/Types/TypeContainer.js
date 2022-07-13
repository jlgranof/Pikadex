import clsx from "clsx";

const TypeContainer = ({
  title,
  types,
  cols
}) => {
  const currentTypes = types.map((type, i) => <p key={i} className='m-2'>{type}</p>)
 
  return (
    <div className="m-4">
      <p className="text-2xl">{title}</p>
      <div className={clsx(`grid grid-cols-${cols}`)}>
        {currentTypes}
      </div>
    </div>
  );
};

export default TypeContainer;
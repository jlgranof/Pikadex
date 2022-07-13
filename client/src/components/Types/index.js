import { getTypes } from "../../uitls/types";

const Types = ({
  types
}) => {
  const currentTypes = types.map(t => (
      <p key={t.type.name} className='m-2'>{t.type.name}</p>
    ));

  const weaknesses = getTypes(types, 'weakness');
  const weaknessTypes = weaknesses.map(t => (
    <p k={t} className='m-2'>{t}</p>
  ));

  const strengths = getTypes(types, 'strengths');
  const strengthTypes = strengths.map(t => (
    <p k={t} className='m-2'>{t}</p>
  ));
  

  return (
    <div className="flex flex-row w-full justify-between text-center">
      <div className="m-4">
        <p className="text-2xl">Weaknesses</p>
        <div className="grid grid-cols-3">
          {weaknessTypes}
        </div>
      </div>
      <div className="m-4">
        <p className="text-2xl">Types</p>
        <div className="grid grid-cols-2">
          {currentTypes}
        </div>
      </div>
      <div className="m-4">
        <p className="text-2xl">Strengths</p>
        <div className="grid grid-cols-3">
          {strengthTypes}
        </div>
      </div>
    </div>
  );
};

export default Types;
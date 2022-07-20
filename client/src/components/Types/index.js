import { getTypes } from "../../utils/types";

import TypeContainer from "./TypeContainer";

const Types = ({
  types
}) => {
  const currentTypes = types.map(t => t.type.name);
  const weaknesses = getTypes(types, 'weakness');
  const strengths = getTypes(types, 'strengths');

  

  return (
    <div className="flex flex-row w-full justify-between text-center">
      <TypeContainer 
        title='Weaknesses'
        types={weaknesses}
        cols={3}
      />
      <TypeContainer 
        title='Types'
        types={currentTypes}
        cols={2}
      />
      <TypeContainer
        title='Strengths'
        types={strengths}
        cols={3}
      />
    </div>
  );
};

export default Types;
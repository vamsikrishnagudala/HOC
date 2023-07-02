import React, { useState } from "react";
const Hoc = (OriginalComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);
    const countHandler = () => {
      setCount((previousCount) => previousCount + 1);
    };
    return <OriginalComponent counter={count} handler={countHandler} />;
  }; //end of NewComponent
  return NewComponent; //returns the NewComponent which is enhanced
};
export default Hoc;

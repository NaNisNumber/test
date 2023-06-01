import React from "react";

const RandomAssComponent = () => {
  const doesSmh = function () {
    return [1, 2, 3, 4];
  };

  return (
    <div>
      RandomAssComponent, {doesSmh()} {{ s: "g" }}
    </div>
  );
};

export default RandomAssComponent;

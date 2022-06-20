import React from "react";

function Displayform(props) {
  const { name, department, rating } = props;
  console.log(name);

  return (
    <div className="inner-container">
      <h3>
        Name:{name}|Department:{department}|Rating:{rating}
      </h3>
    </div>
  );
}

export default Displayform;

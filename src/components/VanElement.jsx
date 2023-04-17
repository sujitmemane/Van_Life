import React from "react";

const VanElement = (props) => {
  return (
    <div className="w-1/4 border m-2 p-8">
      <img src={props.imageUrl} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
      </div>
      <button> {props.type} </button>
    </div>
  );
};

export default VanElement;

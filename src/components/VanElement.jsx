import React from "react";
import { Link } from "react-router-dom";
const VanElement = (props) => {
  console.log(props.search);
  console.log(props.filterType);
  return (
    <div className="w-3/4  m-2 px-1 ">
      <Link
        to={`${props.id}`}
        state={{ search: props.search, type: props.filterType }}
      >
        <img src={props.imageUrl} className="w-full h-64  rounded-lg  " />
        <div className="mt-2 flex flex-col items-start md:flex-row justify-between md:items-center">
          <h3 className="text-xl md:text-2xl font-bold">{props.name}</h3>
          <p className="text-xl">Rs. {props.price}</p>
        </div>
        <button className={`px-8 py-2 text-white ${props.type} rounded mt-4`}>
          {props.type}
        </button>
      </Link>
    </div>
  );
};

export default VanElement;

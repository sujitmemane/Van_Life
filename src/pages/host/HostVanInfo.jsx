import React from "react";
import { useOutletContext } from "react-router-dom";
const HostVanInfo = () => {
  const { currentVan } = useOutletContext();
  console.log(currentVan);
  return (
    <div className="my-4 py-5">
      <h1>
        <strong>Name</strong> : {currentVan.name}
      </h1>
      <h1>
        <strong>Category</strong> : {currentVan.type}
      </h1>
      <h1 className="max-w-xl">
        <strong>Description</strong> : {currentVan.description}
      </h1>
      <h1>
        <strong>Visibility</strong> : Public
      </h1>
    </div>
  );
};

export default HostVanInfo;

import React from "react";
import { useOutletContext } from "react-router-dom";
const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();
  const imageUrl = currentVan.imageUrl;

  return (
    <div className="my-4 py-4 ">
      <img src={imageUrl} className="w-24 h-24 rounded" />
    </div>
  );
};

export default HostVanPhotos;

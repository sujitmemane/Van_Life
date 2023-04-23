import React from "react";
import { useOutletContext } from "react-router-dom";
const HostVanPricing = () => {
  const { currentVan } = useOutletContext();

  return (
    <div>
      <h1 className="py-4 my-4  text-2xl">Rs.{currentVan.price}/day</h1>
    </div>
  );
};

export default HostVanPricing;

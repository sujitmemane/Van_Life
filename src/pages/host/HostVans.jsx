import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vansList, setVansList] = useState([]);
  console.log("Yeah,I am from Host Vans");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/host/vans");
      const result = await response.json();
      setVansList(result.vans);
    };
    fetchData();
  }, []);
  const vanItems = vansList.map((van) => {
    return (
      <Link to={`${van.id}`} key={van.id}>
        <div className="flex  my-8 border justify-left space-x-8 cursor-pointer">
          <img src={van.imageUrl} className="h-28 w-28" />
          <div>
            <h1 className="text-2xl">{van.name}</h1>
            <h3>Rs. {van.price}/month</h3>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div>
      <h1 className="text-4xl font-bold my-4">Your Listed Vans</h1>
      {vanItems}
    </div>
  );
};

export default HostVans;

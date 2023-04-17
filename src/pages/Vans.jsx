import React, { useEffect, useState } from "react";
import VanElement from "../components/VanElement";
const Vans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const respone = await fetch("/api/vans");
      const result = await respone.json();
      const vansData = result.vans;
      setVans(vansData);
      console.log(vansData);
    };
    fetchAPI();
  }, []);

  //   description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!"
  // ​​
  // id: "1"
  // ​​
  // imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png"
  // ​​
  // name: "Modest Explorer"
  // ​​
  // price: 60
  // ​​
  // type: "simple"
  const vansElements = vans.map((van) => (
    <VanElement
      name={van.name}
      id={van.id}
      key={van.id}
      imageUrl={van.imageUrl}
      price={van.price}
      type={van.type}
    />
  ));
  return (
    <div className="mx-auto container mt-8">
      <h1 className="text-5xl text-center font-bold">
        Explore our van options
      </h1>
      <div className="flex flex-row items-center justify-around space-x-12 flex-wrap border p-8">
        {vansElements}
      </div>
    </div>
  );
};

export default Vans;

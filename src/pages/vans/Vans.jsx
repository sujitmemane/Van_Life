import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import VanElement from "../../components/VanElement";
const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("age"));
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
    <div className="mx-auto container mt-24">
      <h1 className="text-3xl  max-w-xm px-4 md:text-5xl font-bold capitalize text-center mt-8">
        Explore our vans here...
      </h1>
      <div className=" grid grid-cols-2 md:grid-cols-3 justify-items-center items-center my-4">
        {vansElements}
      </div>
    </div>
  );
};

export default Vans;

import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import VanElement from "../../components/VanElement";
const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

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
  console.log(typeFilter);
  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vansElements = displayedVans.map((van) => (
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
      <ul className="px-8 m-4 flex flex-row space-x-8">
        <li>
          <Link
            to="?type=simple"
            className={`px-8 py-2 text-white simple rounded mt-4`}
          >
            {" "}
            Simple{" "}
          </Link>
        </li>
        <li>
          <Link
            to="?type=rugged"
            className={`px-8 py-2 text-white rugged rounded mt-4`}
          >
            {" "}
            Rugged{" "}
          </Link>
        </li>
        <li>
          <Link
            to="?type=luxury"
            className={`px-8 py-2 text-white luxury rounded mt-4`}
          >
            {" "}
            Luxury{" "}
          </Link>
        </li>
        <li>
          <Link to="."> Clear All </Link>
        </li>
      </ul>
      <div className=" grid grid-cols-2 md:grid-cols-3 justify-items-center items-center my-4">
        {vansElements}
      </div>
    </div>
  );
};

export default Vans;

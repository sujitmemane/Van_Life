import React from "react";
import { Link } from "react-router-dom";
import Hero from "./../assets/home-hero.png";
const Home = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen p-24 bg-gradient-to-b from-black via-black-opacity-46 to-transparent
  bg-no-repeat bg-center bg-cover mt-8"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="container mx-auto  mt-8 ">
        <h1 className="bold font-bold uppercase  text-6xl max-w-3xl text-white underline-offset-6 mb-4">
          You got the travel plans, we got the travel vans
        </h1>
        <p className="text-2xl max-w-3xl text-white max-w-xl underline-offset-3 mb-12">
          Add adventure to your life by joining the Vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to="/vans"
          className="bg-[#FF8C38]  text-white px-8 py-4  rounded text-md shadow-lg"
        >
          Find Your Vans
        </Link>
      </div>
    </div>
  );
};

export default Home;

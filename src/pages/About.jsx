import React from "react";
import AboutImage from "./../assets/about-hero.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="mt-16">
      <img
        src={AboutImage}
        className="object-cover rounded shadow  w-[1380px] mx-auto bg-gradient-to-b from-black via-black-opacity-46 to-transparent"
      />

      <div className="container mx-auto my-8 ">
        <div className="flex flex-col justify-between items-start space-y-4">
          <h1 className="text-3xl px-2 md:text-5xl font-bold max-w-4xl">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="px-2 text-sm md:text-md max-w-5xl P-4">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="px-2 text-sm md:text-md  max-w-5xl">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="bg-[#FFCC8D] text-[#161616] p-12 md:p-12 my-4 rounded">
          <h1 className="text-3xl font-bold max-w-md my-4 md:my-4">
            Your destination is waiting. Your van is ready.
          </h1>
          <Link
            className="bg-[#161616] text-white px-8 py-4 rounded my-12"
            to="/vans"
          >
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

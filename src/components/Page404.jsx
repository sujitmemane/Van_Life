import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <div className="container mx-auto my-24 flex flex-col items-center justify-between space-y-8">
        <h1 className="text-3xl max-w-md uppercase font-bold text-center">
          Sorry, the page you were looking for was not found!
        </h1>
        <Link
          to="/"
          className="px-12 py-3 bg-black text-white text-md  font-bold rounded"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;

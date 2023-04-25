import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const VanDetails = () => {
  const params = useParams();
  const location = useLocation();

  const search = location.state?.search || "";
  const filter = location.state?.type || "all";
  console.log(location);
  console.log(filter);
  const [vanData, setVanData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/vans/${params.id}`);
      const result = await response.json();
      setVanData(result.vans);
    };
    fetchData();
  }, [params.id]);

  console.log(vanData);

  return (
    <div className="container mx-auto mt-24">
      <Link to={`..?${search}`} relative="path" className="m-98 text-3xl ">
        &larr; <span>{`Back to ${filter}`} vans</span>
      </Link>
      {vanData ? (
        <div className="container  mx-auto p-8">
          <img
            src={vanData.imageUrl}
            alt={vanData.name}
            className="w-48 h-48 rounded-lg"
          />
          <button
            className={`px-8 py-2 text-white ${vanData.type} rounded my-4`}
          >
            {vanData.type}
          </button>
          <p className="text-3xl font-bold">Rs {vanData.price} / Day</p>
          <p className="text-md my-4 max-w-sm">{vanData.description}</p>
          <button className="bg-[#ff8c38] text-white text-lg px-8 py-2 rounded">
            Rent this Van
          </button>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default VanDetails;

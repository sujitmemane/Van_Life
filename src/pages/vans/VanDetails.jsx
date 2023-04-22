import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VanDetails = () => {
  const params = useParams();
  const [vanData, setVanData] = useState(null);

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
    <div className="container mx-auto">
      {vanData ? (
        <div className="container w-[920px] mx-auto p-8">
          <img
            src={vanData.imageUrl}
            alt={vanData.name}
            className="w-full rounded-lg"
          />
          <button
            className={`px-8 py-2 text-white ${vanData.type} rounded my-4`}
          >
            {vanData.type}
          </button>
          <p className="text-3xl font-bold">Rs {vanData.price} / Day</p>
          <p className="text-md my-4">{vanData.description}</p>
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

import React from "react";
import { useParams } from "react-router-dom";

export default function HostVanDetail() {
  /**
   * Challenge (not optional!): build the shared UI portion of the
   * Host Van Detail page. This is
   *
   * Optional portion: also style it to look like the design.
   *
   * For now, get the data from a request to `/api/host/vans/:id`
   * and display the van image, name, price, type
   */
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/host/vans/${id}`);
      const data = await response.json();
      setCurrentVan(data.vans);
    };
    fetchData();
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="flex flex-row space-x-4 items-center justify-start">
        <img src={currentVan.imageUrl} width={150} />
        <div>
          <p className={`px-8 py-2 text-white ${currentVan.type} rounded mt-4`}>
            {currentVan.type}
          </p>
          <h2>{currentVan.name}</h2>
          <p>{currentVan.price}</p>
        </div>
      </div>
    </div>
  );
}

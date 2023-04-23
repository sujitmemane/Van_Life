import React from "react";
import { useParams } from "react-router-dom";
import { NavLink, Link, Outlet } from "react-router-dom";
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
      <Link to=".." relative="path" className="">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="flex flex-row space-x-4 items-startjustify-start p-2">
        <img src={currentVan.imageUrl} className="w-48 h-48 rounded" />
        <div>
          <p
            className={`px-8 py-2 text-center my-4 text-white ${currentVan.type} rounded mt-4`}
          >
            {currentVan.type}
          </p>
          <h2 className="text-3xl">{currentVan.name}</h2>
          <p>{currentVan.price}</p>
        </div>
      </div>
      <ul className="flex flex-row  space-x-24">
        <li>
          <NavLink
            end
            to="."
            className={({ isActive }) => (isActive ? "text-[#FFCC8D]" : "")}
          >
            Info
          </NavLink>
        </li>
        <li>
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive ? "text-[#FFCC8D] font-bold" : ""
            }
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="photos"
            className={({ isActive }) => (isActive ? "text-[#FFCC8D]" : "")}
          >
            Photos
          </NavLink>
        </li>
      </ul>
      <Outlet context={{ currentVan }} />
    </div>
  );
}

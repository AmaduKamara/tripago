import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const TripList = () => {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips } = useFetch(url);

  console.log(trips);

  return (
    <div className="w-1/2 text-left mb-16 flex items-center justify-center">
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-semibold text-center">Trip List</h2>
          <div className="flex">
            <button
              onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
              className="py-4 px-160 border shadow-md px-5 mr-5"
            >
              Europe Trips
            </button>
            <button
              onClick={() => setUrl("http://localhost:3000/trips")}
              className="py-4 px-160 border shadow-md px-5"
            >
              All Trips
            </button>
          </div>
        </div>
        <ul className="mt-10">
          {trips &&
            trips.map((trip) => (
              <li
                key={trip.id}
                className="p-10 shadow-md mb-8 rounded-md border"
              >
                <h3 className="text-2xl font-semibold text-gray-600">
                  {trip.title}
                </h3>
                <p className="text-teal-400 mt-5 text-xl">{trip.price}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TripList;

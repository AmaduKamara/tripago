import React, { useState, useEffect } from "react";

const TripList = () => {
  const [trips, setTrips] = useState([]);

  console.log(trips);

  useEffect(() => {
    fetch("http://localhost:3000/trips")
      .then((response) => response.json())
      .then((json) => setTrips(json));
  }, []);

  return (
    <div className="w-1/2 text-left mb-16 flex items-center justify-center">
      <div className="w-full">
        <h2 className="text-4xl font-semibold text-center">Trip List</h2>
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

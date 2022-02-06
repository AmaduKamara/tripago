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
    <div className="container mx-auto text-left">
      <h2 className="text-4xl font-semibold text-center">Trip List</h2>
      <ul className="mt-10">
        {trips &&
          trips.map((trip) => (
            <li key={trip.id} className="p-10 shadow-md mb-6 rounded-md border">
              <h3 className="text-2xl font-semibold text-gray-600">
                {trip.title}
              </h3>
              <p className="text-teal-400 mt-5 text-xl">{trip.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TripList;

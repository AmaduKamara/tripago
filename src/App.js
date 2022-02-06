import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import TripList from "./components/TripList";

function App() {
  const [showTrips, setShowTrips] = useState(true);

  return (
    <div className="App">
      <Header />
      <button
        onClick={() => setShowTrips(false)}
        type="button"
        className="text-sky-400 focus:outline-none"
      >
        Hide Trips
      </button>
      <div className="flex justify-center">{showTrips && <TripList />}</div>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import TripList from "./components/TripList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex justify-center">
        <TripList />
      </div>
    </div>
  );
}

export default App;

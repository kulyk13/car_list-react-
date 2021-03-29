import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "./data/DataContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./App.css";
import CardList from "./components/CardList/CardList";
import SortSelect from "./components/SortSelect/SortSelect";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
library.add(fas, far);

function App() {
  // const [count, setCount] = useState(0);
  const [cars, setCars] = useState([]);
  // const [rate, setRate] = useState([]);
  // const { setCars } = useContext(DataContext);
  useEffect(() => {
    (async function () {
      const data = await fetch("./data/cars.json").then((r) => r.json());
      setCars(data);
    })();
  }, []);

  // useEffect(() => {
  //   (async function () {
  //     const rate = await fetch(
  //       "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
  //     ).then((r) => r.json());
  //     setRate(rate);
  //   })();
  // }, []);
  return (
    <DataContext.Provider value={cars}>
      <div className="container">
        <h1 className="main-title pt-4">Car list</h1>
        <div className="App row">
          <div className="col-12 mt-3 mb-5 pt-3 g-0 top-bar">
            <SortSelect changeCars={setCars} />
          </div>
          <div className="col-3 filter-bar"></div>
          <div className="col-9 g-0">
            <CardList cards={cars} />
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}
export default App;

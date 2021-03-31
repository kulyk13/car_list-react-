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
import SearchForm from "./components/SearchForm/SearchForm";
import { Converter } from './components/Converter/Converter';
library.add(fas, far);

function App() {
  const [cars, setCars] = useState([]);
  const [usdRate, setUsdRate] = useState(null);

  async function getCars() {
    const data = await fetch("./data/cars.json").then((r) => r.json());
    setCars(data);
  };
  
  useEffect(() => {
    getCars()
  }, []);

  useEffect(() => {
    (async function () {
      const rate = await fetch(
        "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
      ).then((r) => r.json());
      setUsdRate(rate[0].buy);
    })();
  }, []);
  return (
    <DataContext.Provider value={{cars, setCars, usdRate}}>
      <div className="container">
        <Converter/>
        <h1 className="main-title pt-4">Car list</h1>
        <div className="app row">
          <div className="col-12 mt-3 mb-5 pt-3 g-0 top-bar">
            <SortSelect changeCars={setCars} />
            <SearchForm changeCars={setCars} />
          </div>
          <div className="col-3 filter-bar"></div>
          <div className="col-9 g-0">
            <CardList />
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}
export default App;

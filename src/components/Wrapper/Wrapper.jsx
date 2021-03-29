import React, { useEffect, useState, useContext } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./Wrapper.css";
import CardList from "../CardList/CardList";
import SortSelect from "../SortSelect/SortSelect";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { DataContext } from "../../data/DataContext";
library.add(fas, far);

function Wrapper() {
  const [cars, setCars] = useState([]);
  const [rate, setRate] = useState([]);
  const { setCount } = useContext(DataContext);

  useEffect(() => {
    (async function () {
      const data = await fetch("./data/cars.json").then((r) => r.json());
      setCars(data);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const rate = await fetch(
        "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
      ).then((r) => r.json());
      setRate(rate);
    })();
  }, []);

  return (
    <div className="container">
      <h1 className="main-title pt-4">Car list</h1>
      <div className="App row">
        <div className="col-12 mt-3 mb-5 pt-3 g-0 top-bar">
          <SortSelect changeCars={setCars} />
        </div>
        <div className="col-3 filter-bar">
          <button onClick={(e) => setCount((prev) => prev + 1)}>
            Count +1
          </button>
        </div>
        <div className="col-9 g-0">
          <CardList cards={cars} rates={rate} />
        </div>
      </div>
    </div>
  );
}

export default Wrapper;

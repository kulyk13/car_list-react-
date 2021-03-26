// import React, { useEffect, useSatate } from 'react';
import "./App.css";
import React, { useEffect } from "react";
import Card from "./components/Card/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  useEffect(() => {
    let CARS = fetch("./data/cars.json").then((r) => r.json());
  }, []);
  const nums = [1, 2, 3, 4, 5];
  return (
    <div className="container">
      <h1 className="main-title pt-4">Car list</h1>
      <div className="app row">
        <div className="col-12 mt-3 mb-5 pt-3 g-0 top-bar"></div>
        <div className="col-3 filter-bar"></div>
        <div className="col-9 g-0">
          <div className="row row-cols-1 g-0 card-list" id="cardList">
            {nums.map((car) => (
              <Card
                id={car.id}
                make={car.make}
                model={car.model}
                year={car.year}
                img={car.img}
                color={car.color}
                vin={car.vin}
                country={car.country}
                rating={car.rating}
                price={car.price}
                views={car.views}
                seller={car.seller}
                vin_check={car.vin_check}
                top={car.top}
                timestamp={car.timestamp}
                phone={car.phone}
                fuel={car.fuel}
                engine_volume={car.engine_volume}
                transmission={car.transmission}
                odo={car.odo}
                consume={car.consume}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// import React, { useEffect, useSatate } from 'react';
import "./App.css";
import Card from "./components/Card/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="container">
      <h1 class="main-title pt-4">Car list</h1>
      <div className="app row">
        <div className="col-12 mt-3 mb-5 pt-3 g-0 top-bar"></div>
        <div className="col-3 filter-bar"></div>
        <div className="col-9 g-0">
          <div className="row row-cols-1 g-0 card-list" id="cardList">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

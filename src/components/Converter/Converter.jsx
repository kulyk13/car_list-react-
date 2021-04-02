import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../data/DataContext";

export default function Converter() {
  const { allRates } = useContext(DataContext);
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");

  function changeCurrency(e) {
    if (e.target.value === "UAH") {
      console.log("UAH");
    } else if (e.target.value === "USD") {
      console.log("USD");
    } else if (e.target.value === "EUR") {
      console.log("EUR");
    } else if (e.target.value === "RUR") {
      console.log("RUR");
    }
  }
  function change1(e) {
    setVal1(e.target.value);
    setVal2((e.target.value * allRates[0].sale).toFixed(2));
  }
  function change2(e) {
    setVal2(e.target.value);
    setVal1((e.target.value / allRates[0].sale).toFixed(2));
  }
  return (
    <div className="converter pt-3">
      <div className="field mb-2">
        <input
          type="number"
          value={val1}
          placeholder={"Value1"}
          onChange={change1}
          min="0"
        />
        <select
          onChange={changeCurrency}
          name="selectCurrency"
          id="selectCurrency1"
          defaultValue="USD"
        >
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUR">RUR</option>
        </select>
      </div>
      <div className="field">
        <input
          type="number"
          value={val2}
          placeholder={"Value2"}
          onChange={change2}
          min="0"
        />
        <select
          onChange={changeCurrency}
          name="selectCurrency"
          id="selectCurrency2"
          defaultValue="UAH"
        >
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="RUR">RUR</option>
        </select>
      </div>
    </div>
  );
}

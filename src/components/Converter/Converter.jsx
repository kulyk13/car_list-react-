import React, { useState, useContext } from "react";
import { DataContext } from "../../data/DataContext";

export default function Converter() {
  const { allRates } = useContext(DataContext);
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const rate = allRates[0];

  function changeCurrency(e) {
    if () {
      
    }
  }
  function change1(e) {
    setVal1(e.target.value);
    setVal2((e.target.value * rate.sale).toFixed(2));
  }
  function change2(e) {
    setVal2(e.target.value);
    setVal1((e.target.value / rate.sale).toFixed(2));
  }
  return (
    <>
      <input
        type="number"
        value={val1}
        placeholder={"Value1"}
        onChange={change1}
      />
      <select
        onChange={changeCurrency}
        name="selectCurrency"
        id="selectCurrency"
      >
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="RUR">RUR</option>
      </select>
      <input
        type="number"
        value={val2}
        placeholder={"Value2"}
        onChange={change2}
      />
      <select
        onChange={changeCurrency}
        name="selectCurrency"
        id="selectCurrency"
      >
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="RUR">RUR</option>
      </select>
    </>
  );
}

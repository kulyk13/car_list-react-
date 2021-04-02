import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../../data/DataContext";

export default function Converter() {
  const { allRates } = useContext(DataContext);
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const [curr1, setCurr1] = useState("");
  const [curr2, setCurr2] = useState("");

  const [sel1, setSel1] = useState(true);
  const [sel2, setSel2] = useState(true);

  useEffect(() => {
    if (allRates.length > 0) {
      setCurr1("UAH");
      setCurr2("EUR");
      console.log(allRates);
    }
  }, [allRates]);

  useEffect(() => {
    if (allRates.length > 0) {
      changeCurr1(val1);
    }
  }, [sel1]);
  useEffect(() => {
    if (allRates.length > 0) {
      changeCurr2(val2);
    }
  }, [sel2]);

  function change1(e) {
    setVal1(e.target.value);
    changeCurr1(e.target.value);
  }
  function changeCurr1(val) {
    if (curr1 === "UAH") {
      console.log("change1 curr1 == uah");
      let anotherCurr = allRates.find((c) => c.ccy === curr2);
      setVal2((val / anotherCurr.sale).toFixed(2));
    } else if (curr2 === "UAH") {
      console.log("change1 curr2 == uah");
      let thisCurr = allRates.find((c) => c.ccy === curr1);
      setVal2((val * thisCurr.sale).toFixed(2));
    } else {
      console.log("change1 curr !== uah");
      let thisCurr = allRates.find((c) => c.ccy === curr1);
      let anotherCurr = allRates.find((c) => c.ccy === curr2);
      setVal2(((val * thisCurr.sale) / anotherCurr.sale).toFixed(2));
    }
  }

  function change2(e) {
    setVal2(e.target.value);
    changeCurr2(e.target.value);
  }
  function changeCurr2(val) {
    if (curr2 === "UAH") {
      console.log("change2 curr1 == uah");
      let anotherCurr = allRates.find((c) => c.ccy === curr1);
      setVal1((val / anotherCurr.sale).toFixed(2));
    } else if (curr1 === "UAH") {
      console.log("change2 curr2 == uah");
      let thisCurr = allRates.find((c) => c.ccy === curr2);
      setVal1((val * thisCurr.sale).toFixed(2));
    } else {
      console.log("change2 curr !== uah");
      let thisCurr = allRates.find((c) => c.ccy === curr2);
      let anotherCurr = allRates.find((c) => c.ccy === curr1);
      setVal1(((val * thisCurr.sale) / anotherCurr.sale).toFixed(2));
    }
  }
  function changeCurr(e) {
    if (e.target.name === "curr1") {
      if (e.target.value === curr2) {
        setCurr2(curr1);
      }
      setCurr1(e.target.value);
      setSel1(!sel1);
    } else if (e.target.name === "curr2") {
      if (e.target.value === curr1) {
        setCurr1(curr2);
      }
      setCurr2(e.target.value);
      setSel2(!sel2);
    }
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
        <select onChange={changeCurr} name="curr1" value={curr1}>
          <option value={"UAH"}>UAH</option>
          {allRates.map(
            (curr) =>
              curr.ccy !== "BTC" && (
                <option key={curr.ccy} value={curr.ccy}>
                  {curr.ccy}
                </option>
              )
          )}
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
        <select onChange={changeCurr} name="curr2" value={curr2}>
          <option value={"UAH"}>UAH</option>
          {allRates.map(
            (curr) =>
              curr.ccy !== "BTC" && (
                <option key={curr.ccy} value={curr.ccy}>
                  {curr.ccy}
                </option>
              )
          )}
        </select>
      </div>
    </div>
  );
}

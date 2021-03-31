import React, { useState } from "react";

export function Converter() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const rate = 27
  function change1(e) {
      setVal1(e.target.value)
      setVal2((e.target.value * rate).toFixed(2))
  }
  function change2(e) {
      setVal2(e.target.value)
      setVal1((e.target.value / rate).toFixed(2))
  }
  return (
    <>
      <input type="number" value={val1} placeholder={'Value1'} onChange={change1} />
      <input type="number" value={val2} placeholder={'Value2'} onChange={change2} />
    </>
  );
}

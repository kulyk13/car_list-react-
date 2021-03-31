import React, { useContext } from "react";
import { DataContext } from "../../data/DataContext";

export default function SortSelect() {
  const { setCars: changeCars } = useContext(DataContext);

  function handleChange(e) {
    console.log(e.target.value);
    const [key, order] = e.target.value.split("/");
    changeCars((prevState) => {
      const cars = [...prevState];
      if (typeof cars[0][key] === "string") {
        cars.sort((a, b) => a[key].localeCompare(b[key]) * order);
      } else {
        cars.sort((a, b) => (a[key] - b[key]) * order);
      }
      return cars;
    });
  }
  return (
    <select
      onChange={handleChange}
      name="sortSelect"
      className="form-select me-5"
      aria-label="Default select example"
    >
      {/* <option value="default">За замовчуванням</option> */}
      <option value="price/1">Від дешевих до дорогих</option>
      <option value="price/-1">Від дорогих до дешевих</option>
      <option value="timestamp/-1">Дата додавання</option>
      <option value="year/1">Рік випуску, по зростанню</option>
      <option value="year/-1">Рік випуску, по спаданню</option>
      <option value="odo/1">Пробіг, по зростанню</option>
      <option value="odo/-1">Пробіг, по спаданню </option>
      <option value="make/1">Марка автомобіля, a-z</option>
    </select>
  );
}

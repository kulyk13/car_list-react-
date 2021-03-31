import React, { useContext } from "react";
import { DataContext } from "../../data/DataContext";

export default function SearchForm() {
  const {setCars: changeCars} = useContext(DataContext);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    let query = e.target.search.value.toLowerCase().trim().split(" "); //[mustang, ford]
    const searchFields = ["make", "model", "year"];
    const data = await fetch("./data/cars.json").then((r) => r.json());
    let filteredCars = data.filter((car) => {
      return query.every((word) => {
        return (
          !word ||
          searchFields.some((field) => {
            return `${car[field]}`.toLowerCase().trim().includes(word);
          })
        );
      });
    });
    console.log("search result", filteredCars.length);
    changeCars(filteredCars)
  }
  return (
    <form
      onSubmit={handleSubmit}
      action="#"
      class="col-6 form me-auto"
      name="searchForm"
      id="searchForm"
    >
      <div class="input-group">
        <input
          type="search"
          name="search"
          class="form-control"
          placeholder="Введіть запит"
          aria-label="Search car"
          aria-describedby="button-addon2"
        />
        <button
          class="btn-search btn btn-outline-secondary"
          type="submit"
          aria-label="search"
        >
          Пошук
        </button>
      </div>
    </form>
  );
}

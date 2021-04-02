import React, { useContext } from "react";
import { DataContext } from "../../data/DataContext";

export default function FilterForm() {
  const { cars } = useContext(DataContext);
  filterFormEl.btnSubmit.dataset.count = cars.length;
  function filter(e) {
    e.preventDefault();
    cars = filterCars(e.target);
    renderCards(CARS, cardListEl, true);
  }
  filterFormEl.addEventListener("change", function (event) {
    console.log(filterCars(this).length);
    this.btnSubmit.dataset.count = filterCars(this).length;
  });

  function filterCars(form) {
    const query = filterFields.map((field) => {
      return Array.from(form[field]).reduce((acu, currInput) => {
        if (field === "price") {
          return [...acu, +currInput.value];
        }
        if (currInput.checked) {
          return [...acu, currInput.value];
        } else {
          return acu;
        }
      }, []);
    });
    return DATA.filter((car) => {
      return query.every((values) => {
        return (
          !values.length ||
          filterFields.some((field) => {
            const carValue = `${car[field]}`;
            if (typeof values[0] === "number") {
              return carValue >= values[0] && carValue <= values[1];
            } else {
              return values.includes(carValue);
            }
          })
        );
      });
    });
  }

  function createFilterCheckbox(field, value) {
    return `<label>
    <input type="checkbox" name="${field}" value="${value}">
    ${value}
  </label>`;
  }
  function createPriceFilter(field, range) {
    return `<label className="d-flex align-items-center">
  від
  <input type="number" name="${field}" value="${range[0]}" min="${
      range[0]
    }" max="${range[1] - 1}" step="1" className="border col-4 me-3 m-2">
  до
  <input type="number" name="${field}" value="${range[1]}" min="${
      range[0] + 1
    }" max="${range[1]}" step="" className="border col-4 m-2">
  </label>`;
  }
  function createFilterSection(field, cars) {
    let html = "";
    const values = cars.map((car) => car[field]).sort();
    if (field === "price") {
      const range = [Math.min(...values), Math.max(...values)];
      html += createPriceFilter(field, range);
    } else {
      new Set(values).forEach((value) => {
        html += createFilterCheckbox(field, value);
      });
    }

    return `<fieldset className="filter-section d-flex flex-column p-1 mb-3">
  <legend>${field}</legend>
  ${html}
</fieldset>`;
  }
  function renderFilterPanel(cars, formEl, fields) {
    let html = "";
    fields.forEach((field) => {
      html += createFilterSection(field, cars);
    });
    formEl.insertAdjacentHTML("afterbegin", html);
  }
}

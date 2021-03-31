import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";
import { DataContext } from "../../data/DataContext";
import { 
  currencyUSDFormatter,
  currencyUAHFormatter,
  dateFormatter,
  timeFormatter } from "../../utils/formatters";

export default function Card({ car }) {
  const {usdRate} = useContext(DataContext);
  let starIcons = [];
  for (let i = 0; i < 5; i++) {
    if (car.rating - 0.5 > i) {
      starIcons.push(<FontAwesomeIcon icon={["fas", "star"]} />);
    } else if (car.rating > i) {
      starIcons.push(<FontAwesomeIcon icon={["fas", "star-half-alt"]} />);
    } else {
      starIcons.push(<FontAwesomeIcon icon={["far", "star"]} />);
    }
  }
  return (
    <div className="col card mb-3" data-id="">
      <div className="row g-0">
        <div className="col-4 card-img-wrap">
          <a href="#" className="w-100">
            <img
              className="card-img"
              width="1"
              height="1"
              loading="lazy"
              src={car.img}
              alt=""
            />
          </a>
        </div>
        <div className="col-8 card-body-wrap">
          <div className="card-body">
            <a href="#" className="card-title mb-3">
              {car.make} {car.model} {car.engine_volume} ({car.year})
            </a>
            <div className="price-block mb-2">
              <span className="card-price text-success">
                {currencyUSDFormatter.format(car.price)}
              </span>
              <span>•</span>
              <span>
                {usdRate && currencyUAHFormatter.format(car.price * usdRate)}
              </span>
            </div>
            <h4 className="card-rating text-warning">
              {starIcons}
              {car.rating}
            </h4>
            <div className="card-info mt-4">
              <ul className="main-info">
                <li className="mb-3">
                  <i>
                    <FontAwesomeIcon icon={["fas", "tachometer-alt"]} />
                  </i>
                  {car.odo} km
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon icon={["fas", "gas-pump"]} />
                  </i>
                  {car.fuel}, {car.engine_volume} l
                </li>
                <li className="mb-3">
                  <i>
                    <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
                  </i>
                  {car.country}
                </li>
                <li>
                  <i>
                    <FontAwesomeIcon icon={["fas", "cogs"]} />
                  </i>
                  {car.transmission}
                </li>
              </ul>
              <div className="row fuel-consume mt-4 mb-4">
                <h4>Витрати палива (л/100км):</h4>
                <ul className="consume col-7 mt-3 mb-0">
                  <li>
                    <i>
                      <FontAwesomeIcon icon={["fas", "city"]} />
                    </i>
                    {car.consume.city || "---"}
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon icon={["fas", "road"]} />
                    </i>
                    {car.consume.road || "---"}
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon icon={["fas", "exchange-alt"]} />
                    </i>
                    {car.consume.mixed || "---"}
                  </li>
                </ul>
              </div>
              {car.vin ? (
                <div
                  className={
                    "vin-block pe-3 " + (car.vin_check ? "check" : "uncheck")
                  }
                >
                  <span className="p-1 me-3">VIN</span>
                  <div className="card-vin">{car.vin}</div>
                </div>
              ) : (
                <div className="vin-block pe-3 undefined">
                  <span className="p-1 me-3">VIN</span>
                  <div className="card-vin">Невідомий</div>
                </div>
              )}
              <div className="color mt-4">Колір: {car.color}</div>
              <div className="contact-block mt-4">
                <a href="tel:{phone}" className=" btn btn-primary call-num">
                  <i className="me-2">
                    <FontAwesomeIcon icon={["fas", "phone-alt"]} />
                  </i>
                  Подзвонити
                </a>
                <p className="mb-0">{car.seller}</p>
              </div>
              <button type="button" className="save-star btn btn-secondary">
                <i>
                  <FontAwesomeIcon icon={["fas", "star"]} />
                </i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 card-footer">
          <small className="text-muted">
            <i>
              <FontAwesomeIcon icon={["far", "clock"]} />
            </i>
            <i>
              {dateFormatter.format(car.timestamp)}
            </i>
            <i>
              {timeFormatter.format(car.timestamp)}
            </i>
          </small>
          <small className="text-muted">
            <i>
              <FontAwesomeIcon icon={["fas", "eye"]} />
            </i>
            {car.views}
          </small>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";

function Card({
  id,
  make,
  model,
  year,
  img,
  color,
  vin,
  country,
  rating,
  price,
  views,
  seller,
  vin_check,
  top,
  timestamp,
  phone,
  fuel,
  engine_volume,
  transmission,
  odo,
  consume,
}) {
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
              src="http://dummyimage.com/153x232.jpg/cc0000/ffffff"
              alt=""
            />
          </a>
        </div>
        <div className="col-8 card-body-wrap">
          <div className="card-body">
            <a href="#" className="card-title mb-3">
              BMW M3 1.4 (2010)
              <FontAwesomeIcon icon={["fas", "star"]} />
            </a>
            <div className="price-block mb-2">
              <span className="card-price text-success">2100 $</span>
              <span>•</span>
              <span>60000</span>
            </div>
            <h4 className="card-rating text-warning">3</h4>
            <div className="card-info mt-4">
              <ul className="main-info">
                <li className="mb-3">
                  <i className="fas fa-tachometer-alt"></i>
                  39000 km
                </li>
                <li>
                  <i className="fas fa-gas-pump"></i>
                  1,4 l
                </li>
                <li className="mb-3">
                  <i className="fas fa-map-marker-alt"></i>
                  Ukraine
                </li>
                <li>
                  <i className="fas fa-cogs"></i>
                  MT
                </li>
              </ul>
              <div className="row fuel-consume mt-4 mb-4">
                <h4>Витрати палива (л/100км):</h4>
                <ul className="consume col-7 mt-3 mb-0">
                  <li>
                    <i className="fas fa-city"></i>7
                  </li>
                  <li>
                    <i className="fas fa-road"></i>8
                  </li>
                  <li>
                    <i className="fas fa-exchange-alt"></i>
                    7.5
                  </li>
                </ul>
              </div>
              <div className="vin-block pe-3">
                <span className="p-1 me-3">VIN</span>
                <div className="card-vin">350008844984849</div>
              </div>
              <div className="vin-block pe-3 undefined">
                <span className="p-1 me-3">VIN</span>
                <div className="card-vin">Невідомий</div>
              </div>
              <div className="color mt-4">Колір: Червоний</div>
              <div className="contact-block mt-4">
                <a
                  href="tel:+380956073448"
                  className=" btn btn-primary call-num"
                >
                  <i className="fas fa-phone-alt me-1"></i>
                  Подзвонити
                </a>
                <p className="mb-0">Anton</p>
              </div>
              <button type="button" className="save-star btn btn-secondary">
                <i className="fas fa-star"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 card-footer">
          <small className="text-muted">
            <i className="far fa-clock"></i>21.12.20 17:53
          </small>
          <small className="text-muted">
            <i className="fas fa-eye"></i> 10
          </small>
        </div>
      </div>
    </div>
  );
}

export default Card;

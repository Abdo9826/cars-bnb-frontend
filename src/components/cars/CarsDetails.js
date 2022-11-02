import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BackArrow from '../utils/BackArrow';

const CarDetails = () => {
  const cars = useSelector((state) => state.cars.cars);
  const params = useParams();
  const currentCar = cars.find((car) => car.id === Number(params.carId)) || {};

  return (
    <div className="car-details-container">
      <BackArrow myClassName="car-details-back-btn" />
      <div className="car-details-image-wrap">
        <img src={currentCar.featured_image} alt={currentCar.model} />
      </div>
      <div className="car-details">
        <h2>{ currentCar.model }</h2>
        <p>{ currentCar.brand }</p>
        <p>{ currentCar.specifications }</p>
        <p>{ currentCar.released_year }</p>
        <button
          type="button"
          className="reserve-btn"
        >
          Reserve
        </button>
      </div>
    </div>
  );
};

export default CarDetails;

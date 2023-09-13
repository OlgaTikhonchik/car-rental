import Modal from 'components/Modal/Modal';
import { useState } from 'react';

const CatalogItemCar = ({
  model,
  make,
  id,
  img,
  year,
  rentalPrice,
  type,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
  address,
  rentalCompany,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  return (
    <li>
      <button>heart</button>
      <img src={img} alt={make} />
      <h1>
        {make} <span>{model}</span>, {year}
      </h1>
      <ul>
        <li>
          <p>{rentalPrice}</p>
        </li>
        <li>
          <p>{city}</p>
        </li>
        <li>
          <p>{country}</p>
        </li>
        <li>
          <p>{rentalCompany}</p>
        </li>
        <li>
          <p>{type}</p>
        </li>
        <li>
          <p>{make}</p>
        </li>
        <li>
          <p>{mileage}</p>
        </li>
        <li>
          <p>{accessories}</p>
        </li>
      </ul>
      <button type="button" onClick={openModal}>
        Learn more
      </button>

      {isModalOpen && (
        <Modal
          onClose={closeModal}
          key={id}
          model={model}
          make={make}
          year={year}
          rentalPrice={rentalPrice}
          address={address}
          rentalCompany={rentalCompany}
          functionalities={functionalities}
          id={id}
          type={type}
          img={img}
          fuelConsumption={fuelConsumption}
          engineSize={engineSize}
          description={description}
          accessories={accessories}
          rentalConditions={rentalConditions}
          mileage={mileage}
        />
      )}
    </li>
  );
};

export default CatalogItemCar;

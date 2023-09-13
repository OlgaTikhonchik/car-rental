import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({
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

  onModalClose,
}) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        console.log('Нажали ESC, нужно закрыть модалку');
        onModalClose();
      }
    };
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      console.log('Modal componentWillUnmount');
    };
  }, [onModalClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onModalClose();
    }
  };

  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  return createPortal(
    <div onClick={handleBackdropClick}>
      <div>
        <button type="button" aria-label="close button">
          {' '}
          x{' '}
        </button>
        <img src={img} alt={make} />
        <h1>
          {make} <span>{model}</span>, {year}
        </h1>
      </div>
      <div>
        <ul>
          <li>{city}</li>
          <li>{country}</li>
          <li>id:{id}</li>
          <li>Year: {year}</li>
          <li>Type:{type}</li>
          <li>Fuel Consumption: {fuelConsumption}</li>
          <li>Engine Size:{engineSize}</li>
        </ul>
        <p>{description}</p>
        <div>
          <p>Accessories and functionalities:</p>
          <ul>
            {functionalities.map((string, index) => (
              <li key={index}>{string}</li>
            ))}
            {accessories.map((string, index) => (
              <li key={index}>{string}</li>
            ))}
          </ul>
        </div>
        <div>
          <p>Rental Conditions: </p>
          <ul>
            {rentalConditions.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
            <li>Mileage: {mileage}</li>
            <li>Price:{rentalPrice}</li>
          </ul>
        </div>
      </div>
      <a href="tel:+380730000000">Rental car</a>
    </div>,
    modalRoot
  );
};

export default Modal;

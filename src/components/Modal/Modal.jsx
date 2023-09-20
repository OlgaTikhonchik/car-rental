import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import {
  AccItem,
  AccList,
  AccTitle,
  Accessories,
  Backdrop,
  ButtonClose,
  CarInfo,
  CarText,
  CloseIcon,
  Container,
  Content,
  Descriprion,
  Img,
  Info,
  InfoDetal,
  InfoWrapper,
  ModelBlue,
  RentalButton,
  RentalContainer,
  RentalItem,
  RentalList,
  RentalTitle,
  Text,
} from './Modal.styled';

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
        onModalClose();
      }
    };
    //
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onModalClose();
    }
  };

  const addressParts = address.split(',');
  const city = addressParts[1];
  const country = addressParts[2];
  const rentalConditionsSplitted = rentalConditions.split('\n', 3);
  const firstElement = rentalConditionsSplitted[0];
  const match = firstElement.match(/\d+/);
  const number = parseInt(match[0], 10);

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Container>
        <Content>
          <ButtonClose
            type="button"
            aria-label="close button"
            onClick={onModalClose}
          >
            <CloseIcon />
          </ButtonClose>
          <Img src={img} alt={make} width={461} height={248} />
          <InfoWrapper>
            <Info>
              <CarInfo>
                <Text>{make}</Text>
                <ModelBlue>{model},</ModelBlue>
                <Text>{year}</Text>
              </CarInfo>
            </Info>
            <div>
              <InfoDetal>
                <CarText>{city}</CarText>
                <CarText>{country}</CarText>
                <CarText>id:{id}</CarText>
                <CarText>Year: {year}</CarText>
                <CarText>Type:{type}</CarText>
                <CarText>Fuel Consumption: {fuelConsumption}</CarText>
                <CarText>Engine Size:{engineSize}</CarText>
              </InfoDetal>
              <Descriprion>{description}</Descriprion>
              <Accessories>
                <AccTitle>Accessories and functionalities:</AccTitle>
                <AccList>
                  {functionalities.map((string, index) => (
                    <AccItem key={index}>{string}</AccItem>
                  ))}
                  {accessories.map((string, index) => (
                    <AccItem key={index}>{string}</AccItem>
                  ))}
                </AccList>
              </Accessories>
              <RentalContainer>
                <RentalTitle>Rental Conditions: </RentalTitle>
                <RentalList>
                  <RentalItem>
                    Minimum age: <span>{number}</span>
                  </RentalItem>
                  <RentalItem>{rentalConditionsSplitted[1]}</RentalItem>
                  <RentalItem>{rentalConditionsSplitted[2]}</RentalItem>
                  <RentalItem>
                    Mileage: <span>{mileage.toLocaleString('en-EN')}</span>
                  </RentalItem>
                  <RentalItem>
                    Price:<span>{rentalPrice}</span>
                  </RentalItem>
                </RentalList>
              </RentalContainer>
            </div>
            <RentalButton href="tel:+380730000000">Rental car</RentalButton>
          </InfoWrapper>
        </Content>
      </Container>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;

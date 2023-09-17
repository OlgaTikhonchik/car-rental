import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import {
  Button,
  CarImgWrapper,
  CarInfo,
  CarText,
  HeartIcon,
  HeartIconBlue,
  IconButton,
  Img,
  Info,
  InfoCar,
  Item,
  ModelBlue,
  TextInfo,
} from './CatalogItemCar.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavoriteList,
  deleteToFavoriteList,
} from '../../redux/favoriteSlice';

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
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite);
  const followStatus = favorite.includes(id);

  const incrementFavorite = () => {
    dispatch(addToFavoriteList(id));
  };
  const decrementFavorite = () => {
    dispatch(deleteToFavoriteList(id));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addressParts = address.split(',');

  const city = addressParts[1];
  const country = addressParts[2];

  const firstFunctionality = functionalities[0];

  return (
    <Item>
      <CarImgWrapper>
        <IconButton
          onClick={!followStatus ? incrementFavorite : decrementFavorite}
          type="button"
        >
          {!followStatus ? <HeartIcon /> : <HeartIconBlue />}
        </IconButton>
        <Img src={img} alt={make} />
      </CarImgWrapper>
      <InfoCar>
        <CarInfo>
          <CarText>
            {make}
            <ModelBlue>{model},</ModelBlue>
          </CarText>
          <CarText>{year}</CarText>
        </CarInfo>
        <CarText>{rentalPrice}</CarText>
      </InfoCar>
      <Info>
        <TextInfo>{city}</TextInfo>

        <TextInfo>{country}</TextInfo>

        <TextInfo>{rentalCompany}</TextInfo>

        <TextInfo>{type}</TextInfo>

        <TextInfo>{make}</TextInfo>

        <TextInfo>{id}</TextInfo>

        <TextInfo>{firstFunctionality}</TextInfo>
      </Info>

      <Button type="button" onClick={openModal}>
        Learn more
      </Button>

      {isModalOpen && (
        <Modal
          onModalClose={closeModal}
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
    </Item>
  );
};

export default CatalogItemCar;

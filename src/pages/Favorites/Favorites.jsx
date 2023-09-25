import { useDispatch, useSelector } from 'react-redux';
import carsSet from '../../images/carsSet.png';

import Filter from 'components/Filter/Filter';

import {
  Button,
  CatalogItem,
  FavoriteList,
  Images,
  Text,
} from './Favorite.styled';
import { Helmet } from 'react-helmet';
import CatalogItemCar from 'components/CatalogItemCar/CatalogItemCar';
import { getAllCars } from 'redux/operations';
import { useEffect, useState } from 'react';
import { clearCarsData } from 'redux/carsSlice';
import { selectCars, selectFavorite, selectIsLoading } from 'redux/selectors';

const Favorites = () => {
  const cars = useSelector(selectCars);
  const favorite = useSelector(selectFavorite);
  console.log('favorite', favorite);
  const selectedFavorite = cars.filter(car => favorite.includes(car.id));
  console.log('selectedFavorite', selectedFavorite);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();
  //const filtred = useSelector(selectFiltredCars);
  // const render = filtred ? filtred : selectedFavorite;
  const handleLoadClick = () => {
    setPage(page => page + 1);
  };

  useEffect(() => {
    dispatch(clearCarsData());
    setShowButton(false);
    setHasMore(false);
    setPage(1);
  }, [dispatch, favorite]);

  useEffect(() => {
    dispatch(getAllCars(page));
    setShowButton(true);

    setHasMore(true);
  }, [dispatch, page]);

  // ;
  // useEffect(() => {
  //   if (onFilter) {
  //     dispatch(getAllCarsWithoutPage());
  //   }
  // }, [dispatch, onFilter]);

  // const render = onFilter ? filtred : selectedFavorite;

  return (
    <>
      <Helmet>
        <title>Favorites</title>
      </Helmet>

      <Filter />

      <div>
        {selectedFavorite.length === 0 ? (
          <>
            <Text>You have not added any cars to your favorites yet.</Text>
            <Images src={carsSet} alt="cars" />
          </>
        ) : (
          <FavoriteList>
            {showButton &&
              selectedFavorite.map(
                ({
                  id,
                  model,
                  make,
                  year,
                  rentalPrice,
                  address,
                  rentalCompany,
                  functionalities,
                  type,
                  img,
                  fuelConsumption,
                  engineSize,
                  description,
                  accessories,
                  rentalConditions,
                  mileage,
                }) => (
                  <CatalogItem key={id}>
                    <CatalogItemCar
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
                  </CatalogItem>
                )
              )}
          </FavoriteList>
        )}
      </div>
      {selectedFavorite.length !== 0 && !isLoading && hasMore && (
        <Button onClick={handleLoadClick}>Load more</Button>
      )}
    </>
  );
};

export default Favorites;

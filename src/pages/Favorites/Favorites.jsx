import { useSelector } from 'react-redux';
import carsSet from '../../images/carsSet.png';

import Filter from 'components/Filter/Filter';

import { CatalogItem, FavoriteList, Images, Text } from './Favorite.styled';
import { Helmet } from 'react-helmet';
import CatalogItemCar from 'components/CatalogItemCar/CatalogItemCar';

const Favorites = () => {
  const cars = useSelector(state => state.cars.items);

  console.log('cars', cars);
  const favorite = useSelector(state => state.favorite.favoriteArray);

  const selectedFavorite = cars.filter(car => favorite.includes(car.id));
  console.log('selectedFavorite', selectedFavorite);

  console.log('selectedFavorite', selectedFavorite);
  console.log('selectedFavorite.length', selectedFavorite.length);

  console.log('favorite', favorite);
  const favoriteStore = useSelector(store => store.favorite);
  console.log('favoriteStore:', favoriteStore);

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
            {selectedFavorite &&
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
    </>
  );
};

export default Favorites;

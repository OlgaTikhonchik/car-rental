import CatalogItemCar from 'components/CatalogItemCar/CatalogItemCar';

import { useDispatch, useSelector } from 'react-redux';
import carsSet from '../../images/carsSet.png';

import Filter from 'components/Filter/Filter';
import CatalogListCars from 'components/CatalogListCars/CatalogListCars';
import { Text } from './Favorite.styled';

const Favorites = () => {
  const favorite = useSelector(state => state.favorite.favoriteArray);
  const cars = useSelector(state => state.cars.cars.items);
  console.log('cars', cars);

  const selectedFavorite = cars.filter(car => favorite.includes(car.id));
  console.log('selectedFavorite', selectedFavorite);

  console.log('favorite', favorite);
  const favoriteStore = useSelector(store => store.favorite);
  console.log('favoriteStore:', favoriteStore);

  return (
    <>
      {/* <h1>Favorites</h1> */}

      <Filter />

      {selectedFavorite.length === 0 ? (
        <>
          <Text>You have not added any cars to your favorites yet.</Text>
          <img src={carsSet} alt="cars" />
        </>
      ) : (
        <ul>
          {selectedFavorite.map(car => (
            <CatalogListCars car={car} key={car.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Favorites;

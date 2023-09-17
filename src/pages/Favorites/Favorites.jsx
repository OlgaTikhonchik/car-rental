import CatalogItemCar from 'components/CatalogItemCar/CatalogItemCar';

import { useSelector } from 'react-redux';
import carsSet from '../../images/carsSet.png';

import Filter from 'components/Filter/Filter';

const Favorites = () => {
  const favorite = useSelector(state => state.favorite);
  const cars = useSelector(state => state.cars.cars.items);
  console.log('cars', cars);

  const selectedFavorite = cars.filter(car => favorite.includes(car.id));
  console.log('selectedFavorite', selectedFavorite);

  console.log('favorite', favorite);
  const favoriteStore = useSelector(store => store.favorite);
  console.log('favoriteStore:', favoriteStore);

  return (
    <>
      <h1>Favorites</h1>

      <Filter />

      {selectedFavorite.length === 0 ? (
        <>
          <p>You have not added any cars to your favorites yet.</p>
          <img src={carsSet} alt="cars" />
        </>
      ) : (
        // <ul>
        //   {favorite.map(car => (
        //     <CatalogItemCar car={car} key={car.id} />
        //   ))}
        // </ul>
        <CatalogItemCar cars={selectedFavorite} />
      )}
    </>
  );
};

export default Favorites;

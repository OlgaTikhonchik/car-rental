import CatalogItemCar from 'components/CatalogItemCar/CatalogItemCar';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favorite = useSelector(state => state.favorite);
  console.log(favorite);

  return (
    <>
      <h1>Favorites</h1>

      {/* {cars.map(car => (
        <CatalogItemCar car={car} key={cars.id} />
      ))} */}
    </>
  );
};

export default Favorites;

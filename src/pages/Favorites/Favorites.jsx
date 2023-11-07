import { useDispatch, useSelector } from 'react-redux';
import carsSet from '../../images/carsSet.png';

import { FavoriteList, FavoriteWrap, Images, Text } from './Favorite.styled';
import { Helmet } from 'react-helmet';
import CatalogItemCar from 'components/CatalogItemCar/CatalogItemCar';
import { getAllCarsWithoutPage } from 'redux/operations';
import { useEffect } from 'react';
import { clearCarsData } from 'redux/carsSlice';
import {
  selectAllCars,
  selectError,
  selectFavorite,
  selectIsLoading,
  selectOnFilter,
} from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';

const Favorites = () => {
  const allCars = useSelector(selectAllCars);
  console.log('allCars', allCars);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const favorite = useSelector(selectFavorite);
  console.log('favorite', favorite);
  const selectedFavorite = allCars.filter(car => favorite.includes(car.id));

  console.log('selectedFavorite', selectedFavorite);
  const storeFilter = useSelector(store => store.filter);
  console.log('storeFilter', storeFilter);

  const dispatch = useDispatch();

  const onFilter = useSelector(selectOnFilter);

  useEffect(() => {
    dispatch(clearCarsData());
  }, [dispatch]);

  useEffect(() => {
    if (onFilter) {
      dispatch(getAllCarsWithoutPage());
    }
  }, [dispatch, onFilter]);

  return (
    <FavoriteWrap>
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      {/* {selectedFavorite.length !== 0 && <Filter />} */}
      {isLoading && !error && <Loader />}

      <div>
        {selectedFavorite.length === 0 ? (
          <>
            <Text>You have not added any cars to your favorites yet.</Text>
            <Images src={carsSet} alt="cars" />
          </>
        ) : (
          <>
            <FavoriteList>
              {selectedFavorite.map(car => (
                <CatalogItemCar key={car.id} dataCar={car} />
              ))}
            </FavoriteList>
          </>
        )}
      </div>
    </FavoriteWrap>
  );
};

export default Favorites;

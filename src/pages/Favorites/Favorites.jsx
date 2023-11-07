// import { useDispatch, useSelector } from 'react-redux';
// import carsSet from '../../images/carsSet.png';

// import Filter from 'components/Filter/Filter';

// import {
//   Button,
//   CatalogItem,
//   FavoriteList,
//   Images,
//   Text,
// } from './Favorite.styled';
// import { Helmet } from 'react-helmet';
// import CatalogItemCar from 'components/CatalogItemCar/CatalogItemCar';
// import { getAllCars } from 'redux/operations';
// import { useEffect, useState } from 'react';
// import { clearCarsData } from 'redux/carsSlice';
// import { selectCars, selectFavorite, selectIsLoading } from 'redux/selectors';

// const Favorites = () => {
//   const cars = useSelector(selectCars);
//   const favorite = useSelector(selectFavorite);
//   console.log('favorite', favorite);
//   const selectedFavorite = cars.filter(car => favorite.includes(car.id));
//   console.log('selectedFavorite', selectedFavorite);
//   const [page, setPage] = useState(1);
//   const [showButton, setShowButton] = useState(false);
//   const isLoading = useSelector(selectIsLoading);
//   const [hasMore, setHasMore] = useState(true);

//   const dispatch = useDispatch();
//   //const filtred = useSelector(selectFiltredCars);
//   // const render = filtred ? filtred : selectedFavorite;
//   const handleLoadClick = () => {
//     setPage(page => page + 1);
//   };

//   useEffect(() => {
//     dispatch(clearCarsData());
//     setShowButton(false);
//     setHasMore(false);
//   }, [dispatch]);

//   useEffect(() => {
//     dispatch(getAllCars(page));
//     setShowButton(true);

//     setHasMore(true);
//   }, [dispatch, page]);

//   // const render = onFilter ? filtred : selectedFavorite;

//   return (
//     <>
//       <Helmet>
//         <title>Favorites</title>
//       </Helmet>

//       <Filter />

//       <div>
//         {selectedFavorite.length === 0 ? (
//           <>
//             <Text>You have not added any cars to your favorites yet.</Text>
//             <Images src={carsSet} alt="cars" />
//           </>
//         ) : (
//           <FavoriteList>
//             {selectedFavorite.map(
//               ({
//                 id,
//                 model,
//                 make,
//                 year,
//                 rentalPrice,
//                 address,
//                 rentalCompany,
//                 functionalities,
//                 type,
//                 img,
//                 fuelConsumption,
//                 engineSize,
//                 description,
//                 accessories,
//                 rentalConditions,
//                 mileage,
//               }) => (
//                 <CatalogItem key={id}>
//                   <CatalogItemCar
//                     key={id}
//                     model={model}
//                     make={make}
//                     year={year}
//                     rentalPrice={rentalPrice}
//                     address={address}
//                     rentalCompany={rentalCompany}
//                     functionalities={functionalities}
//                     id={id}
//                     type={type}
//                     img={img}
//                     fuelConsumption={fuelConsumption}
//                     engineSize={engineSize}
//                     description={description}
//                     accessories={accessories}
//                     rentalConditions={rentalConditions}
//                     mileage={mileage}
//                   />
//                 </CatalogItem>
//               )
//             )}
//           </FavoriteList>
//         )}
//       </div>
//       {showButton && selectedFavorite.length !== 0 && !isLoading && hasMore && (
//         <Button onClick={handleLoadClick}>Load more</Button>
//       )}
//     </>
//   );
// };

// export default Favorites;
//////
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
  //selectCars,
  selectError,
  selectFavorite,
  //selectFavoriteCars,
  //selectFiltredCars,
  // selectFavoriteCars,
  // selectFiltredCars,
  //selectFiltredFavoriteCars,
  selectIsLoading,
  selectOnFilter,
} from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';

const Favorites = () => {
  //const cars = useSelector(selectCars);
  const allCars = useSelector(selectAllCars);
  console.log('allCars', allCars);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  // const filtred = useSelector(selectFiltredCars);
  //const filtred = useSelector(selectFiltredCars);
  //console.log('filtred', filtred);
  const favorite = useSelector(selectFavorite);
  console.log('favorite', favorite);
  const selectedFavorite = allCars.filter(car => favorite.includes(car.id));
  //const selectedFavorite = filtred.filter(car => favorite.includes(car.id));
  console.log('selectedFavorite', selectedFavorite);
  const storeFilter = useSelector(store => store.filter);
  console.log('storeFilter', storeFilter);
  // const [page, setPage] = useState(1);
  // const [showButton, setShowButton] = useState(false);
  // const isLoading = useSelector(selectIsLoading);
  // const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();

  // const filtredFavorites = useSelector(selectFiltredFavoriteCars);
  // console.log('filtredFavorites', filtredFavorites);
  // const favorites = useSelector(selectFavoriteCars);
  // console.log('favorites', favorites);
  const onFilter = useSelector(selectOnFilter);
  //const render = selectedFavorite ? selectedFavorite : filtred;

  // console.log('onFilter', onFilter);
  // const handleLoadClick = () => {
  //   setPage(page => page + 1);
  // };

  useEffect(() => {
    dispatch(clearCarsData());
    // setShowButton(false);
    // setHasMore(false);
  }, [dispatch]);

  useEffect(() => {
    if (onFilter) {
      dispatch(getAllCarsWithoutPage());
    }
  }, [dispatch, onFilter]);

  // useEffect(() => {
  //   dispatch(getAllCarsWithoutPage());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getAllCars());
  //   // setShowButton(true);

  //   // setHasMore(true);
  // }, [dispatch]);

  //const render = selectedFavorite ? selectedFavorite : filtred;
  //console.log('render', render);

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
      {/* {showButton && favorite.length !== 0 && !isLoading && hasMore && (
        <Button onClick={handleLoadClick}>Load more</Button>
      )} */}
    </FavoriteWrap>
  );
};

export default Favorites;

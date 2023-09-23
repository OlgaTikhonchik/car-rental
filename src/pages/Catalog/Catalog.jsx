// import CatalogListCars from 'components/CatalogListCars/CatalogListCars';
// import { getAllCars } from 'redux/operations';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { Loader } from 'components/Loader/Loader';
// import { Button } from './Catalog.styled';
// import Filter from 'components/Filter/Filter';
// import { clearCarsData } from 'redux/carsSlice';
// import { Helmet } from 'react-helmet';

// const Catalog = () => {
//   const dispatch = useDispatch();
//   const [page, setPage] = useState(1);
//   const isLoading = useSelector(state => state.cars.isLoading);
//   const error = useSelector(state => state.cars.error);

//   const handleLoadClick = () => setPage(page => page + 1);

//   useEffect(() => {
//     dispatch(clearCarsData());
//   }, [dispatch]);

//   useEffect(() => {
//     dispatch(getAllCars(page));
//   }, [dispatch, page]);

//   return (
//     <>
//       <Helmet>
//         <title>Catatlog</title>
//       </Helmet>

//       <Filter />
//       <CatalogListCars />

//       {isLoading && !error && <Loader />}
//       {error && <b>Error: {error}</b>}
//       {36 / 8 > page && !isLoading && (
//         <Button onClick={handleLoadClick}>Load more</Button>
//       )}
//     </>
//   );
// };

// export default Catalog;
//////
import CatalogListCars from 'components/CatalogListCars/CatalogListCars';
import { getAllCars, getAllCarsWithoutPage } from 'redux/operations';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'components/Loader/Loader';
import { Button } from './Catalog.styled';
import Filter from 'components/Filter/Filter';
import { clearCarsData } from 'redux/carsSlice';
import { Helmet } from 'react-helmet';
import { selectError, selectIsLoading } from 'redux/selectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  //const cars = useSelector(state => state.cars.items);
  // const {
  //   allCars,
  //   allCarsForFilter,
  //   onFilter,
  //   brandFilter,
  //   priceFilter,
  //   mileageFrom,
  //   mileageTo,
  //   isLoading,
  //   error,
  // } = useCars();

  const handleLoadClick = () => setPage(page => page + 1);

  useEffect(() => {
    dispatch(clearCarsData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCars(page));
  }, [dispatch, page]);

  // useEffect(() => {
  //   if (onFilter) {
  //     dispatch(getAllCarsWithoutPage());
  //   }
  // }, [dispatch, onFilter]);

  // const filteredCars = getFilteredCars(
  //   allCarsForFilter,
  //   brandFilter,
  //   priceFilter,
  //   mileageFrom,
  //   mileageTo
  // );

  // const combinedCars = onFilter ? filteredCars : allCars;

  return (
    <>
      <Helmet>
        <title>Catatlog</title>
      </Helmet>

      <Filter />
      {/* {filteredCars.length === 0 && onFilter ? (
        <b>Error: {error}</b>
      ) : ( */}
      {/* <CatalogListCars data={combinedCars} /> */}
      {/* )} */}
      <CatalogListCars />
      {isLoading && !error && <Loader />}

      {error && <b>Error: {error}</b>}

      {36 / 8 > page && !isLoading && (
        <Button onClick={handleLoadClick}>Load more</Button>
      )}
    </>
  );
};

export default Catalog;

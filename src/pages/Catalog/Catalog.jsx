import CatalogListCars from 'components/CatalogListCars/CatalogListCars';
import { getAllCars } from 'redux/operations';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from 'components/Loader/Loader';
import { Button } from './Catalog.styled';
import Filter from 'components/Filter/Filter';

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const isLoading = useSelector(state => state.cars.cars.isLoading);
  const error = useSelector(state => state.cars.cars.error);
  console.log('error', error);

  useEffect(() => {
    dispatch(getAllCars(page));
  }, [dispatch, page]);

  const handleLoadClick = () => {
    setPage(page => page + 1);
    // setPage(prev => prev + 1);
  };

  return (
    <>
      {/* <h1>Catalog</h1> */}
      <Filter />
      <CatalogListCars />

      {isLoading && !error && <Loader />}
      {error && <b>Error: {error}</b>}
      {page < 4 && !isLoading && (
        <Button onClick={handleLoadClick}>Load more</Button>
      )}
    </>
  );
};

export default Catalog;

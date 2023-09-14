import CatalogListCars from 'components/CatalogListCars/CatalogListCars';
import { getAllCars } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <>
      <h1>Catalog</h1>
      <CatalogListCars />
    </>
  );
};

export default Catalog;

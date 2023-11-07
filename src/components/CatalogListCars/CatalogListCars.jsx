import CatalogItemCar from 'components/CatalogItemCar/CatalogItemCar';
import { useSelector } from 'react-redux';
import { Container, List } from './CatalogListCar.styled';
import { selectCars, selectFiltredCars } from 'redux/selectors';

const CatalogListCars = () => {
  const cars = useSelector(selectCars);
  console.log(cars);
  const store = useSelector(store => store.cars);
  console.log(store);
  const filtred = useSelector(selectFiltredCars);
  console.log('filtred', filtred);
  const render = filtred ? filtred : cars;

  return (
    <Container>
      <List>
        {render.map(car => (
          <CatalogItemCar key={car.id} dataCar={car} />
        ))}
      </List>
    </Container>
  );
};

export default CatalogListCars;

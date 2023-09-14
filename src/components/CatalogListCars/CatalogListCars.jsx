import CatalogItemCar from 'components/CatalogItemCar/CatalogItemCar';
import { useSelector } from 'react-redux';
import { CatalogItem, Container, List } from './CatalogListCar.styled';

//import cars from 'components/adverts.json';

const CatalogListCars = () => {
  const cars = useSelector(state => state.cars.cars.items);
  console.log(cars);

  // const store = useSelector(store => store);
  // console.log('store:', store);

  // const carsStore = useSelector(store => store.cars);
  // console.log('carsStore:', carsStore);
  return (
    <Container>
      <List>
        {cars.map(
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
      </List>
    </Container>
  );
};

export default CatalogListCars;

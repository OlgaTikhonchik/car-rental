// import CatalogItemCar from 'components/CatalogItemCar/CatalogItemCar';
// import { useSelector } from 'react-redux';
// import { CatalogItem, Container, List } from './CatalogListCar.styled';
// import { selectCars, selectFiltredCars } from 'redux/selectors';

// const CatalogListCars = () => {
//   const cars = useSelector(selectCars);
//   console.log(cars);
//   const store = useSelector(store => store.cars);
//   console.log(store);
//   const filtred = useSelector(selectFiltredCars);
//   const render = filtred ? filtred : cars;

//   return (
//     <Container>
//       <List>
//         {render.map(
//           ({
//             id,
//             model,
//             make,
//             year,
//             rentalPrice,
//             address,
//             rentalCompany,
//             functionalities,
//             type,
//             img,
//             fuelConsumption,
//             engineSize,
//             description,
//             accessories,
//             rentalConditions,
//             mileage,
//           }) => (
//             <CatalogItem key={id}>
//               <CatalogItemCar
//                 key={id}
//                 model={model}
//                 make={make}
//                 year={year}
//                 rentalPrice={rentalPrice}
//                 address={address}
//                 rentalCompany={rentalCompany}
//                 functionalities={functionalities}
//                 id={id}
//                 type={type}
//                 img={img}
//                 fuelConsumption={fuelConsumption}
//                 engineSize={engineSize}
//                 description={description}
//                 accessories={accessories}
//                 rentalConditions={rentalConditions}
//                 mileage={mileage}
//               />
//             </CatalogItem>
//           )
//         )}
//       </List>
//     </Container>
//   );
// };

// export default CatalogListCars;
///
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

// import {
//   Form,
//   Option,
//   Label,
//   Select,
//   SelectBrand,
//   FormBrand,
//   Saidbar,
//   FormMileage,
//   MileageInputWrapper,
//   MileageInputLeft,
//   MileageInputRight,
//   Button,
// } from './Filter.styled';

// const makesList = [
//   'Buick',
//   'Volvo',
//   'HUMMER',
//   'Subaru',
//   'Mitsubishi',
//   'Nissan',
//   'Lincoln',
//   'GMC',
//   'Hyundai',
//   'Mini',
//   'Bentley',
//   'Mercedes-Benz',
//   'Aston Martin',
//   'Pontiac',
//   'Lamborghini',
//   'Audi',
//   'BMW',
//   'Chevrolet',
//   'Mercedes-Benz',
//   'Chrysler',
//   'Kia',
//   'Land',
// ];

// const Filter = () => {
//   return (
//     <>
//       <Saidbar>
//         <FormBrand>
//           <Label htmlFor="make-select">Car brand</Label>
//           <SelectBrand id="make-select">
//             <option value="without">All cars</option>
//             {makesList.map((el, index) => (
//               <Option key={index} value={el}>
//                 {el}
//               </Option>
//             ))}
//           </SelectBrand>
//         </FormBrand>
//         <Form>
//           <Label htmlFor="price-select">Price/ 1 hour</Label>
//           <Select id="price-select">
//             <Option value="">To $</Option>

//             <Option value="30">To $30 </Option>
//             <Option value="40">To $40</Option>
//             <Option value="50">To $50</Option>
//             <Option value="60">To $60</Option>
//             <Option value="70">To $70</Option>
//             <Option value="80">To $80</Option>
//             <Option value="90">To $90</Option>
//           </Select>
//         </Form>
//         <FormMileage>
//           <Label htmlFor="mileageTitle">Car mileage / km </Label>
//           <MileageInputWrapper>
//             <MileageInputLeft
//               id="mileageTitle"
//               placeholder="From"
//               type="text"
//               name="mileageFrom"
//             />

//             <MileageInputRight
//               id="mileageTitle"
//               type="text"
//               name="mileageTo"
//               placeholder="To"
//             />
//           </MileageInputWrapper>
//         </FormMileage>
//         <Button type="submit"> Search </Button>
//       </Saidbar>
//     </>
//   );
// };

// export default Filter;

// ...
import { useEffect, useState } from 'react';
import {
  Form,
  Option,
  Label,
  Select,
  SelectBrand,
  FormBrand,
  Saidbar,
  FormMileage,
  MileageInputWrapper,
  MileageInputLeft,
  MileageInputRight,
  Button,
} from './Filter.styled';
import { getAllCars } from 'redux/operations';
import { useCars } from 'hooks/useCars';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const makesList = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'Mini',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

const priceList = [30, 40, 50, 60, 70, 80, 90];

const Filter = () => {
  // const { brandFilter, priceFilter } = useCars();
  // const [selectedBrand, setSelectedBrand] = useState(
  //   brandFilter ? brandFilter : 'All cars'
  // );

  const storeFilter = useSelector(store => store.filter);
  console.log('storeFilter', storeFilter);
  const storeFilterBrand = useSelector(store => store.filter.brand);
  console.log('storeFilterBrand=>', storeFilterBrand);
  const storeFilterPrice = useSelector(store => store.filter.price);
  console.log('storeFilterPrice=>', storeFilterPrice);
  const storeFilterMileageFrom = useSelector(store => store.filter.mileageFrom);
  console.log('storeFilterMileageFrom=>', storeFilterMileageFrom);
  const storeFilterMileageTo = useSelector(store => store.filter.mileageTo);
  console.log('storeFilterMileageTo=>', storeFilterMileageTo);

  // const [isShownSelectBrand, setShownSelectBrand] = useState(false);
  // const [isShownSelectPrice, setShownSelectPrice] = useState(false);
  // const [selectedPrice, setSelectedPrice] = useState(
  //   priceFilter ? priceFilter : 'To $'
  // );
  // const [selectedFromMileage, setSelectedFromMileage] = useState('');
  // const [selectedToMileage, setSelectedToMileage] = useState('');
  // const dispatch = useDispatch();
  // console.log('selectedBrand', selectedBrand);
  // const handleShownSelectedBrand = e => {
  //   e.preventDefault();
  //   setShownSelectBrand(e.target.value.make);
  // };

  // const handleShownSelectedPrice = e => {
  //   e.preventDefault();
  //   setShownSelectPrice(prev => !prev);
  // };
  // const changeBrand = brand => {
  //   setSelectedBrand(brand);
  //   setShownSelectBrand(false);
  // };
  // const changePrice = price => {
  //   setSelectedPrice(price + ' $');
  //   setShownSelectPrice(false);
  // };

  // const handleInputChangeFrom = e => {
  //   const { value } = e.target;
  //   setSelectedFromMileage(value.replace(/,/g, ''));
  // };

  // const handleInputChangeTo = e => {
  //   const { value } = e.target;
  //   setSelectedToMileage(value.replace(/,/g, ''));
  // };

  // const handleFilterSubmit = e => {
  //   e.preventDefault();
  //   if (
  //     selectedBrand === 'All cars' &&
  //     selectedPrice === 'To $' &&
  //     !selectedFromMileage &&
  //     !selectedToMileage
  //   ) {
  //     return;
  //   }
  //   const data = {
  //     brand: selectedBrand === 'All cars' ? '' : selectedBrand,
  //     price: selectedPrice === 'To $' ? '' : `$${parseInt(selectedPrice, 10)}`,
  //     mileageFrom: selectedFromMileage.trim(),
  //     mileageTo: selectedToMileage.trim(),
  //     onFilter: true,
  //   };
  //   dispatch(setFilter(data));
  // };

  // const handleFilterClear = e => {
  //   e.preventDefault();
  //   const data = {
  //     brand: '',
  //     price: '',
  //     mileageFrom: '',
  //     mileageTo: '',
  //     onFilter: false,
  //   };

  //   dispatch(setFilter(data));
  //   setSelectedBrand('All cars');
  //   setSelectedPrice('To $');
  //   setSelectedFromMileage('');
  //   setSelectedToMileage('');
  // };

  const dispatch = useDispatch();

  const handleSubmitForm = e => {
    e.preventDefault();
    const form = e.target;
    const brand = form.elements.brand.value;
    const mileageFrom = form.elements.mileageFrom.value;
    const mileageTo = form.elements.mileageTo.value;
    const price = form.elements.price.value;

    dispatch(setFilter({ brand, price, mileageFrom, mileageTo }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Saidbar>
        <FormBrand>
          <Label htmlFor="make-select">Car brand</Label>
          <SelectBrand id="make-select" name="brand">
            <option value="without">All cars</option>
            {makesList.map((el, id) => (
              <Option key={id} value={el}>
                {el}
              </Option>
            ))}
          </SelectBrand>
        </FormBrand>
        <Form>
          <Label htmlFor="price-select">Price/ 1 hour</Label>
          <Select id="price-select" name="price">
            <Option value="without"> To $</Option>
            {priceList.map((el, id) => (
              <Option key={id} value={el}>
                {`To $${el}`}
              </Option>
            ))}

            {/* <Option value="30">To $30 </Option>
            <Option value="40">To $40</Option>
            <Option value="50">To $50</Option>
            <Option value="60">To $60</Option>
            <Option value="70">To $70</Option>
            <Option value="80">To $80</Option>
            <Option value="90">To $90</Option> */}
          </Select>
        </Form>
        <FormMileage>
          <Label htmlFor="mileageTitle">Car mileage / km </Label>
          <MileageInputWrapper>
            <MileageInputLeft
              id="mileageTitle"
              placeholder="From"
              type="text"
              name="mileageFrom"
            />

            <MileageInputRight
              id="mileageTitle"
              type="text"
              name="mileageTo"
              placeholder="To"
            />
          </MileageInputWrapper>
        </FormMileage>
        <Button type="submit"> Search </Button>
        <Button type="submit">Clear filter</Button>
      </Saidbar>
    </form>
  );
};

export default Filter;
////

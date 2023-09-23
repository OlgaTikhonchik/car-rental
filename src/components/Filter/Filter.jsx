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
